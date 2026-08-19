// SVG icon helpers — consistent 2px stroke style
const icons = {
    calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    bookOpen:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
};

// ─────────────────────────────────────────────
// TEACHER
// ─────────────────────────────────────────────
function renderTeacher(classId) {
    const teacher = classData[classId].teacher;
    const teacherImage = document.getElementById("teacher-image");
    const teacherName  = document.getElementById("teacher-name");
    const teacherLabel = document.getElementById("teacher-class-label");

    teacherImage.style.opacity = 0;
    setTimeout(() => {
        teacherImage.src = teacher.image;
        teacherName.textContent = teacher.name;
        teacherLabel.textContent = classId;
        teacherImage.style.opacity = 1;
    }, 150);
}

// ─────────────────────────────────────────────
// MEMORIES — horizontal carousel
// ─────────────────────────────────────────────
function renderMemories(classId) {
    const memories   = classData[classId].memories || [];
    const track      = document.getElementById("memoryTrack");
    const pagination = document.getElementById("memoryPagination");
    const carousel   = document.getElementById("memoryCarousel");

    if (!track || !pagination || !carousel) return;

    // 1. Clear previous content
    track.innerHTML      = "";
    pagination.innerHTML = "";

    // 2. Empty state
    if (memories.length === 0) {
        track.innerHTML = '<div class="memory-empty">Belum ada memori untuk kelas ini.</div>';
        return;
    }

    // 3. Build cards
    memories.forEach((memory, i) => {
        const card = document.createElement("div");
        card.className = "memory-card";
        card.dataset.index = i;

        card.innerHTML = `
            <img
                src="${memory.image}"
                alt="${memory.title}"
                class="memory-image"
                loading="eager"
            >
            <div class="memory-fallback" style="display:none; align-items:center; justify-content:center; aspect-ratio:16/10; background:var(--clr-pink-soft); color:var(--clr-text-muted); font-size:0.85rem; font-weight:600; border-bottom:2px solid var(--clr-border);">
                📷 ${memory.title}
            </div>
            <div class="memory-info">
                <h3 class="memory-title">${memory.title}</h3>
                <p class="memory-date">${icons.calendar}${memory.date}</p>
            </div>
        `;
        // Wire up image error fallback after appending to DOM
        const img = card.querySelector('.memory-image');
        const fallback = card.querySelector('.memory-fallback');
        if (img && fallback) {
            img.addEventListener('error', () => {
                img.style.display = 'none';
                fallback.style.display = 'flex';
            });
        }

        track.appendChild(card);
    });

    // 4. Build dot pagination (only if more than 1 memory)
    if (memories.length > 1) {
        memories.forEach((_, i) => {
            const dot = document.createElement("button");
            dot.className = "memory-dot" + (i === 0 ? " is-active" : "");
            dot.setAttribute("aria-label", `Memory ${i + 1}`);
            dot.dataset.index = i;
            dot.addEventListener("click", () => scrollToCard(i));
            pagination.appendChild(dot);
        });
    }

    // 5. Reset carousel scroll to beginning
    carousel.scrollLeft = 0;

    // 6. Update arrow states
    updateCarouselButtons();

    // 7. Register new cards with the IntersectionObserver if available
    if (window._revealObserver) {
        track.querySelectorAll(".memory-card").forEach(el => {
            window._revealObserver.observe(el);
        });
    }
}

// ─────────────────────────────────────────────
// RULES
// ─────────────────────────────────────────────
function renderRules() {
    const container = document.getElementById("rules-container");
    container.innerHTML = "";

    rules.forEach((rule, index) => {
        const num  = String(index + 1).padStart(2, '0');
        const card = document.createElement("div");
        card.className = "rule-card reveal";
        card.innerHTML = `
            <div class="rule-number">${num}</div>
            <p class="rule-text">${rule}</p>
        `;
        container.appendChild(card);
    });
}

// ─────────────────────────────────────────────
// STUDENTS
// ─────────────────────────────────────────────
function renderStudents() {
    const container    = document.getElementById("students-container");
    const countElement = document.getElementById("student-count");

    container.innerHTML      = "";
    countElement.textContent = students.length;

    students.forEach((student, index) => {
        const num  = String(index + 1).padStart(2, '0');
        const item = document.createElement("div");
        item.className = "student-item reveal";
        item.innerHTML = `
            <span class="student-number">${num}</span>
            <span class="student-name">${student}</span>
        `;
        container.appendChild(item);
    });
}

// ─────────────────────────────────────────────
// SUBJECTS
// ─────────────────────────────────────────────
function renderSubjects() {
    const container = document.getElementById("subjects-container");
    container.innerHTML = "";

    Object.keys(subjects).forEach(dayKey => {
        const dailySubjects = subjects[dayKey];
        const dayLabel      = dayLabels[dayKey];

        const card = document.createElement("div");
        card.className = "subject-card reveal";

        let subjectListHtml = '<ul class="subject-list">';
        dailySubjects.forEach(subject => {
            subjectListHtml += `<li class="subject-item">${subject}</li>`;
        });
        subjectListHtml += '</ul>';

        card.innerHTML = `
            <h3 class="subject-day">${icons.bookOpen}${dayLabel}</h3>
            <p class="subject-count">${dailySubjects.length} Mata Pelajaran</p>
            ${subjectListHtml}
        `;
        container.appendChild(card);
    });
}

// ─────────────────────────────────────────────
// CAROUSEL HELPERS (called from main.js too)
// ─────────────────────────────────────────────

/** Scroll carousel to a specific card index */
function scrollToCard(index) {
    const carousel = document.getElementById("memoryCarousel");
    const cards    = document.querySelectorAll("#memoryTrack .memory-card");
    if (!carousel || !cards[index]) return;
    const cardLeft = cards[index].offsetLeft;
    carousel.scrollTo({ left: cardLeft, behavior: "smooth" });
}

/** Update prev/next button disabled state */
function updateCarouselButtons() {
    const carousel = document.getElementById("memoryCarousel");
    const prevBtn  = document.getElementById("memoryPrev");
    const nextBtn  = document.getElementById("memoryNext");
    if (!carousel || !prevBtn || !nextBtn) return;

    const atStart = carousel.scrollLeft <= 4;
    const atEnd   = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 4;

    prevBtn.disabled              = atStart;
    prevBtn.setAttribute("aria-disabled", atStart);
    nextBtn.disabled              = atEnd;
    nextBtn.setAttribute("aria-disabled", atEnd);
}

/** Update active dot based on current scroll position */
function updateActiveDot() {
    const carousel = document.getElementById("memoryCarousel");
    const cards    = document.querySelectorAll("#memoryTrack .memory-card");
    const dots     = document.querySelectorAll("#memoryPagination .memory-dot");
    if (!carousel || cards.length === 0 || dots.length === 0) return;

    // Find which card is most visible in the carousel viewport
    const carouselLeft = carousel.scrollLeft;
    let closestIndex = 0;
    let closestDist  = Infinity;

    cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft - carouselLeft);
        if (dist < closestDist) { closestDist = dist; closestIndex = i; }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === closestIndex);
    });
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
function initRender() {
    renderRules();
    renderStudents();
    renderSubjects();
}

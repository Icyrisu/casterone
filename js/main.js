document.addEventListener("DOMContentLoaded", () => {

    // ─── 1. Render all static content ──────────────────────────
    initRender();

    // ─── 2. Class switcher ──────────────────────────────────────
    let activeClass = "11";

    const btnClass11 = document.getElementById("btn-class-11");
    const btnClass12 = document.getElementById("btn-class-12");

    function updateClassContent(classId) {
        if (!classData[classId]) return;
        renderTeacher(classId);
        renderMemories(classId);   // also resets carousel + dots
    }

    function switchClass(classId, clickedBtn, otherBtn) {
        if (activeClass === classId) return;
        activeClass = classId;
        clickedBtn.classList.add("active");
        otherBtn.classList.remove("active");
        updateClassContent(classId);
    }

    btnClass11.addEventListener("click", () => switchClass("11", btnClass11, btnClass12));
    btnClass12.addEventListener("click", () => switchClass("12", btnClass12, btnClass11));

    // Initial class render
    updateClassContent(activeClass);

    // ─── 3. Mobile menu ─────────────────────────────────────────
    const menuToggle = document.querySelector(".menu-toggle");
    const nav        = document.getElementById("main-navigation");
    const navLinks   = document.querySelectorAll(".nav-link");

    const HAMBURGER = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>`;
    const CLOSE_X   = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>`;

    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isOpen);
        menuToggle.innerHTML = isOpen ? HAMBURGER : CLOSE_X;
        nav.classList.toggle("show", !isOpen);
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (nav.classList.contains("show")) {
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.innerHTML = HAMBURGER;
                nav.classList.remove("show");
            }
        });
    });

    // ─── 4. Carousel arrow buttons ──────────────────────────────
    const prevBtn  = document.getElementById("memoryPrev");
    const nextBtn  = document.getElementById("memoryNext");
    const carousel = document.getElementById("memoryCarousel");

    function getScrollStep() {
        // Scroll by the width of one card + gap
        const firstCard = document.querySelector("#memoryTrack .memory-card");
        if (!firstCard) return 340;
        const gap = 20; // matches --sp-5
        return firstCard.offsetWidth + gap;
    }

    if (prevBtn && carousel) {
        prevBtn.addEventListener("click", () => {
            carousel.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
        });
    }

    if (nextBtn && carousel) {
        nextBtn.addEventListener("click", () => {
            carousel.scrollBy({ left: getScrollStep(), behavior: "smooth" });
        });
    }

    // Update dots + buttons on scroll (debounced)
    if (carousel) {
        let scrollTimer;
        carousel.addEventListener("scroll", () => {
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                updateCarouselButtons();
                updateActiveDot();
            }, 50);
        }, { passive: true });
    }

    // ─── 5. Scroll Reveal — IntersectionObserver ────────────────
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    // Expose so renderer.js can register dynamically injected cards
    window._revealObserver = revealObserver;

    // Observe all .reveal elements after a RAF (DOM fully painted)
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            document.querySelectorAll(".reveal").forEach(el => {
                revealObserver.observe(el);
            });
        });
    });

    // ─── 6. Stagger delays for large static grids ───────────────
    function applyStagger(gridId, step = 60, max = 420) {
        const grid = document.getElementById(gridId);
        if (!grid) return;
        Array.from(grid.children).forEach((child, i) => {
            child.style.transitionDelay = `${Math.min(i * step, max)}ms`;
        });
    }

    requestAnimationFrame(() => {
        applyStagger("rules-container",    65, 450);
        applyStagger("students-container", 30, 400);
        applyStagger("subjects-container", 65, 350);
    });

});

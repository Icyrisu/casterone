// =============================================================
// SHARED DATA — Aturan, Siswa, Mapel
// =============================================================

const rules = [
    "Datang tepat waktu dan mengikuti pembelajaran dengan baik.",
    "Menggunakan seragam sesuai ketentuan sekolah.",
    "Menjaga kebersihan dan kerapian kelas.",
    "Menjaga sopan santun kepada guru dan teman.",
    "Dilarang membuat keributan saat pembelajaran.",
    "Melaksanakan piket sesuai jadwal.",
    "Menjaga fasilitas yang ada di dalam kelas.",
    "Tidak membuang sampah sembarangan.",
    "Mengerjakan tugas tepat waktu.",
    "Saling menghargai antar teman."
];

const students = [
    "Adinda Indira Wijaya",
"Adinda Tiara Ramadhani",
"Ahmad Rangga Wijaya",
"Al Izha Salwa",
"Anisa Cahyani",
"Aqila Talita Haya",
"Aulia Malika",
"Ayunanda Ikhtisar Tiandari",
"Cendi Pitriyani",
"Diana Silviani",
"Diandra Sayyidina Nugraha",
"Dinda Elfrida Yusuf",
"Dini Rahayu",
"Fajar Handesta",
"Frandikha Putra Zain",
"Khalisya Viorita",
"Kristian Ronaldo Demon Ledor",
"M.Nadifa Ilham Nur Majid",
"Mahastry Dhiva Oktaviani",
"Meina Alya Saputri",
"Mentari Marselina",
"Meutia Azizy Rahma",
"Muhamad Fachry Sukarno Putra",
"Muhammad Arifin Billah",
"Muhammad Fahrizal Riski Ramadhan",
"Muhammad Rizky Anugrah",
"Muhammad Salahudin Al Ayyubi",
"Nadhifa Zahirah",
"Nadhita Junia Honic",
"Nafisa Althof",
"Neira Aprila Mulya",
"Rakha Banu Wiratmoko",
"Reno Maradina",
"Rendy Bagas Saputra",
"Riris Karolina Hutapea",
"Zakiatun Nufus"
];

const subjects = {
    senin:   ["PKWU", "Senbud", "Sosio", "MTU"],
    selasa:  ["MTL", "B. Sunda", "Sejarah", "Infor"],
    rabu:    ["Ekonomi", "B. Indo", "BK", "PKN", "MTU"],
    kamis:   ["PJOK", "B. Indo", "B. Inggris", "Infor"],
    jumat:   ["Sosio", "MTL", "Ekonomi", "PAI"]
};

const dayLabels = {
    senin: "SENIN", selasa: "SELASA", rabu: "RABU",
    kamis: "KAMIS", jumat: "JUMAT"
};

// =============================================================
// CLASS DATA — Wali Kelas + Memori
// =============================================================

const classData = {
    "11": {
        teacher: {
            name: "Nama Wali Kelas 11 Abd. Wahidin, S.Pdi.Gr",
            image: "assets/images/teachers/teacher-11.svg"
        },

        // ==================================================
        // MEMORI KELAS 11
        // Untuk menambahkan memory baru:
        //   1. Simpan foto ke: assets/images/memories/class-11/
        //   2. Tambahkan object baru di bawah (ikuti format yang ada).
        //   3. Simpan file. Selesai — tidak perlu mengubah HTML.
        // ==================================================
        memories: [
            {
                image: "assets/images/memories/class-11/memory-01.svg",
                title: "Memory Class 11 - 1",
                date: "first time fotbar kelas 11, 24 Juli 2025"
            },
            {
                image: "assets/images/memories/class-11/memory-02.svg",
                title: "Memory Class 11 - 2",
                date: "First time seragam batik dan kebaya - 31 Juli 2026"
            },
            {
                image: "assets/images/memories/class-11/memory-03.svg",
                title: "Memory Class 11 - 3",
                date: "Juara lomba agustus 19 - Agustus 2025"
            },
            {    
            
                image: "assets/images/memories/class-11/memory-03.svg",
                title: "Memory Class 11 - 4",
                date: "penampilan tugas seni budaya - 27 Agustus 2025"
            },
            {
                  image: "assets/images/memories/class-11/memory-03.svg",
                title: "Memory Class 11 - 3",
                date: "Pemilihan ketua osis - 18 September 2025"
            },
            {
                  image: "assets/images/memories/class-11/memory-03.svg",
                title: "Memory Class 11 - 3",
                date: "Penampilan minions kedua - 24 Oktober 2025"
            },
            {
                  image: "assets/images/memories/class-11/memory-03.svg",
                title: "Memory Class 11 - 3",
                date: "petugas upacara perdana - 27 Oktober 2025"
            },
            {
                  image: "assets/images/memories/class-11/memory-03.svg",
                title: "Memory Class 11 - 3",
                date: "kokurikuler - 28 November 2025"
            },
            {
                  image: "assets/images/memories/class-11/memory-03.svg",
                title: "Memory Class 11 - 3",
                date: "Pembagian hadiah - 15 Desember 2025"
            },
            {
                  image: "assets/images/memories/class-11/memory-03.svg",
                title: "Memory Class 11 - 3",
                date: ""
            },
            {
                  image: "assets/images/memories/class-11/memory-03.svg",
                title: "Memory Class 11 - 3",
                date: ""
            },
            {
                  image: "assets/images/memories/class-11/memory-03.svg",
                title: "Memory Class 11 - 3",
                date: ""
            },
            {
                  image: "assets/images/memories/class-11/memory-03.svg",
                title: "Memory Class 11 - 3",
                date: ""
            },
            {
                  image: "assets/images/memories/class-11/memory-03.svg",
                title: "Memory Class 11 - 3",
                date: ""
            },
            
                


            
            // Tambahkan memory baru di sini ↓
            // {
            //     image: "assets/images/memories/class-11/memory-04.jpg",
            //     title: "Nama Kegiatan",
            //     date: "DD Bulan YYYY"
            // },
        ]
    },

    "12": {
        teacher: {
            name: "Nama Wali Kelas 12 Nurul Farhanah, S. Kom.Gr",
            image: "assets/images/teachers/teacher-12.svg"
        },

        // ==================================================
        // MEMORI KELAS 12
        // Untuk menambahkan memory baru:
        //   1. Simpan foto ke: assets/images/memories/class-12/
        //   2. Tambahkan object baru di bawah (ikuti format yang ada).
        //   3. Simpan file. Selesai — tidak perlu mengubah HTML.
        // ==================================================
        memories: [
            {
                image: "assets/images/memories/class-12/memory-01.svg",
                title: "Memory Class 12 - 1",
                date: "Penampilan perdana minions 31 Juli 2026"
            },
            {
                image: "assets/images/memories/class-12/memory-02.svg",
                title: "Memory Class 12 - 2",
                date: ""
            },
            {
                image: "assets/images/memories/class-12/memory-03.svg",
                title: "Memory Class 12 - 3",
                date: "05 Oktober 2026"
            },
            {
                image: "assets/images/memories/class-12/memory-03.svg",
                title: "Memory Class 12 - 3",
                date: "05 Oktober 2026"
            },
            {
                image: "assets/images/memories/class-12/memory-03.svg",
                title: "Memory Class 12 - 3",
                date: "05 Oktober 2026"
            }   
            // Tambahkan memory baru di sini ↓
            // {
            //     image: "assets/images/memories/class-12/memory-04.jpg",
            //     title: "Nama Kegiatan",
            //     date: "DD Bulan YYYY"
            // },
        ]
    }
};

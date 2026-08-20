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
    "11": {
        senin:   ["MTK Umum", "Sosiologi", "B. Inggris", "PKN"],
        selasa:  ["Sosiologi", "B. Indonesia", "PAI", "Informatika"],
        rabu:    ["Ekonomi", "Sejarah", "MTK Umum", "BK", "Seni Budaya"],
        kamis:   ["MTK TL", "B. Indonesia", "B. Sunda", "Informatika"],
        jumat:   ["Ekonomi", "PKWU", "PJOK", "MTK TL"]
    },
    "12": {
        senin:   ["PKWU", "Seni Budaya", "Sosiologi", "MTK Umum"],
        selasa:  ["MTK TL", "B. Sunda", "Sejarah", "Informatika"],
        rabu:    ["Ekonomi", "B. Indonesia", "BK", "PKN", "MTK Umum"],
        kamis:   ["PJOK", "B. Indonesia", "B. Inggris", "Informatika"],
        jumat:   ["Sosiologi", "MTK TL", "Ekonomi", "PAI"]
    }
};

const dayLabels = {
    senin: "SENIN", selasa: "SELASA", rabu: "RABU",
    kamis: "KAMIS", jumat: "JUMAT"
};

const classData = {
    "11": {
        teacher: {
            name: "Abd. Wahidin, S.Pdi.Gr",
            image: "assets/images/teachers/teacher-11.jpeg"
        },

        memories: [
            {
                image: "assets/images/memories/class-11/memory-01.jpeg",
                title: "Memory Class 11",
                date: "First time fotbar Kelas 11 - 24 Juli 2025"
            },
            {
                image: "assets/images/memories/class-11/memory-02.jpeg",
                title: "Memory Class 11",
                date: "First time seragam batik dan kebaya - 31 Juli 2026"
            },
            {
                image: "assets/images/memories/class-11/memory-03.jpeg",
                title: "Memory Class 11",
                date: "Juara lomba Agustus - 19 Agustus 2025"
            },
            {
                image: "assets/images/memories/class-11/memory-04.jpeg",
                title: "Memory Class 11",
                date: "Penampilan tugas Seni Budaya - 27 Agustus 2025"
            },
            {
                image: "assets/images/memories/class-11/memory-05.jpeg",
                title: "Memory Class 11",
                date: "Penampilan perdana Minions XI C1 - 29 Agustus 2025"
            },
            {
                image: "assets/images/memories/class-11/memory-06.jpeg",
                title: "Memory Class 11",
                date: "Pemilihan Ketua OSIS - 18 September 2025"
            },
            {
                image: "assets/images/memories/class-11/memory-07.jpeg",
                title: "Memory Class 11",
                date: "Penampilan Minions kedua - 24 Oktober 2025"
            },
            {
                image: "assets/images/memories/class-11/memory-08.jpeg",
                title: "Memory Class 11",
                date: "Petugas upacara perdana - 27 Oktober 2025"
            },
            {
                image: "assets/images/memories/class-11/memory-09.jpeg",
                title: "Memory Class 11",
                date: "Kokurikuler - 28 November 2025"
            },
            {
                image: "assets/images/memories/class-11/memory-10.jpeg",
                title: "Memory Class 11",
                date: "Pembagian hadiah - 15 Desember 2025"
            },
            {
                image: "assets/images/memories/class-11/memory-11.jpeg",
                title: "Memory Class 11",
                date: "Setelah kegiatan olahraga - 30 Januari 2026"
            },
            {
                image: "assets/images/memories/class-11/memory-12.jpeg",
                title: "Memory Class 11",
                date: "Makan-makan menyambut bulan suci Ramadhan - 15 Februari 2026"
            },
            {
                image: "assets/images/memories/class-11/memory-13.jpeg",
                title: "Memory Class 11",
                date: "Buka bersama Smanunggal - 12 Maret 2026"
            },
            {
                image: "assets/images/memories/class-11/memory-14.jpeg",
                title: "Memory Class 11",
                date: "Hari Kartini - 21 April 2026"
            },
            {
                image: "assets/images/memories/class-11/memory-15.jpeg",
                title: "Memory Class 11",
                date: "Senam - 8 Mei 2026"
            },
            {
                image: "assets/images/memories/class-11/memory-16.jpeg",
                title: "Memory Class 11",
                date: "Latihan Sejarah - 14 Mei 2026"
            },
            {
                image: "assets/images/memories/class-11/memory-17.jpeg",
                title: "Memory Class 11",
                date: "Pentas Drama Sejarah Indonesia - 19 Mei 2026"
            }
        ]
    },

    "12": {
        teacher: {
            name: "Nurul Farhanah, S. Kom.Gr",
            image: "assets/images/teachers/teacher-12.jpeg"
        },

        memories: [
            {
                image: "assets/images/memories/class-12/memory-01.jpeg",
                title: "Memory Class 12",
                date: "Penampilan perdana Minions XII C1 - 31 Juli 2026"
            },
            {
                image: "assets/images/memories/class-12/memory-02.jpeg",
                title: "Memory Class 12",
                date: "Penampilan Minions Rangga & Cinta - 31 Juli 2026"
            },
            {
                image: "assets/images/memories/class-12/memory-03.jpeg",
                title: "Memory Class 12",
                date: "Gift Beng-Beng from Bu Han - 6 Agustus 2026"
            },
            {
                image: "assets/images/memories/class-12/memory-04.jpeg",
                title: "Memory Class 12",
                date: "Olahraga bersama guru magang - 7 Agustus 2026"
            },
            {
                image: "assets/images/memories/class-12/memory-05.jpeg",
                title: "Memory Class 12",
                date: "Senam perdana Kelas XII - 14 Agustus 2026"
            },
            {
                image: "assets/images/memories/class-12/memory-06.jpeg",
                title: "Memory Class 12",
                date: "Lomba 17 Agustus - 18 Agustus 2026"
            }
        ]
    }
};

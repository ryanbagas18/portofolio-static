const projectsData = [
  {
    id: "ubaya-choir",
    title: {
      en: "Choir Recruitment & Training Management Information System",
      id: "Sistem Informasi Manajemen Rekrutmen & Pelatihan Paduan Suara",
    },
    organization: {
      en: "UBAYA Choir (University of Surabaya)",
      id: "Paduan Suara UBAYA (Universitas Surabaya)",
    },
    role: {
      en: "Full-Stack Developer (Undergraduate Thesis)",
      id: "Full-Stack Developer (Tugas Akhir)",
    },
    thumbnail: "assets/images/ubaya-choir-thumbnail.webp",
    description: {
      en: "Developed a web-based Management Information System for UBAYA Choir to digitize trainee recruitment, audition evaluation, and training management. Implemented the Simple Additive Weighting (SAW) method to generate weighted audition scores, alongside adaptive learning quizzes and automated trainee group placement based on evaluation results.",
      id: "Mengembangkan Sistem Informasi Manajemen berbasis web untuk Paduan Suara UBAYA untuk mendigitalkan rekrutmen peserta, evaluasi audisi, dan manajemen pelatihan. Mengimplementasikan metode Simple Additive Weighting (SAW) untuk menghasilkan skor audisi tertimbang, bersama dengan kuis pembelajaran adaptif dan penempatan kelompok peserta otomatis berdasarkan hasil evaluasi.",
    },
    techStack: [
      "PHP",
      "Laravel",
      "Blade",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "JavaScript",
      "MySQL",
      "BPMN 2.0",
      "SAW Algorithm",
    ],
    problemStatement: {
      en: "Previously, UBAYA Choir managed trainee recruitment and training activities through paper-based forms and separate digital tools. Audition results were recorded as raw scores or the number of correct answers without a standardized final scoring mechanism. Different audition categories also contained varying numbers of assessment items, making direct score comparisons difficult. Consequently, trainee placement into study groups relied heavily on the subjective judgment and experience of the Training Division. Training progress and attendance records were also maintained separately, making longitudinal performance monitoring less efficient.",
      id: "Sebelumnya, Paduan Suara UBAYA mengelola kegiatan rekrutmen dan pelatihan peserta melalui formulir berbasis kertas dan alat digital terpisah. Hasil audisi dicatat sebagai skor mentah atau jumlah jawaban benar tanpa mekanisme penilaian akhir yang terstandarisasi. Kategori audisi yang berbeda juga memiliki jumlah item penilaian yang bervariasi, sehingga perbandingan skor langsung menjadi sulit. Akibatnya, penempatan peserta ke dalam kelompok belajar sangat bergantung pada penilaian subjektif dan pengalaman Divisi Pelatihan. Rekam kemajuan pelatihan dan kehadiran juga dipelihara secara terpisah, sehingga pemantauan kinerja jangka panjang menjadi kurang efisien.",
    },
    solution: {
      en: "Developed a centralized web-based application to integrate UBAYA Choir's trainee recruitment, audition assessment, and training management processes. The system implements the Simple Additive Weighting (SAW) method to calculate final audition scores through configurable criteria weighting and score normalization, providing a structured basis for trainee selection. Based on evaluation results, the system also supports trainee group placement, adaptive quiz allocation, and training progress monitoring through integrated management modules.",
      id: "Mengembangkan aplikasi web terpusat untuk mengintegrasikan proses rekrutmen peserta, penilaian audisi, dan manajemen pelatihan Paduan Suara UBAYA. Sistem mengimplementasikan metode Simple Additive Weighting (SAW) untuk menghitung skor audisi akhir melalui pembobotan kriteria yang dapat dikonfigurasi dan normalisasi skor, memberikan dasar terstruktur untuk seleksi peserta. Berdasarkan hasil evaluasi, sistem juga mendukung penempatan kelompok peserta, alokasi kuis adaptif, dan pemantauan kemajuan pelatihan melalui modul manajemen terintegrasi.",
    },
    keyFeatures: {
      en: [
        "<strong>SAW-Based Audition Scoring:</strong> Calculates standardized final audition scores using configurable criteria weights and normalized assessment results across different audition categories.",
        "<strong>Automated Group Placement:</strong> Classifies trainees into three learning groups (Allegro, Andante, and Adagio) based on their audition evaluation results.",
        "<strong>Adaptive Learning Quizzes:</strong> Assigns quizzes based on trainee evaluation results, prioritizing categories that require further improvement.",
        "<strong>Sheet Music Repository:</strong> Provides a centralized digital repository for storing and distributing sheet music and musical arrangements.",
        "<strong>Song Mastery Tracking:</strong> Enables trainers to monitor repertoire learning targets, evaluate trainee progress, and maintain records of song mastery across training sessions.",
        "<strong>Integrated Schedule & Attendance:</strong> Centralizes audition and training schedules alongside attendance records within the application.",
      ],
      id: [
        "<strong>Penilaian Audisi Berbasis SAW:</strong> Menghitung skor audisi akhir yang terstandarisasi menggunakan bobot kriteria yang dapat dikonfigurasi dan hasil penilaian ternormalisasi di berbagai kategori audisi.",
        "<strong>Penempatan Kelompok Otomatis:</strong> Mengklasifikasikan peserta ke dalam tiga kelompok belajar (Allegro, Andante, dan Adagio) berdasarkan hasil evaluasi audisi mereka.",
        "<strong>Kuis Pembelajaran Adaptif:</strong> Memberikan kuis berdasarkan hasil evaluasi peserta, memprioritaskan kategori yang memerlukan perbaikan lebih lanjut.",
        "<strong>Repositori Partitur Lagu:</strong> Menyediakan repositori digital terpusat untuk menyimpan dan mendistribusikan partitur lagu dan aransemen musik.",
        "<strong>Pelacakan Penguasaan Lagu:</strong> Memungkinkan pelatih untuk memantau target pembelajaran repertoar, mengevaluasi kemajuan peserta, dan memelihara catatan penguasaan lagu di seluruh sesi pelatihan.",
        "<strong>Jadwal & Presensi Terintegrasi:</strong> Memusatkan jadwal audisi dan pelatihan bersama dengan catatan kehadiran dalam aplikasi.",
      ],
    },
    screenshots: [
      {
        src: "assets/images/bobot-penilaian.png",
        title: {
          en: "SAW Audition Scoring Form",
          id: "Formulir Penilaian Audisi SAW",
        },
      },
      {
        src: "assets/images/form-penilaian.png",
        title: {
          en: "Audition Evaluation Form",
          id: "Formulir Evaluasi Audisi",
        },
      },
      {
        src: "assets/images/hasil-audisi.png",
        title: {
          en: "Audition Results Dashboard",
          id: "Dasbor Hasil Audisi",
        },
      },
      {
        src: "assets/images/penugasan-kuis.png",
        title: {
          en: "Adaptive Learning Quizzes",
          id: "Kuis Pembelajaran Adaptif",
        },
      },
      {
        src: "assets/images/detail-latihan.png",
        title: {
          en: "Detailed Learning Progress",
          id: "Detail Kemajuan Belajar",
        },
      },
      {
        src: "assets/images/progres-materi.png",
        title: {
          en: "Material Progress Tracking",
          id: "Pelacakan Kemajuan Materi",
        },
      },
    ],
    links: {
      github: null,
      liveDemo: null,
    },
  },
  {
    id: "book-log",
    title: {
      en: "Book-Log: Book Management & Purchase Tracker",
      id: "Book-Log: Manajemen Buku & Pelacak Pembelian",
    },
    organization: {
      en: "Personal Project",
      id: "Proyek Pribadi",
    },
    role: {
      en: "Full-Stack Developer (Personal Project)",
      id: "Full-Stack Developer (Proyek Pribadi)",
    },
    thumbnail: "assets/images/book-log-thumbnail.png",
    description: {
      en: "A centralized, Dockerized full-stack web application built with Laravel to track book ownership, reading progress, and financial investment. Features API-driven metadata extraction from Google Books and Open Library, advanced analytics dashboard, and CSV export capabilities.",
      id: "Aplikasi web full-stack terpusat dan ter-Docker yang dibangun dengan Laravel untuk melacak kepemilikan buku, kemajuan membaca, dan investasi keuangan. Fitur ekstraksi metadata berbasis API dari Google Books dan Open Library, dasbor analitik canggih, dan kemampuan ekspor CSV.",
    },
    techStack: ["PHP", "Laravel", "Blade", "MySQL", "Docker", "REST API"],
    problemStatement: {
      en: "Managing a personal book collection and tracking purchases through spreadsheets or separate records can make it difficult to maintain an accurate overview of book ownership, reading progress, and spending habits. Without centralized records, monitoring monthly book expenditure, reading completion, and the financial value of unread books becomes less convenient.",
      id: "Mengelola koleksi buku pribadi dan melacak pembelian melalui spreadsheet atau catatan terpisah dapat membuat sulit untuk mempertahankan ikhtisar akurat tentang kepemilikan buku, kemajuan membaca, dan kebiasaan pengeluaran. Tanpa catatan terpusat, pemantauan pengeluaran buku bulanan, penyelesaian membaca, dan nilai keuangan buku yang belum dibaca menjadi kurang nyaman.",
    },
    solution: {
      en: "Developed a Dockerized full-stack web application using Laravel to centralize book collection management, purchase tracking, and reading progress monitoring. Integrated Google Books and Open Library APIs with a fallback mechanism to retrieve book metadata based on title, author, or ISBN. The application also features an analytical dashboard powered by MySQL aggregation queries and Carbon to provide insights into monthly expenditure, reading completion, reading pace, and unread collection value.",
      id: "Mengembangkan aplikasi web full-stack ter-Docker menggunakan Laravel untuk memusatkan manajemen koleksi buku, pelacakan pembelian, dan pemantauan kemajuan membaca. Mengintegrasikan API Google Books dan Open Library dengan mekanisme fallback untuk mengambil metadata buku berdasarkan judul, penulis, atau ISBN. Aplikasi ini juga memiliki dasbor analitik yang didukung oleh kueri agregasi MySQL dan Carbon untuk memberikan wawasan tentang pengeluaran bulanan, penyelesaian membaca, kecepatan membaca, dan nilai koleksi yang belum dibaca.",
    },
    keyFeatures: {
      en: [
        "<strong>API-Driven Metadata Retrieval:</strong> Integrates Google Books and Open Library APIs with a fallback mechanism to retrieve book information based on title, author, or ISBN.",
        "<strong>Cover Image Management:</strong> Utilizes Laravel Storage to handle book cover image uploads and file management.",
        "<strong>Analytical Dashboard:</strong> Presents monthly spending trends, books purchased versus completed, reading completion rates, average reading pace, and unread collection value through MySQL aggregation queries and Carbon.",
        "<strong>Advanced Collection Filtering:</strong> Supports keyword search, multi-criteria filtering, and dynamic sorting to simplify book collection management.",
        "<strong>CSV Data Export:</strong> Enables exporting book collection and transaction records into CSV format for backup and further analysis.",
      ],
      id: [
        "<strong>Pengambilan Metadata Berbasis API:</strong> Mengintegrasikan API Google Books dan Open Library dengan mekanisme fallback untuk mengambil informasi buku berdasarkan judul, penulis, atau ISBN.",
        "<strong>Manajemen Gambar Sampul:</strong> Memanfaatkan Laravel Storage untuk menangani upload gambar sampul buku dan manajemen file.",
        "<strong>Dasbor Analitik:</strong> Menyajikan tren pengeluaran bulanan, buku yang dibeli versus diselesaikan, tingkat penyelesaian membaca, kecepatan membaca rata-rata, dan nilai koleksi yang belum dibaca melalui kueri agregasi MySQL dan Carbon.",
        "<strong>Filtering Koleksi Canggih:</strong> Mendukung pencarian kata kunci, filtering multi-kriteria, dan pengurutan dinamis untuk menyederhanakan manajemen koleksi buku.",
        "<strong>Ekspor Data CSV:</strong> Memungkinkan ekspor koleksi buku dan catatan transaksi ke format CSV untuk backup dan analisis lebih lanjut.",
      ],
    },
    screenshots: [
      {
        src: "assets/images/book-log-dashboard.png",
        title: {
          en: "Dashboard Analytics",
          id: "Dasbor Analitik",
        },
      },
      {
        src: "assets/images/book-log-collection.png",
        title: {
          en: "Book Collection",
          id: "Koleksi Buku",
        },
      },
      {
        src: "assets/images/book-log-api-search.png",
        title: {
          en: "API Search Form",
          id: "Formulir Pencarian API",
        },
      },
      // {
      //   src: "assets/images/book-log-filter.png",
      //   title: {
      //     en: "Advanced Filter",
      //     id: "Filter Canggih",
      //   },
      // },
    ],
    links: {
      github: null,
      liveDemo: null,
    },
  },
];

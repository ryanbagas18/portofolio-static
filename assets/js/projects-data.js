const projectsData = [
  {
    id: "ubaya-choir",
    title: {
      en: "Choir Management & Audition System",
      id: "Sistem Manajemen & Audisi Paduan Suara",
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
      en: "Developed an integrated management information system for UBAYA Choir to streamline recruitment, audition scoring, and training workflows using Laravel MVC, MySQL, and the SAW Algorithm.",
      id: "Mengembangkan sistem informasi manajemen terintegrasi untuk Paduan Suara UBAYA untuk merampingkan alur kerja rekrutmen, penilaian audisi, dan pelatihan menggunakan Laravel MVC, MySQL, dan Algoritma SAW.",
    },
    techStack: [
      "PHP",
      "Laravel 10",
      "Blade",
      "Bootstrap 4",
      "HTML5",
      "CSS3",
      "JavaScript",
      "MySQL",
      "BPMN 2.0",
      "SAW Algorithm",
    ],
    problemStatement: {
      en: "The University of Surabaya Choir previously managed member recruitment and training programs using physical paper forms and fragmented digital tools such as Google Sheets and messaging apps. This led to decentralized data storage, subjective audition evaluations due to a lack of standardized criteria weights, and difficulties in accurately tracking individual trainee performance progress over time.",
      id: "Paduan Suara Universitas Surabaya sebelumnya mengelola rekrutmen anggota dan program pelatihan menggunakan formulir kertas fisik dan alat digital yang terfragmentasi seperti Google Sheets dan aplikasi pesan. Hal ini menyebabkan penyimpanan data yang terdesentralisasi, evaluasi audisi yang subjektif karena kurangnya bobot kriteria yang terstandarisasi, dan kesulitan dalam melacak kemajuan kinerja individu peserta pelatihan secara akurat dari waktu ke waktu.",
    },
    solution: {
      en: "Engineered a centralized web application that automates the complete recruitment and training workflow. The platform implements the Simple Additive Weighting (SAW) method for objective audition scoring. Based on evaluation results, it automatically classifies trainees into appropriate study groups, assigns adaptive learning quizzes to address weak areas, and integrates song mastery tracking into a unified dashboard.",
      id: "Merancang aplikasi web terpusat yang mengotomatiskan seluruh alur kerja rekrutmen dan pelatihan. Platform ini mengimplementasikan metode Simple Additive Weighting (SAW) untuk penilaian audisi yang objektif. Berdasarkan hasil evaluasi, sistem secara otomatis mengklasifikasikan peserta ke dalam kelompok belajar yang sesuai, memberikan kuis pembelajaran adaptif untuk menangani area yang lemah, dan mengintegrasikan pelacakan penguasaan lagu ke dalam dasbor terpadu.",
    },
    keyFeatures: {
      en: [
        "<strong>SAW-Based Audition Scoring:</strong> Computes objective and standardized audition scores using criteria weighting through the SAW algorithm.",
        "<strong>Automated Group Placement:</strong> Automatically classifies passing trainees into specific study groups (Allegro, Andante, and Adagio) derived from audition scores.",
        "<strong>Adaptive Learning Quizzes:</strong> Automatically assigns targeted quizzes to address specific weak points identified during audition evaluations.",
        "<strong>Sheet Music Repository:</strong> Provides a centralized digital library for organizing and distributing choral scores and musical arrangements to members.",
        "<strong>Song Mastery Tracking:</strong> Enables vocal coaches to monitor completion status and evaluate mastery levels of specific song repertoires for each trainee.",
        "<strong>Integrated Schedule & Attendance:</strong> Manages audition timetables, daily training schedules, and records member attendance seamlessly within the relational database.",
      ],
      id: [
        "<strong>Penilaian Audisi Berbasis SAW:</strong> Menghitung skor audisi yang objektif dan terstandarisasi menggunakan pembobotan kriteria melalui algoritma SAW.",
        "<strong>Penempatan Kelompok Otomatis:</strong> Secara otomatis mengklasifikasikan peserta yang lolos ke dalam kelompok belajar tertentu (Allegro, Andante, dan Adagio) yang berasal dari skor audisi.",
        "<strong>Kuis Pembelajaran Adaptif:</strong> Secara otomatis memberikan kuis yang ditargetkan untuk menangani titik lemah tertentu yang diidentifikasi selama evaluasi audisi.",
        "<strong>Repositori Partitur Lagu:</strong> Menyediakan perpustakaan digital terpusat untuk mengatur dan mendistribusikan skor paduan suara dan aransemen musik kepada anggota.",
        "<strong>Pelacakan Penguasaan Lagu:</strong> Memungkinkan pelatih vokal untuk memantau status penyelesaian dan mengevaluasi tingkat penguasaan repertoar lagu tertentu untuk setiap peserta.",
        "<strong>Jadwal & Presensi Terintegrasi:</strong> Mengelola jadwal audisi, jadwal pelatihan harian, dan mencatat kehadiran anggota secara mulus dalam database relasional.",
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
];

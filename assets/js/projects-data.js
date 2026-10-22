const projectsData = [
  {
    id: "ubaya-choir",
    title: "Choir Management & Audition System",
    organization: "UBAYA Choir (Universitas Surabaya)",
    role: "Full-Stack Developer (Undergraduate Thesis)",
    thumbnail: "assets/images/ubaya-choir-thumbnail.webp",
    description:
      "Developed an integrated management information system for UBAYA Choir to streamline recruitment, audition scoring, and training workflows using Laravel MVC, MySQL, and SAW Algorithm.",
    techStack: [
      "PHP",
      "Laravel 10",
      "Blade",
      "Bootstrap 4",
      "HTML5",
      "CSS3",
      "JavaScript",
      "MySQL",
      "SAW Algorithm",
      "BPMN 2.0",
    ],
    problemStatement:
      "The University of Surabaya Choir managed member recruitment and training programs using physical forms and fragmented digital platforms like Google Sheets and chat groups. This approach resulted in uncentralized data, subjective audition grading due to the lack of standardized criteria weights, and difficulty in accurately tracking trainee performance progress over time.",
    solution:
      "Developed a centralized web platform that automates the entire recruitment and training workflow. The system utilizes the Simple Additive Weighting (SAW) method for objective audition scoring. Based on the results, it automatically classifies trainees into study groups, assigns adaptive learning quizzes to address weaknesses, and integrates song mastery tracking into one unified dashboard.",
    keyFeatures: [
      "<strong>SAW-Based Audition Scoring:</strong> Calculates objective and standardized audition scores using criteria weighting via the SAW algorithm.",
      "<strong>Automated Group Placement:</strong> Classifies passed trainees into specific study groups (Allegro, Andante, and Adagio) based on their audition results.",
      "<strong>Adaptive Learning Quizzes:</strong> Automatically assigns targeted quizzes to address each trainee's specific weak areas identified during the audition phase.",
      "<strong>Sheet Music Repository:</strong> Provides a centralized digital library for organizing and distributing song materials and sheet music (partitur) to all members.",
      "<strong>Song Mastery Tracking:</strong> Enables vocal coaches to monitor the completion status and evaluate the mastery level of specific song repertoires for each trainee.",
      "<strong>Integrated Schedule & Attendance:</strong> Manages audition timetables, daily training schedules, and records member attendance seamlessly within the database.",
    ],
    screenshots: [
      {
        src: "assets/images/bobot-penilaian.png",
        title: "SAW Audition Scoring Form",
      },
      {
        src: "assets/images/form-penilaian.png",
        title: "Audition Evaluation Form",
      },
      {
        src: "assets/images/hasil-audisi.png",
        title: "Audition Results",
      },
      {
        src: "assets/images/penugasan-kuis.png",
        title: "Adaptive Learning Quizzes",
      },
      {
        src: "assets/images/detail-latihan.png",
        title: "Detail Learning Progress",
      },
      {
        src: "assets/images/progres-materi.png",
        title: "Material Progress Tracking",
      },
    ],
    links: {
      github: null,
      liveDemo: null,
    },
  },
];

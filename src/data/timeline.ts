export interface JourneyItem {
  id: string;
  year: string;
  period: string;
  category: string;
  categoryBadge: string;
  title: string;
  role: string;
  emoji: string;
  description: string;
  skills: string[];
  liveLink?: string;
  verifiedEvidence?: string;
  side: "left" | "right";
}

export const JOURNEY_TIMELINE: JourneyItem[] = [
  {
    id: "education",
    year: "2024 – Present",
    period: "2024 – Present",
    category: "Education",
    categoryBadge: "ACADEMIC FOUNDATION",
    title: "Sri Sivani College of Engineering",
    role: "B.Tech – Artificial Intelligence & Machine Learning",
    emoji: "🎓",
    description:
      "Started B.Tech journey in 2024 specializing in AIML. Rigorous study of programming fundamentals, machine learning algorithms, discrete mathematics, database systems (DBMS), and software development.",
    skills: ["Python", "Java", "C/C++", "DBMS", "SQL", "AIML Foundations"],
    verifiedEvidence: "Sri Sivani COE • Roll No: 24W61A6119",
    side: "left",
  },
  {
    id: "leadership",
    year: "2024",
    period: "2024",
    category: "Leadership",
    categoryBadge: "COMMUNITY & LEADERSHIP",
    title: "Microsoft Student Community",
    role: "Microsoft Student Ambassador & Student Coordinator",
    emoji: "🌐",
    description:
      "Active Microsoft Student Ambassador and coordinator. Conducting technical sessions, peer mentorship workshops, and hands-on induction classes on modern web development and AI-assisted engineering.",
    skills: ["Leadership", "Mentoring", "Communication", "AI Tools", "Technical Workshops"],
    verifiedEvidence: "Microsoft Student Ambassador Onboarding",
    side: "right",
  },
  {
    id: "student360",
    year: "2025",
    period: "2025",
    category: "Achievement",
    categoryBadge: "1ST PRIZE HACKATHON",
    title: "STUDENT360 Platform",
    role: "1st Prize – Google Student Ambassador Hackathon",
    emoji: "🏆",
    description:
      "Secured 1st Place for architecting STUDENT360 — a tri-portal platform connecting students, colleges, and corporate recruiters with cryptographic faculty verification and Kanban hiring pipelines.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Express", "Tailwind CSS"],
    verifiedEvidence: "1st Prize Google Student Ambassador Hackathon",
    side: "left",
  },
  {
    id: "stock-market",
    year: "2025",
    period: "2025",
    category: "Achievement",
    categoryBadge: "1ST PRIZE HACKATHON",
    title: "Stock Market Analyzer",
    role: "1st Prize – Brainovision Hackathon",
    emoji: "📈",
    description:
      "Awarded 1st Prize at Brainovision Hackathon for developing a stock market and portfolio analysis platform featuring real-time financial tracking, predictive charts, and interactive dashboards.",
    skills: ["Python", "JavaScript", "REST APIs", "Data Visualization", "Financial Telemetry"],
    verifiedEvidence: "1st Prize Brainovision Hackathon",
    side: "right",
  },
  {
    id: "agrisahay",
    year: "2025 – 2026",
    period: "2025 – 2026",
    category: "AI Development",
    categoryBadge: "SMART AGRICULTURE AI",
    title: "AgriSahay AI – Smart Agriculture",
    role: "Multimodal Crop Pathology & Advisory",
    emoji: "🌾",
    description:
      "Developed an AI-powered agricultural assistance platform combining OpenCV computer vision for crop disease detection with Google Gemini Multimodal APIs for multilingual advisory tailored to rural farmers.",
    skills: ["Python", "Flask", "OpenCV", "Gemini API", "React", "REST APIs"],
    verifiedEvidence: "GitHub: korikanasaipraneeth-svg/project-kissan",
    side: "left",
  },
  {
    id: "spiderman",
    year: "2025 – Present",
    period: "2025 – Present",
    category: "Creative Engineering",
    categoryBadge: "WEBGL 3D EXPERIENCE",
    title: "Spider-Man 3D Developer Portfolio",
    role: "Interactive 3D WebGL Portfolio",
    emoji: "🕷️",
    description:
      "Created an interactive 3D developer portfolio featuring custom WebGL shaders, Three.js physics reacting to mouse movement, cinematic preloader spotlight, and dynamic interactive elements.",
    skills: ["React", "Three.js", "WebGL", "Vite", "Tailwind CSS", "Canvas Physics"],
    liveLink: "https://spyderman-portfolio.vercel.app",
    verifiedEvidence: "Live: spyderman-portfolio.vercel.app",
    side: "right",
  },
  {
    id: "hrx",
    year: "2026",
    period: "2026",
    category: "Industry Experience",
    categoryBadge: "SOFTWARE INTERNSHIP",
    title: "HRX Tech Solution",
    role: "Software Developer Intern (2 Months)",
    emoji: "💼",
    description:
      "Completed 2-month software developer internship at HRX Tech Solution. Built enterprise dashboard views, engineered modular reusable UI components, and integrated asynchronous REST APIs with error boundaries.",
    skills: ["JavaScript", "HTML", "CSS", "REST APIs", "Git", "Enterprise Dashboards"],
    verifiedEvidence: "Software Developer Intern • HRX Tech Solution (Sept 2026)",
    side: "left",
  },
];

export const WHATS_NEXT = {
  badge: "TODAY & BEYOND // WHAT'S NEXT?",
  title: "Build. Share. Inspire.",
  emoji: "⚡",
  headline: "Continuously learning, building real-world applications, and growing as a software developer.",
  focus: [
    "Full-Stack Development",
    "AI & ML Engineering",
    "Software Architecture",
    "Creative Web Development",
    "Vibe Coding",
  ],
};

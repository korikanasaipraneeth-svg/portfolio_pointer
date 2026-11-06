export interface TimelineMilestone {
  period: string;
  year: string;
  title: string;
  badge: string;
  institutionOrContext: string;
  category: "ACADEMIC" | "PROJECT" | "ENGINEERING" | "OPEN_SOURCE";
  summary: string;
  bullets: string[];
  techStack: string[];
  verifiedEvidence: string;
}

export const VERIFIED_TIMELINE: TimelineMilestone[] = [
  {
    period: "2024 — Present",
    year: "2024 - 2026",
    title: "Software Developer Intern",
    badge: "INDUSTRY EXPERIENCE",
    institutionOrContext: "HRX Tech Solution",
    category: "ENGINEERING",
    summary:
      "Working as a Software Developer Intern at HRX Tech Solution, engineering enterprise user dashboards, modular frontend interfaces, and production software features.",
    bullets: [
      "Engineering modular, reusable UI components and responsive data-dense dashboard layouts.",
      "Connecting client views to asynchronous backend REST APIs and validating data payloads.",
      "Participating in agile development workflows, code reviews, and continuous integration pipelines.",
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Git", "UI Architecture"],
    verifiedEvidence: "Verified Internship at HRX Tech Solution & GitHub repo: hrx-interfaces-",
  },
  {
    period: "2024 — Present",
    year: "2024 - Present",
    title: "Microsoft Student Ambassador & Student Coordinator",
    badge: "COMMUNITY & LEADERSHIP",
    institutionOrContext: "Microsoft Student Community",
    category: "ACADEMIC",
    summary:
      "Officially onboarded Microsoft Student Ambassador; conducting technical induction classes, peer workshops, and mentoring junior engineering students on academic and software topics.",
    bullets: [
      "Actively contributing to the Microsoft student developer ecosystem.",
      "Conducting induction mentoring classes for junior B.Tech undergraduates.",
      "Organizing hands-on sessions on Prompt Engineering, web development, and AI tools.",
    ],
    techStack: ["Community Leadership", "Technical Mentoring", "Presentation", "AI Tools"],
    verifiedEvidence: "Official Microsoft Student Ambassador onboarding",
  },
  {
    period: "2024 — Present",
    year: "2024 - Present",
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    badge: "ACADEMIC FOUNDATION",
    institutionOrContext: "Sri Sivani College of Engineering",
    category: "ACADEMIC",
    summary:
      "Pursuing formal undergraduate engineering degree focused on machine learning algorithms, discrete mathematics, neural networks, computer vision, database management systems (DBMS), and software engineering.",
    bullets: [
      "Rigorous study of Artificial Intelligence, Computer Vision, and Predictive Modeling.",
      "Hands-on architectural coursework in Relational Databases (DBMS), SQL, and Object-Oriented Software Design (Java, C, C++).",
      "Applying theoretical principles to build functional, production-ready full-stack software systems.",
    ],
    techStack: ["AI & ML", "Python", "Java", "C/C++", "DBMS", "Software Engineering"],
    verifiedEvidence: "Sri Sivani College of Engineering (Roll No: 24W61A6119)",
  },
  {
    period: "2025 — 2026",
    year: "2025 - 2026",
    title: "1st Prize — Google Student Ambassador Hackathon",
    badge: "HACKATHON WINNER",
    institutionOrContext: "STUDENT360 Platform",
    category: "PROJECT",
    summary:
      "Awarded 1st Prize for architecting STUDENT360 — a multi-tenant platform bridging higher-education institutions and corporate recruiters through faculty-verified achievement ledgers and Kanban hiring pipelines.",
    bullets: [
      "Designed tri-portal Role-Based Access Control (RBAC) separating students, faculty endorsers, and recruiters.",
      "Engineered an interactive Kanban board for recruiters to headhunt pre-validated engineering candidates.",
      "Established secure API schemas and persistent relational modeling in TypeScript and Node.js.",
    ],
    techStack: ["TypeScript", "React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    verifiedEvidence: "1st Prize Google Student Ambassador Hackathon & GitHub repo: student-portfolio",
  },
  {
    period: "2025 — 2026",
    year: "2025 - 2026",
    title: "1st Prize — Brainovision Hackathon",
    badge: "HACKATHON WINNER",
    institutionOrContext: "Stock Market Analyzer Project",
    category: "PROJECT",
    summary:
      "Secured 1st Prize for building Portfolio & Stock Market Analyzer — web tool analyzing stock market trends, personal portfolio performance, and visual predictive charts.",
    bullets: [
      "Engineered backend analytical services with data manipulation routines in Python.",
      "Created interactive frontend dashboard with real-time trend monitoring and reporting.",
      "Delivered comprehensive technical architecture presentation and documentation.",
    ],
    techStack: ["Python", "JavaScript", "Data Visualization", "REST APIs", "Documentation"],
    verifiedEvidence: "1st Prize Brainovision Hackathon",
  },
  {
    period: "2025 — 2026",
    year: "2025 - 2026",
    title: "Deployment of AgriSahay AI Multimodal Diagnostic Platform",
    badge: "AI & COMPUTER VISION",
    institutionOrContext: "Smart Agriculture Initiative",
    category: "PROJECT",
    summary:
      "Developed AgriSahay AI (project-kissan), combining client-side computer vision inference for crop pathology detection with Google Gemini Multimodal APIs for multilingual farmer consultation.",
    bullets: [
      "Trained crop lesion image analysis pipeline utilizing OpenCV and Flask microservices.",
      "Integrated Gemini multimodal language reasoning for vernacular advisory tailored to smallholder farmers.",
      "Connected localized real-time market pricing and weather alert telemetry.",
    ],
    techStack: ["Python", "Flask", "OpenCV", "Google Gemini API", "React", "REST APIs"],
    verifiedEvidence: "GitHub Repository: korikanasaipraneeth-svg/project-kissan",
  },
  {
    period: "2025 — Present",
    year: "2025 - Present",
    title: "Spiderman 3D Interactive Portfolio & WebGL Shaders",
    badge: "CREATIVE ENGINEERING",
    institutionOrContext: "spyderman-portfolio.vercel.app",
    category: "OPEN_SOURCE",
    summary:
      "Engineered Spiderman Portfolio — a premium 3D developer experience with custom WebGL shaders, interactive Hero physics responding to mouse movement, cinematic preloader with mix-blend spotlight, and dynamic Journey timeline.",
    bullets: [
      "Built interactive 3D Hero with WebGL shaders responding to scroll and mouse coordinates.",
      "Implemented advanced scroll-triggered animations and dynamically drawn canvas physics.",
      "Deployed production build live at spyderman-portfolio.vercel.app.",
    ],
    techStack: ["Three.js", "React 19", "WebGL", "Tailwind CSS", "Vite", "Canvas"],
    verifiedEvidence: "Live deployment at spyderman-portfolio.vercel.app",
  },
];

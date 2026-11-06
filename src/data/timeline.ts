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
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    badge: "ACADEMIC EXCELLENCE",
    institutionOrContext: "Sri Sivani College of Engineering",
    category: "ACADEMIC",
    summary:
      "Pursuing formal undergraduate engineering degree focused on machine learning algorithms, discrete mathematics, neural networks, computer vision, database systems, and software engineering principles.",
    bullets: [
      "Rigorous study of Artificial Intelligence, Computer Vision, and Predictive Modeling.",
      "Hands-on architectural coursework in Relational Databases (DBMS), SQL, and Object-Oriented Software Design.",
      "Applying theoretical principles to build functional, production-ready full-stack software systems.",
    ],
    techStack: ["AI & ML", "Python", "Java", "C/C++", "DBMS", "Software Engineering"],
    verifiedEvidence: "Sri Sivani College of Engineering academic curriculum",
  },
  {
    period: "2025 — 2026",
    year: "2025 - 2026",
    title: "Architecting STUDENT360 & Enterprise Verification Engine",
    badge: "FULL-STACK SAAS",
    institutionOrContext: "Open Source Engineering",
    category: "PROJECT",
    summary:
      "Architected and engineered STUDENT360 — a multi-tenant platform bridging higher-education institutions and corporate recruiters through faculty-verified achievement ledgers and Kanban pipeline workflows.",
    bullets: [
      "Designed tri-portal Role-Based Access Control (RBAC) separating students, faculty endorsers, and recruiters.",
      "Engineered an interactive Kanban board for recruiters to headhunt pre-validated engineering candidates.",
      "Established secure API schemas and persistent relational modeling in TypeScript and Node.js.",
    ],
    techStack: ["TypeScript", "React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    verifiedEvidence: "GitHub Repository: korikanasaipraneeth-svg/student-portfolio",
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
    period: "2025 — 2026",
    year: "2025 - 2026",
    title: "Engineering Guardian AI Emergency Geospatial Response System",
    badge: "EMERGENCY SYSTEMS",
    institutionOrContext: "Public Safety Tech",
    category: "ENGINEERING",
    summary:
      "Constructed Guardian AI — an automated SOS emergency coordination system combining Flutter cross-platform mobile client, Python asynchronous geospatial backend, and Haversine hospital routing.",
    bullets: [
      "Engineered instant 1-touch SOS broadcast engine with GPS coordinate extraction.",
      "Implemented Haversine spatial proximity algorithms to locate and navigate to the nearest emergency trauma centers.",
      "Constructed normalized relational schema in MySQL for incident logging and verified contacts.",
    ],
    techStack: ["Flutter", "Dart", "Python", "MySQL", "Geospatial APIs"],
    verifiedEvidence: "GitHub Repository: korikanasaipraneeth-svg/guardian-ai",
  },
  {
    period: "2025 — Present",
    year: "2025 - 2026",
    title: "Open Source Development & Vibe Coding Workflow Pioneering",
    badge: "OPEN SOURCE",
    institutionOrContext: "GitHub Ecosystem",
    category: "OPEN_SOURCE",
    summary:
      "Established an active public engineering footprint on GitHub with 12 repositories spanning full-stack applications, AI tools, UI component libraries, and interactive canvas physics experiments.",
    bullets: [
      "Pioneered modern AI-assisted software engineering workflows ('Vibe Coding') to rapidly architect, prototype, and verify robust web systems.",
      "Maintained 100% genuine code provenance with verifiable commits and clear documentation.",
      "Explored custom Canvas 2D physics engines and low-latency browser interactivity.",
    ],
    techStack: ["Git", "GitHub", "Vibe Coding", "JavaScript", "HTML5 Canvas", "REST"],
    verifiedEvidence: "GitHub Profile: github.com/korikanasaipraneeth-svg (12 public repos)",
  },
];

export interface ProjectItem {
  id: string;
  name: string;
  title: string;
  badge: string;
  category: "01 — AI & MACHINE LEARNING" | "02 — FULL-STACK APPLICATIONS" | "03 — SOFTWARE ENGINEERING" | "04 — AUTOMATION & TOOLS" | "05 — EXPERIMENTAL PROJECTS";
  categoryKey: "ai-ml" | "fullstack" | "software-eng" | "tools" | "experimental";
  description: string;
  problemSolved: string;
  purpose: string;
  architecture: string;
  techStack: string[];
  features: string[];
  contribution: string;
  githubUrl: string;
  liveUrl?: string;
  flagship?: boolean;
  status: "ACTIVE PRODUCTION" | "STABLE RELEASE" | "PROTOTYPE" | "ACTIVE RESEARCH";
  metrics?: { label: string; value: string }[];
  image: string;
  blend?: string;
}

export const VERIFIED_PROJECTS: ProjectItem[] = [
  {
    id: "spyderman-portfolio",
    name: "spyderman-portfolio",
    title: "Spiderman Portfolio — Interactive 3D Developer Portfolio",
    badge: "SYS-01 // CREATIVE 3D COMPUTING",
    category: "05 — EXPERIMENTAL PROJECTS",
    categoryKey: "experimental",
    flagship: true,
    status: "ACTIVE PRODUCTION",
    image: "/projects/app-webgl-spiderman.svg",
    description:
      "Premium 3D developer portfolio built with a Prompt Engineering philosophy. Engineered with custom WebGL shaders that respond in real time to scroll velocity and mouse movement, cinematic preloader with mix-blend spotlight, glowing emblem, seamless fly-through transition, and a dynamically drawn Journey timeline.",
    problemSolved:
      "Static and generic developer portfolios that fail to demonstrate high-level graphics engineering, creative frontend capabilities, and fluid user engagement.",
    purpose:
      "Showcase cutting-edge interactive WebGL capabilities, shader programming, and responsive canvas dynamics coupled with a prompt-engineered modern stack.",
    architecture:
      "WebGL shader pipeline with Three.js rendering context, HTML5 Canvas 2D spring physics simulation, GSAP scroll-triggered animation controllers, and Vite/React architecture.",
    techStack: ["React 19", "Three.js", "WebGL", "Tailwind CSS", "Vite", "HTML5 Canvas", "JavaScript"],
    features: [
      "Cinematic preloader with mix-blend spotlight, glowing emblem and seamless fly-through transition",
      "Interactive 3D Hero section with custom WebGL shaders that respond to scroll and mouse movement",
      "Advanced scroll-triggered animations, parallax effects, and dynamically drawn Journey timeline",
      "Low-overhead canvas rendering loop optimized for 60fps on mobile and desktop",
      "Custom audio-visual feedback loops integrated with interactive elements",
    ],
    contribution:
      "Designed and developed the entire 3D portfolio experience, programmed custom WebGL vertex and fragment shaders, and implemented spring physics on canvas.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/spyderman-portfolio",
    liveUrl: "https://spyderman-portfolio.vercel.app",
    metrics: [
      { label: "Rendering", value: "60 FPS WebGL" },
      { label: "Philosophy", value: "Prompt Engineering" },
      { label: "Shaders", value: "Custom GLSL" },
    ],
  },
  {
    id: "smart-rural-health",
    name: "Smart-Rural-Health-",
    title: "Smart Rural Health — AI Healthcare Platform",
    badge: "SYS-02 // PREDICTIVE AI HEALTHCARE",
    category: "01 — AI & MACHINE LEARNING",
    categoryKey: "ai-ml",
    flagship: true,
    status: "ACTIVE PRODUCTION",
    image: "/projects/app-smart-rural-health.svg",
    description:
      "Full-stack healthcare platform that improves rural healthcare access through predictive AI and multi-role dashboards. Features an AI disease prediction engine with conversational symptom input and probability-based recommendations, alongside a predictive medicine supply-chain system.",
    problemSolved:
      "Severe shortages of doctors in rural areas, delayed clinical triage, and medicine stockouts causing critical delays in emergency patient treatment.",
    purpose:
      "Provide rural healthcare workers, clinics, and district hospitals with predictive clinical triage and automated medicine redistribution before shortages become fatal.",
    architecture:
      "FastAPI/Python disease prediction model with Bayesian probability scoring, multi-tenant role-based dashboards (Admin, Hospital, Patient, Blood Bank), and interactive map SOS routing.",
    techStack: ["Python", "FastAPI", "React 19", "Tailwind CSS", "MySQL", "Interactive Maps API", "RESTful Services"],
    features: [
      "AI disease prediction engine with conversational symptom input and probability-based recommendations",
      "Predictive medicine supply-chain system that forecasts shortages and generates automated inter-hospital transfer suggestions",
      "Role-based multi-tenant dashboards (Admin, Hospital, Patient, Blood Bank)",
      "SOS emergency routing using interactive maps and real-time geographic proximity calculations",
      "Offline-first patient vitals recording with background database synchronization",
    ],
    contribution:
      "Architected the predictive symptom analysis model, built the medicine shortage forecasting logic, and developed the role-based multi-portal frontend.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/Smart-Rural-Health-",
    metrics: [
      { label: "Role Dashboards", value: "4 Multi-Role" },
      { label: "Supply Chain", value: "Automated Transfers" },
      { label: "Triage Engine", value: "Predictive AI" },
    ],
  },
  {
    id: "swayam",
    name: "swayam",
    title: "Swayam — Blood & Organ Donation Platform",
    badge: "SYS-03 // LIFE-SAVING PLATFORM",
    category: "02 — FULL-STACK APPLICATIONS",
    categoryKey: "fullstack",
    flagship: true,
    status: "ACTIVE PRODUCTION",
    image: "/projects/app-swayam.svg",
    description:
      "Full-stack real-time platform connecting blood and organ donors with recipients in critical emergencies. Features secure backend services with robust data handling, JWT authentication, responsive UI components, and integrated database for real-time donor-recipient matching and live inventory tracking.",
    problemSolved:
      "Critical matching delays and fragmented blood/organ bank inventories that lead to preventable loss of life during trauma emergencies.",
    purpose:
      "Eliminate time barriers between life-saving donors and patients in need through algorithmic matching and transparent hospital blood bank inventory tracking.",
    architecture:
      "Node.js/Express backend with JWT authentication and RBAC, MySQL & MongoDB Atlas data store with geospatial indices, and a React 19 responsive interface.",
    techStack: ["React 19", "Node.js", "Express.js", "JWT Authentication", "MySQL", "MongoDB Atlas", "Tailwind CSS"],
    features: [
      "Real-time donor-recipient matching engine based on blood group, organ compatibility, and geospatial proximity",
      "Secure backend services with robust cryptographic data handling and JWT authentication",
      "Responsive frontend interface with modern UI components and clean layouts",
      "Live hospital blood bank and organ inventory tracking with low-stock alerts",
      "Verified donor credentials and secure patient contact channels",
    ],
    contribution:
      "Designed the backend REST APIs, implemented JWT token authentication, and built the live donor matching algorithm and frontend inventory dashboard.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/swayam",
    metrics: [
      { label: "Matching", value: "Real-Time Geo" },
      { label: "Auth", value: "JWT Protected" },
      { label: "Inventory", value: "Live Bank Sync" },
    ],
  },
  {
    id: "stock-market-analyzer",
    name: "portfolio",
    title: "Portfolio & Stock Market Analyzer (1st Prize Brainovision Hackathon)",
    badge: "SYS-04 // FINANCIAL ANALYTICS",
    category: "03 — SOFTWARE ENGINEERING",
    categoryKey: "software-eng",
    flagship: true,
    status: "ACTIVE PRODUCTION",
    image: "/projects/app-stock-analyzer.svg",
    description:
      "Web tool for analyzing stock trends and personal portfolio performance. Awarded 1st Prize at Brainovision Hackathon (Backend, PPT & Documentation). Performs data analysis and visualization to identify market patterns and portfolio insights with interactive frontend dashboards for real-time trend monitoring and reporting.",
    problemSolved:
      "Complex, cluttered market interfaces that make personal portfolio risk evaluation and trend analysis difficult for emerging retail investors.",
    purpose:
      "Democratize quantitative portfolio insights through clean data visualization, moving average analytics, and automated risk scoring.",
    architecture:
      "Python data extraction and analysis pipeline, Express/Node.js API gateway, and interactive Chart.js/Canvas frontend with dynamic time-frame controls.",
    techStack: ["Python", "Node.js", "Express.js", "Chart.js", "HTML5", "CSS3", "JavaScript", "MySQL"],
    features: [
      "Real-time stock trend monitoring and personal portfolio performance tracking",
      "Data analysis and visualization algorithms to identify market patterns and volatility insights",
      "Interactive frontend dashboards with historical multi-timeframe overlays",
      "Automated portfolio health reporting and risk diversification metrics",
      "Awarded 1st Prize at Brainovision Hackathon for backend architecture, documentation, and presentation",
    ],
    contribution:
      "Spearheaded backend architecture, designed data analysis pipelines, authored complete technical documentation, and delivered the winning hackathon presentation.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/portfolio",
    metrics: [
      { label: "Award", value: "1st Prize Brainovision" },
      { label: "Pipeline", value: "Real-Time Analysis" },
      { label: "Dashboards", value: "Interactive Visuals" },
    ],
  },
  {
    id: "student-portfolio",
    name: "student-portfolio",
    title: "STUDENT360 — Academic SaaS & Verification Engine (1st Prize Google Hackathon)",
    badge: "SYS-05 // ACADEMIC PLATFORM",
    category: "02 — FULL-STACK APPLICATIONS",
    categoryKey: "fullstack",
    flagship: true,
    status: "ACTIVE PRODUCTION",
    image: "/projects/app-student360.svg",
    description:
      "Enterprise-grade SaaS platform bridging academia and industry. Awarded 1st Prize at Google Student Ambassador Hackathon (Student Profile & Job Search Platform). Interconnected tri-portal system where students build faculty-verified digital portfolios, professors validate academic achievements, and recruiters headhunt pre-verified talent via an interactive Kanban pipeline.",
    problemSolved:
      "Unverified resume claims and lack of trusted academic verification for recruiters seeking emerging engineering talent.",
    purpose:
      "Provide transparent, cryptographic and faculty-endorsed validation of student projects, hackathons, and credentials directly linked to recruitment pipelines.",
    architecture:
      "Next.js multi-tenant frontend with Role-Based Access Control (RBAC), Express/Node API microservices, relational database schema for verification chains, and real-time Kanban state management.",
    techStack: ["TypeScript", "React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Kanban API", "PostgreSQL"],
    features: [
      "Tri-portal role-based architecture: Student, Faculty Validator, and Industry Recruiter",
      "Cryptographic faculty verification workflow for academic projects & credentials",
      "Interactive candidate headhunting pipeline with draggable Kanban workflow stages",
      "Real-time analytics on candidate skillset distribution and project complexity",
      "Automated portfolio compilation and secure shareable verification links",
    ],
    contribution:
      "Architected system database schema, designed tri-portal RBAC authentication, built the Kanban headhunting workflow, and implemented verified portfolio generation.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/student-portfolio",
    metrics: [
      { label: "Award", value: "1st Prize Google" },
      { label: "Portals", value: "3 Dedicated" },
      { label: "Verification Model", value: "Faculty-Signed" },
    ],
  },
  {
    id: "project-kissan",
    name: "project-kissan",
    title: "AgriSahay AI — Smart Agricultural Diagnostics & Assistance",
    badge: "SYS-06 // MULTIMODAL AI",
    category: "01 — AI & MACHINE LEARNING",
    categoryKey: "ai-ml",
    flagship: true,
    status: "ACTIVE PRODUCTION",
    image: "/projects/app-agrisahay.svg",
    description:
      "An intelligent smart-farming ecosystem empowering agricultural producers with computer vision crop disease detection, multilingual Gemini-powered agricultural guidance, and predictive harvest analytics.",
    problemSolved:
      "Delayed crop disease detection and linguistic barriers preventing smallholder farmers from accessing timely agronomic expertise and accurate market pricing.",
    purpose:
      "Democratize precision agriculture by putting real-time neural disease diagnosis and multimodal AI consultation into the hands of farmers via mobile-first web access.",
    architecture:
      "Client-side camera image capture pipeline, Flask/Python computer vision inference microservice, Google Gemini Multimodal API orchestration, and localized regional weather/pricing connectors.",
    techStack: ["Python", "Flask", "Computer Vision", "OpenCV", "Google Gemini API", "React", "Node.js", "REST APIs"],
    features: [
      "Instant leaf and crop lesion disease detection using optimized vision models",
      "Multilingual conversational agronomy advisor powered by Google Gemini API",
      "Predictive yield estimation based on regional climate inputs and crop conditions",
      "Localized market pricing indices and dynamic weather anomaly alerts",
      "Offline-resilient image queuing for low-connectivity rural deployment",
    ],
    contribution:
      "Trained and integrated computer vision inference pipeline, engineered Gemini multimodal prompting prompts for vernacular languages, and connected Flask microservices to React frontend.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/project-kissan",
    metrics: [
      { label: "Vision Latency", value: "< 350ms" },
      { label: "Multimodal LLM", value: "Gemini Pro" },
      { label: "Language Support", value: "Multilingual" },
    ],
  },
  {
    id: "guardian-ai",
    name: "guardian-ai",
    title: "Guardian AI — Emergency SOS & Geospatial Health Mesh",
    badge: "SYS-07 // EMERGENCY SYSTEMS",
    category: "01 — AI & MACHINE LEARNING",
    categoryKey: "ai-ml",
    flagship: true,
    status: "ACTIVE PRODUCTION",
    image: "/projects/app-guardian-ai.svg",
    description:
      "AI-powered safety and emergency assistance system providing instant SOS broadcasts, live geolocation streaming, and nearest hospital geospatial triage using distance-matrix routing.",
    problemSolved:
      "Critical response latency during life-threatening emergencies, medical incidents, and lack of automated hospital routing under extreme stress.",
    purpose:
      "Accelerate emergency response windows by automating incident alerts, broadcast relays, and identifying the nearest trauma facilities within seconds.",
    architecture:
      "Flutter cross-platform mobile client, Python asynchronous backend service, Haversine geospatial distance calculation engine, and MySQL relational persistence layer.",
    techStack: ["Python", "Flutter", "Dart", "MySQL", "FastAPI / Flask", "Geospatial APIs", "REST Services"],
    features: [
      "Single-touch instant SOS trigger with automatic geographic coordinate capture",
      "Real-time geolocation telemetry streaming to verified emergency contacts",
      "Automated spatial search query calculating closest emergency medical centers",
      "Incident logging with encrypted audit logs for first responders",
      "Battery-efficient background beacon mode for distress monitoring",
    ],
    contribution:
      "Developed Python geospatial backend endpoints, integrated hospital location database, and designed emergency state machine in Flutter.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/guardian-ai",
    metrics: [
      { label: "SOS Trigger", value: "Instant 1-Tap" },
      { label: "Routing Engine", value: "Haversine Spatial" },
      { label: "Client Stack", value: "Flutter Mobile" },
    ],
  },
  {
    id: "hrx-interfaces",
    name: "hrx-interfaces-",
    title: "HRX Interfaces — Enterprise Human Resource System Components",
    badge: "SYS-08 // UI ARCHITECTURE",
    category: "03 — SOFTWARE ENGINEERING",
    categoryKey: "software-eng",
    status: "STABLE RELEASE",
    image: "/projects/app-hrx-interfaces.svg",
    description:
      "Enterprise UI component library and modular dashboard system built during Software Developer Internship at HRX Tech Solution (September 2026). Engineered for personnel management, performance evaluations, and role allocations.",
    problemSolved:
      "Cluttered, non-responsive legacy administrative portals that impede rapid organizational navigation.",
    purpose:
      "Deliver a clean, high-density component suite providing instant visual feedback on personnel allocations and payroll states.",
    architecture:
      "Atomic design component hierarchy, CSS custom properties design tokens, and decoupled state management.",
    techStack: ["JavaScript", "HTML5", "CSS3 / Modern CSS", "DOM APIs", "HRX Tech Solution"],
    features: [
      "High-density responsive data tables with client-side sorting and filtering",
      "Modular employee status cards with interactive lifecycle indicators",
      "Accessible modal dialogues and keyboard-navigable operational forms",
    ],
    contribution:
      "Authored component styles, layout structures, and DOM interaction hooks during HRX Tech Solution internship.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/hrx-interfaces-",
  },
  {
    id: "doctor",
    name: "doctor",
    title: "CareSync Doctor Consultation & Appointment Gateway",
    badge: "SYS-09 // HEALTHCARE ACCESS",
    category: "02 — FULL-STACK APPLICATIONS",
    categoryKey: "fullstack",
    status: "PROTOTYPE",
    image: "/projects/app-caresync-doctor.svg",
    description:
      "Direct medical appointment booking and digital clinical consultation portal designed for streamlined physician-patient interactions.",
    problemSolved:
      "Phone-based appointment scheduling friction and lack of unified consultation slots in independent clinics.",
    purpose:
      "Simplify patient booking workflows while providing practitioners with structured patient intake summaries.",
    architecture:
      "Client-side calendar engine, responsive scheduling view, dynamic consultation slot allocation, and REST endpoint integration.",
    techStack: ["HTML5", "CSS3", "JavaScript", "REST APIs", "Modern DOM APIs"],
    features: [
      "Real-time calendar slot reservation with conflict detection",
      "Structured medical symptom intake questionnaire",
      "Doctor schedule availability calendar with automated reminders",
      "Cross-device mobile-optimized UI",
    ],
    contribution:
      "Designed and coded responsive consultation interfaces and appointment booking state logic.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/doctor",
  },
  {
    id: "birthdaywishes",
    name: "birthdaywishes",
    title: "Procedural Canvas Celebration & Motion Engine",
    badge: "SYS-10 // PROCEDURAL GRAPHICS",
    category: "05 — EXPERIMENTAL PROJECTS",
    categoryKey: "experimental",
    status: "ACTIVE PRODUCTION",
    image: "/projects/app-canvas-celebration.svg",
    description:
      "Interactive celebratory web experience driven by algorithmic 2D canvas particle physics, procedural confetti simulations, and audio-reactive micro-animations.",
    problemSolved:
      "Exploring mathematical particle physics and spring dynamics directly inside HTML5 Canvas.",
    purpose:
      "Deliver an uplifting interactive experience while benchmarking browser canvas particle generation performance.",
    architecture:
      "Canvas 2D render loop, custom gravity and drag force physics, and high-DPI retina display scaling.",
    techStack: ["HTML5 Canvas", "JavaScript", "CSS Animations", "Physics Math"],
    features: [
      "Real-time gravity, drag, and air-resistance particle dynamics",
      "Touch and mouse-reactive particle bursts",
      "Lightweight footprint with zero external runtime dependencies",
    ],
    contribution:
      "Implemented procedural particle algorithms, force equations, and interactive mouse collision handlers.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/birthdaywishes",
  },
  {
    id: "sai",
    name: "sai",
    title: "EduLearn Interactive Educational Web Interface",
    badge: "SYS-11 // EDTECH UI",
    category: "02 — FULL-STACK APPLICATIONS",
    categoryKey: "fullstack",
    status: "STABLE RELEASE",
    image: "/projects/app-edulearn.svg",
    description:
      "Modular e-learning interface built to explore interactive course navigation, modular lesson cards, and structured student knowledge delivery.",
    problemSolved:
      "Static course documents that fail to engage visual and kinesthetic learners.",
    purpose:
      "Provide clean educational modules that support student comprehension through interactive visual layouts.",
    architecture:
      "Component-based layout structure with semantic markup and responsive CSS grid styling.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Progressive lesson modules with collapsible topic sections",
      "Interactive knowledge check widgets",
      "Accessible navigation with high-contrast text rendering",
    ],
    contribution:
      "Designed curriculum layouts, interactive exercises, and responsive stylesheet architecture.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/sai",
  },
  {
    id: "saipranneth",
    name: "saipranneth",
    title: "Architectural Profile Configuration & Systems Matrix",
    badge: "SYS-12 // DEVOPS & CONFIG",
    category: "04 — AUTOMATION & TOOLS",
    categoryKey: "tools",
    status: "STABLE RELEASE",
    image: "/projects/app-devops-matrix.svg",
    description:
      "Specialized GitHub configuration repository maintaining public developer telemetry, automated README metrics, and public architectural profiles.",
    problemSolved:
      "Fragmented developer profiles that fail to convey architectural competence, verified repositories, and technical mastery.",
    purpose:
      "Maintain a unified, automated, and mathematically verified profile presence across developer ecosystems.",
    architecture:
      "Markdown documentation, GitHub Actions workflow integrations, and dynamic SVG telemetry generators.",
    techStack: ["Markdown", "GitHub Actions", "SVG Graphics", "Git Automation"],
    features: [
      "Automated repository telemetry and commit distribution metrics",
      "Structured technical skill categorizations and verified project links",
      "Public architectural manifesto and engineering principles",
    ],
    contribution:
      "Structured and automated profile documentation and repository matrices.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/saipranneth",
  },
];

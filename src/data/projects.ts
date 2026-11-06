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
}

export const VERIFIED_PROJECTS: ProjectItem[] = [
  {
    id: "student-portfolio",
    name: "student-portfolio",
    title: "STUDENT360 — Academic SaaS & Verification Engine (1st Prize Google Hackathon)",
    badge: "SYS-01 // FLAGSHIP PLATFORM",
    category: "02 — FULL-STACK APPLICATIONS",
    categoryKey: "fullstack",
    flagship: true,
    status: "ACTIVE PRODUCTION",
    description:
      "Enterprise-grade SaaS platform bridging academia and industry. Awarded 1st Prize at Google Student Ambassador Hackathon. Interconnected tri-portal system where students build faculty-verified digital portfolios, professors validate academic achievements, and recruiters headhunt pre-verified talent via an interactive Kanban pipeline.",
    problemSolved:
      "Unverified resume inflation and lack of trusted academic verification for recruiters seeking emerging engineering talent.",
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
      { label: "Portals", value: "3 Dedicated" },
      { label: "Verification Model", value: "Faculty-Signed" },
      { label: "Pipeline", value: "Kanban Drag & Drop" },
    ],
  },
  {
    id: "project-kissan",
    name: "project-kissan",
    title: "AgriSahay AI — Smart Agricultural Diagnostics & Assistance",
    badge: "SYS-02 // MULTIMODAL AI",
    category: "01 — AI & MACHINE LEARNING",
    categoryKey: "ai-ml",
    flagship: true,
    status: "ACTIVE PRODUCTION",
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
    badge: "SYS-03 // EMERGENCY SYSTEMS",
    category: "01 — AI & MACHINE LEARNING",
    categoryKey: "ai-ml",
    flagship: true,
    status: "ACTIVE PRODUCTION",
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
    id: "smart-rural-health",
    name: "Smart-Rural-Health-",
    title: "Smart Rural Health — Decentralized Clinical Triage Portal",
    badge: "SYS-04 // HEALTHCARE INFRASTRUCTURE",
    category: "02 — FULL-STACK APPLICATIONS",
    categoryKey: "fullstack",
    status: "STABLE RELEASE",
    description:
      "Digital healthcare coordination interface tailored for rural clinics, enabling paramedical staff to record patient vitals, conduct structured symptom triage, and queue medical consultations.",
    problemSolved:
      "Disjointed paper records and limited doctor availability in rural primary healthcare centers.",
    purpose:
      "Digitize primary health consultations and create a continuous diagnostic trail between rural community clinics and district hospitals.",
    architecture:
      "Modular client-side interface, asynchronous REST API data synchronization, normalized medical history schema, and responsive low-bandwidth UI.",
    techStack: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Local Storage Cache"],
    features: [
      "Structured symptom checklist and automated severity tier calculation",
      "Patient digital vitals tracking with temporal trend visualization",
      "Offline cache with automatic background sync when network is restored",
      "Simplified vernacular-friendly interface designed for community health workers",
    ],
    contribution:
      "Built client-side triage forms, validation algorithms, and clinical vitals recording views.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/Smart-Rural-Health-",
  },
  {
    id: "hrx-interfaces",
    name: "hrx-interfaces-",
    title: "HRX Interfaces — Enterprise Human Resource System Components",
    badge: "SYS-05 // UI ARCHITECTURE",
    category: "03 — SOFTWARE ENGINEERING",
    categoryKey: "software-eng",
    status: "STABLE RELEASE",
    description:
      "Enterprise UI component library and modular dashboard system built during Software Developer Internship at HRX Tech Solution. Built for personnel management, performance evaluations, and role allocations.",
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
    id: "spyderman-portfolio",
    name: "spyderman-portfolio",
    title: "Spider-Man Interactive 3D Experience — WebGL Shaders & Canvas Dynamics",
    badge: "SYS-06 // CREATIVE COMPUTING",
    category: "05 — EXPERIMENTAL PROJECTS",
    categoryKey: "experimental",
    status: "ACTIVE PRODUCTION",
    description:
      "Premium 3D developer experience with custom WebGL shaders, interactive Hero physics responding to mouse movement, cinematic preloader with mix-blend spotlight, glowing emblem, and dynamic Journey timeline.",
    problemSolved:
      "Exploring real-time browser graphics rendering, spring physics simulations, and low-latency canvas animations without heavy engine overhead.",
    purpose:
      "Push browser front-end limits using WebGL shaders, Three.js, and interactive motion design.",
    architecture:
      "WebGL shader pipeline, HTML5 Canvas 2D render loop, Verlet integration particle physics, and responsive viewport coordinate transforms.",
    techStack: ["Three.js", "React 19", "WebGL", "HTML5 Canvas", "JavaScript", "Tailwind CSS"],
    features: [
      "Interactive 3D Hero section with custom WebGL shaders responding to scroll and mouse movement",
      "Cinematic preloader with mix-blend spotlight and seamless fly-through transition",
      "Verlet integration particle spring physics for interactive web strands",
      "Advanced scroll-triggered animations and dynamically drawn Journey timeline",
    ],
    contribution:
      "Designed and coded 3D WebGL scenes, canvas math, physics springs, and custom interactive listeners.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/spyderman-portfolio",
    liveUrl: "https://spyderman-portfolio.vercel.app",
  },
  {
    id: "swayam",
    name: "swayam",
    title: "Swayam Platform Academic Tracker & Sync Utility",
    badge: "SYS-07 // ACADEMIC ENGINEERING",
    category: "03 — SOFTWARE ENGINEERING",
    categoryKey: "software-eng",
    status: "STABLE RELEASE",
    description:
      "Java-based academic coursework utility developed to organize, monitor, and synchronize progress across national higher-education online learning curricula.",
    problemSolved:
      "Difficulty tracking multi-course assignment deadlines and performance metrics across fragmented academic portals.",
    purpose:
      "Provide a clean, programmatic desktop utility to aggregate assignment submission schedules and score trajectories.",
    architecture:
      "Object-oriented Java application utilizing MVC pattern, file-based persistence, and deadline scheduling routines.",
    techStack: ["Java", "OOP", "File I/O", "Data Structures"],
    features: [
      "Course curriculum indexing and assignment schedule tracking",
      "Automated deadline warning thresholds and submission logs",
      "Robust object-oriented data structures modeling academic progression",
    ],
    contribution:
      "Designed class hierarchies, file persistence mechanisms, and progress calculation logic.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/swayam",
  },
  {
    id: "doctor",
    name: "doctor",
    title: "Doctor Connect — Clinical Consultation Interface",
    badge: "SYS-08 // HEALTHCARE UX",
    category: "02 — FULL-STACK APPLICATIONS",
    categoryKey: "fullstack",
    status: "STABLE RELEASE",
    description:
      "Patient-practitioner scheduling interface providing structured appointment booking, doctor specialty lookup, and telemedicine preparation checklists.",
    problemSolved:
      "Friction in outpatient appointment scheduling and fragmented communication before clinical consults.",
    purpose:
      "Streamline patient intake with clear specialty categorization and intuitive booking slots.",
    architecture:
      "Semantic HTML5 structure, modular CSS layout grid, and event-driven JavaScript form handlers.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Client Validation"],
    features: [
      "Specialty-based physician directory with availability time slot selectors",
      "Interactive pre-consultation symptom summary intake",
      "Responsive layout optimized for mobile booking on modest devices",
    ],
    contribution:
      "Created appointment booking UI, input sanitization logic, and responsive layouts.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/doctor",
  },
  {
    id: "sai-edulearn",
    name: "sai",
    title: "EduLearn — Interactive Educational Knowledge Base",
    badge: "SYS-09 // EDTECH PLATFORM",
    category: "04 — AUTOMATION & TOOLS",
    categoryKey: "tools",
    status: "STABLE RELEASE",
    description:
      "Web-based learning interface designed to deliver structured educational modules, interactive assessments, and technical subject study materials.",
    problemSolved:
      "Scattered educational materials lacking structured navigation and self-assessment loops.",
    purpose:
      "Provide students with a clean, distraction-free environment for reviewing computer science fundamentals.",
    architecture:
      "Static site generation layout, accessible navigation tree, and lightweight interactive quiz engine.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Structured topic hierarchy for computer science course subjects",
      "Client-side quiz evaluation engine with instant score tallying",
      "Zero-dependency fast page loads on low-bandwidth networks",
    ],
    contribution:
      "Engineered content layout, navigation structure, and quiz scoring routines.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/sai",
  },
  {
    id: "birthdaywishes",
    name: "birthdaywishes",
    title: "Celebration Canvas — Micro Interactive Animation",
    badge: "SYS-10 // CREATIVE SCRIPTING",
    category: "05 — EXPERIMENTAL PROJECTS",
    categoryKey: "experimental",
    status: "STABLE RELEASE",
    description:
      "Self-contained single-file interactive web celebration experience combining procedural particle fireworks, animated typography, and dynamic sound triggers.",
    problemSolved:
      "Demonstrating zero-dependency creative coding and procedural particle animation in a single lightweight deliverable.",
    purpose:
      "Serve as a sandbox for particle emitter algorithms and CSS keyframe orchestrations.",
    architecture:
      "Single-file micro architecture containing embedded stylesheet, canvas drawing loop, and event dispatchers.",
    techStack: ["JavaScript", "HTML5 Canvas", "CSS3 Animations"],
    features: [
      "Procedural 2D particle emitter simulating multi-stage firework explosions",
      "Smooth frame-rate rendering using native requestAnimationFrame loop",
      "Zero external library dependencies for instant loading",
    ],
    contribution:
      "Wrote complete canvas particle physics equations and animation sequences.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/birthdaywishes",
  },
  {
    id: "saipranneth",
    name: "saipranneth",
    title: "Developer Documentation & Profile Infrastructure",
    badge: "SYS-11 // OPEN SOURCE PROFILE",
    category: "04 — AUTOMATION & TOOLS",
    categoryKey: "tools",
    status: "ACTIVE PRODUCTION",
    description:
      "Developer identity infrastructure and GitHub documentation profile curating technical specializations, active projects, and engineering toolchains.",
    problemSolved:
      "Maintaining a clear public record of engineering focus areas and repository navigation for collaborators.",
    purpose:
      "Provide an organized entry point to open-source contributions and development activity.",
    architecture:
      "Markdown documentation with custom SVG badges, status shields, and structured metadata.",
    techStack: ["Markdown", "GitHub Actions", "SVG Badging"],
    features: [
      "Dynamic repository statistics and technical profile breakdown",
      "Structured contact protocols and open-source contribution guide",
    ],
    contribution:
      "Curated repository content, configured badges, and documented technical focus.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/saipranneth",
  },
  {
    id: "legacy-portfolio",
    name: "portfolio",
    title: "Foundational Web Engineering Portfolio",
    badge: "SYS-12 // MILESTONE ITERATION",
    category: "03 — SOFTWARE ENGINEERING",
    categoryKey: "software-eng",
    status: "STABLE RELEASE",
    description:
      "Early foundational portfolio implementation establishing component layout patterns, responsive styling techniques, and project cataloging.",
    problemSolved:
      "Initial iteration toward establishing a personal engineering digital presence.",
    purpose:
      "Document learning progression and establish foundational frontend mastery.",
    architecture:
      "Vanilla client-side architecture with semantic sections and responsive layout rules.",
    techStack: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    features: [
      "Responsive multi-section layout with smooth anchor scrolling",
      "Direct project repository links and contact integration",
    ],
    contribution:
      "Implemented layout structure, responsive CSS media queries, and deployment pipeline.",
    githubUrl: "https://github.com/korikanasaipraneeth-svg/portfolio",
  },
];

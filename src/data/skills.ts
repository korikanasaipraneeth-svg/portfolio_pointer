export interface SkillItem {
  name: string;
  category: "Programming" | "Frontend" | "Backend" | "Database" | "Development" | "AI & ML" | "Other";
  level: "Core Engineering" | "Active Production" | "Advanced Architecture" | "Foundational";
  description: string;
  highlight?: boolean;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  code: string;
  description: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "prog",
    name: "Programming Languages",
    code: "01 // CORE RUNTIME",
    description: "Foundational and modern compiled and interpreted languages for systems, AI models, and backends.",
    skills: [
      {
        name: "Python",
        category: "Programming",
        level: "Core Engineering",
        description: "Primary language for AI/ML pipelines, Flask/FastAPI microservices, computer vision, and automation scripts.",
        highlight: true,
        tags: ["PyData", "FastAPI", "OpenCV", "AsyncIO"],
      },
      {
        name: "Java",
        category: "Programming",
        level: "Core Engineering",
        description: "Object-oriented software development, enterprise design patterns, academic system modeling, and data structures.",
        tags: ["OOP", "Design Patterns", "JVM", "MVC"],
      },
      {
        name: "C++",
        category: "Programming",
        level: "Foundational",
        description: "Low-level systems programming, memory management principles, computational efficiency, and algorithmic problem-solving.",
        tags: ["Pointers", "STL", "Memory Model", "Algorithms"],
      },
      {
        name: "C",
        category: "Programming",
        level: "Foundational",
        description: "Procedural programming fundamentals, hardware-close memory manipulation, and foundational computing architecture.",
        tags: ["Memory Layout", "Structs", "Pointers", "POSIX"],
      },
    ],
  },
  {
    id: "fe",
    name: "Frontend Architecture",
    code: "02 // CLIENT SURFACE",
    description: "Component systems, reactive user interfaces, interactive canvas visuals, and accessible web standards.",
    skills: [
      {
        name: "React",
        category: "Frontend",
        level: "Active Production",
        description: "Declarative component trees, hooks state machines, optimized virtual DOM reconciliation, and modern application architecture.",
        highlight: true,
        tags: ["Next.js", "Custom Hooks", "Context", "Suspense"],
      },
      {
        name: "JavaScript (ES6+)",
        category: "Frontend",
        level: "Core Engineering",
        description: "Event-driven asynchronous programming, closures, microtask event loops, Canvas 2D manipulation, and modern web APIs.",
        highlight: true,
        tags: ["Async/Await", "Promises", "Canvas API", "Web Audio"],
      },
      {
        name: "HTML5 & Semantic DOM",
        category: "Frontend",
        level: "Core Engineering",
        description: "Semantic document structuring, high accessibility (a11y) standards, ARIA roles, and native multimedia integration.",
        tags: ["Semantic Markup", "WCAG", "ARIA", "SEO Meta"],
      },
      {
        name: "CSS3 & Modern Styling",
        category: "Frontend",
        level: "Active Production",
        description: "Tailwind CSS design tokens, Flexbox/Grid architectural layouts, CSS custom properties, and smooth GPU-accelerated keyframe motion.",
        tags: ["Tailwind CSS", "CSS Grid", "Keyframes", "Custom Properties"],
      },
    ],
  },
  {
    id: "be",
    name: "Backend & APIs",
    code: "03 // SERVICE LAYER",
    description: "High-performance asynchronous server runtimes, REST microservice contracts, and endpoint integrations.",
    skills: [
      {
        name: "FastAPI",
        category: "Backend",
        level: "Active Production",
        description: "Asynchronous Python web framework leveraging Pydantic type validation, automatic OpenAPI generation, and fast throughput.",
        highlight: true,
        tags: ["Pydantic", "Async Endpoints", "OpenAPI", "Dependency Injection"],
      },
      {
        name: "REST APIs",
        category: "Backend",
        level: "Core Engineering",
        description: "Architecting idempotent HTTP resource contracts, standard status code hierarchies, JWT authentication, and pagination schemas.",
        tags: ["JSON Schema", "HTTP Methods", "CORS", "Rate Limiting"],
      },
    ],
  },
  {
    id: "db",
    name: "Database Systems",
    code: "04 // PERSISTENCE",
    description: "Relational modeling, ACID transaction guarantees, schema indexing, and database administration.",
    skills: [
      {
        name: "SQL",
        category: "Database",
        level: "Core Engineering",
        description: "Relational query composition, multi-table joins, subqueries, aggregation, and index optimization.",
        highlight: true,
        tags: ["DML/DDL", "Complex Joins", "Aggregations", "Indexing"],
      },
      {
        name: "MySQL",
        category: "Database",
        level: "Active Production",
        description: "Production relational database management, schema migration design, foreign key constraints, and connection pooling.",
        tags: ["InnoDB", "Foreign Keys", "Transactions", "Relational Design"],
      },
      {
        name: "DBMS Fundamentals",
        category: "Database",
        level: "Core Engineering",
        description: "Entity-Relationship (ER) modeling, normalization (1NF-BCNF), concurrency control, and ACID consistency guarantees.",
        tags: ["Normalization", "ER Diagrams", "ACID", "Concurrency"],
      },
    ],
  },
  {
    id: "dev",
    name: "Development & Mobile",
    code: "05 // WORKFLOW & APPS",
    description: "Cross-platform mobile client engineering, distributed version control, and team collaboration workflows.",
    skills: [
      {
        name: "Flutter",
        category: "Development",
        level: "Active Production",
        description: "Cross-platform mobile client development for Android and iOS using Dart, reactive state management, and native device feature access.",
        highlight: true,
        tags: ["Dart", "Widgets Tree", "Geospatial Services", "Mobile UI"],
      },
      {
        name: "Git",
        category: "Development",
        level: "Core Engineering",
        description: "Distributed version control, branch management, merge conflict resolution, rebasing, and clean atomic commit hygiene.",
        tags: ["Branching", "Cherry-pick", "Rebase", "Interactive Staging"],
      },
      {
        name: "GitHub",
        category: "Development",
        level: "Core Engineering",
        description: "Repository architecture, GitHub Actions continuous integration, pull request code review workflows, and public release packaging.",
        tags: ["GitHub Actions", "Releases", "Issues", "Code Reviews"],
      },
    ],
  },
  {
    id: "aiml",
    name: "AI & Machine Learning",
    code: "06 // INTELLIGENCE",
    description: "Machine learning workflows, computer vision inference, LLM multimodal prompting, and AI-assisted engineering.",
    skills: [
      {
        name: "Artificial Intelligence",
        category: "AI & ML",
        level: "Advanced Architecture",
        description: "Search algorithms, heuristic optimization, agent decision policies, and automated reasoning systems.",
        highlight: true,
        tags: ["Heuristics", "Search Trees", "Decision Logic", "Autonomous Agents"],
      },
      {
        name: "Machine Learning",
        category: "AI & ML",
        level: "Core Engineering",
        description: "Supervised and unsupervised learning, feature preprocessing, model evaluation metrics, and predictive regression/classification.",
        highlight: true,
        tags: ["Scikit-Learn", "Model Evaluation", "Data Preprocessing", "Feature Engineering"],
      },
      {
        name: "AI-Assisted Development (Vibe Coding)",
        category: "AI & ML",
        level: "Advanced Architecture",
        description: "Harnessing frontier LLM agents, automated code generation, real-time code synthesis, test authoring, and architectural velocity.",
        highlight: true,
        tags: ["Agent Swarms", "Prompt Engineering", "Iterative Synthesis", "Architectural Review"],
      },
    ],
  },
  {
    id: "other",
    name: "Engineering Practices",
    code: "07 // CROSS-CUTTING",
    description: "Applied disciplines including API integrations, diagnostics, automated pipelines, and design empathy.",
    skills: [
      {
        name: "API Integration",
        category: "Other",
        level: "Active Production",
        description: "Integrating third-party APIs (Gemini Multimodal, weather feeds, payment gateways, geospatial distance matrices) securely.",
        tags: ["Webhooks", "Authentication", "Rate Limit Handling", "Data Mapping"],
      },
      {
        name: "Debugging & Diagnostics",
        category: "Other",
        level: "Core Engineering",
        description: "Root cause analysis, browser performance profiling, memory leak detection, server log telemetry, and breakpoint inspections.",
        tags: ["Chrome DevTools", "Stack Traces", "Network Profiling", "Diagnostics"],
      },
      {
        name: "Automation & Scripting",
        category: "Other",
        level: "Active Production",
        description: "Automating routine development tasks, data extraction pipelines, build scripts, and multi-step batch operations.",
        tags: ["Task Automation", "Python Scripts", "CLI Tools", "Data Wrangling"],
      },
      {
        name: "UI/UX & Creative Engineering",
        category: "Other",
        level: "Active Production",
        description: "Crafting intuitive high-density interfaces, human-computer interaction feedback loops, kinetic visual balance, and ergonomic typography.",
        tags: ["Design Systems", "HCI", "Micro-Interactions", "Wireframing"],
      },
    ],
  },
];

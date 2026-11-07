export interface SkillItem {
  name: string;
  category: string;
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

// Curated 15 Technologies Daily Stack (Matching reference design)
export const DAILY_STACK_15: SkillItem[] = [
  {
    name: "Terminal",
    category: "Developer Tools",
    level: "Core Engineering",
    description: "UNIX Shell commands, CLI automation, build pipelines, package management, and terminal workflows.",
    highlight: true,
    tags: ["Bash/Zsh", "CLI Tooling", "Automation", "Git CLI", "Build Scripts"],
  },
  {
    name: "Netlify",
    category: "Developer Tools",
    level: "Active Production",
    description: "Static and serverless web hosting, continuous deployment pipelines, edge routing, and automated previews.",
    tags: ["Continuous Deployment", "Edge Routing", "Serverless", "SSL/DNS"],
  },
  {
    name: "Vercel",
    category: "Developer Tools",
    level: "Active Production",
    description: "Global edge network hosting, production Next.js deployment, preview environments, and instant zero-config CI/CD.",
    highlight: true,
    tags: ["Edge Network", "Next.js Hosting", "CI/CD Pipelines", "Zero-Config Deploy"],
  },
  {
    name: "Firebase",
    category: "Backend Development",
    level: "Active Production",
    description: "Realtime database persistence, user authentication, Cloud Firestore, and scalable backend services.",
    tags: ["Authentication", "Firestore", "Realtime DB", "Cloud Functions"],
  },
  {
    name: "GitHub",
    category: "Developer Tools",
    level: "Core Engineering",
    description: "Repository collaboration, Git branching hygiene, pull request workflows, and open-source contributions.",
    highlight: true,
    tags: ["Repository Management", "Collaboration", "Pull Requests", "Code Reviews"],
  },
  {
    name: "Git",
    category: "Developer Tools",
    level: "Core Engineering",
    description: "Distributed version control, branch management, merge conflict resolution, and commit integrity.",
    tags: ["Version Control", "Branching", "Merge Rebasing", "Commit Hygiene"],
  },
  {
    name: "Tailwind",
    category: "Frontend Development",
    level: "Active Production",
    description: "Utility-first design architecture, custom responsive layouts, dark mode orchestration, and JIT compilation.",
    highlight: true,
    tags: ["Utility Classes", "Responsive Breakpoints", "Dark Mode", "Custom Grids"],
  },
  {
    name: "Node.js",
    category: "Backend Development",
    level: "Core Engineering",
    description: "Event-driven asynchronous server runtime, Express.js microservices, npm ecosystem, and REST endpoint controllers.",
    highlight: true,
    tags: ["Async Runtime", "Express.js", "npm Ecosystem", "REST APIs"],
  },
  {
    name: "React",
    category: "Frontend Development",
    level: "Active Production",
    description: "Declarative UI engineering, custom hooks, state synchronization, component lifecycles, and virtual DOM reconciliation.",
    highlight: true,
    tags: ["Component Architecture", "Hooks", "Virtual DOM", "State Management"],
  },
  {
    name: "Next.js",
    category: "Frontend Development",
    level: "Active Production",
    description: "Hybrid server and client rendering, App Router paradigms, static site generation, and server action routing.",
    highlight: true,
    tags: ["App Router", "SSR / SSG", "Server Actions", "Edge Middleware"],
  },
  {
    name: "Python",
    category: "Programming Languages",
    level: "Core Engineering",
    description: "Algorithmic logic, data manipulation, object-oriented systems, OpenCV computer vision, and AI model orchestration.",
    highlight: true,
    tags: ["Variables & Types", "OOP Architecture", "Data Structures", "OpenCV / AI", "FastAPI"],
  },
  {
    name: "JavaScript",
    category: "Programming Languages",
    level: "Core Engineering",
    description: "Modern ES6+ syntax, asynchronous promises, event loops, DOM engineering, and cross-platform application logic.",
    highlight: true,
    tags: ["ES6+ Syntax", "Async/Await", "Event Loop", "DOM Scripting", "REST Fetch"],
  },
  {
    name: "TypeScript",
    category: "Programming Languages",
    level: "Active Production",
    description: "Compile-time type verification, custom interfaces, utility generics, union typing, and enterprise type safety.",
    highlight: true,
    tags: ["Static Typing", "Interfaces & Types", "Generics", "Type Narrowing"],
  },
  {
    name: "CSS3",
    category: "Frontend Development",
    level: "Active Production",
    description: "Modern CSS3 styling, Flexbox layouts, CSS Grid architectures, keyframe animations, and cross-device media queries.",
    tags: ["Flexbox", "CSS Grid", "Keyframe Animations", "Responsive Media"],
  },
  {
    name: "HTML5",
    category: "Frontend Development",
    level: "Core Engineering",
    description: "Semantic document markup, accessibility standards (a11y), canvas graphics, audio/video APIs, and web forms.",
    tags: ["Semantic HTML", "Accessibility (a11y)", "Canvas APIs", "Forms & Audio"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "prog",
    name: "Programming Languages",
    code: "01 // CORE RUNTIME",
    description: "Core programming languages for algorithmic systems, machine learning models, and application logic.",
    skills: [
      {
        name: "Python",
        category: "Programming Languages",
        level: "Core Engineering",
        description: "Variables, Data Types, Functions, OOP, Data Structures, Exception Handling, File Handling.",
        highlight: true,
        tags: ["Variables", "Data Types", "Functions", "OOP", "Data Structures", "Exception Handling", "File Handling"],
      },
      {
        name: "Java",
        category: "Programming Languages",
        level: "Core Engineering",
        description: "OOP, Classes, Objects, Inheritance, Polymorphism, Interfaces, Collections, Exception Handling.",
        tags: ["OOP", "Classes & Objects", "Inheritance", "Polymorphism", "Interfaces", "Collections", "Exception Handling"],
      },
      {
        name: "C",
        category: "Programming Languages",
        level: "Foundational",
        description: "Pointers, Arrays, Functions, Structures, Memory Management, File Handling.",
        tags: ["Pointers", "Arrays", "Functions", "Structures", "Memory Management", "File Handling"],
      },
    ],
  },
  {
    id: "fe",
    name: "Frontend Development",
    code: "02 // CLIENT SURFACE",
    description: "Semantic webpage structure, responsive CSS layout systems, interactive DOM manipulation, and modern reactive frameworks.",
    skills: [
      {
        name: "HTML",
        category: "Frontend Development",
        level: "Core Engineering",
        description: "Webpage Structure, Semantic Elements, Forms, Tables and Media.",
        tags: ["Webpage Structure", "Semantic Elements", "Forms", "Tables", "Media"],
      },
      {
        name: "CSS",
        category: "Frontend Development",
        level: "Active Production",
        description: "Styling, Flexbox, Grid, Animations, Responsive Design and Media Queries.",
        tags: ["Styling", "Flexbox", "Grid", "Animations", "Responsive Design", "Media Queries"],
      },
      {
        name: "JavaScript",
        category: "Frontend Development",
        level: "Core Engineering",
        description: "Variables, Functions, DOM Manipulation, Events, ES6, Promises, Async/Await and API Integration.",
        highlight: true,
        tags: ["Variables", "Functions", "DOM Manipulation", "Events", "ES6", "Promises", "Async/Await", "API Integration"],
      },
      {
        name: "React",
        category: "Frontend Development",
        level: "Active Production",
        description: "Component Architecture, Hooks, State Management, Virtual DOM Reconciliation, and Single-Page Applications.",
        highlight: true,
        tags: ["Components", "Hooks", "Virtual DOM", "SPA", "State Management"],
      },
      {
        name: "Vite",
        category: "Frontend Development",
        level: "Active Production",
        description: "Modern Frontend Tooling, Lightning-Fast HMR, ES Modules Development Server, and Production Asset Bundling.",
        tags: ["Fast HMR", "ES Modules", "Asset Bundling", "Build Tooling"],
      },
    ],
  },
  {
    id: "be",
    name: "Backend Development",
    code: "03 // SERVICE LAYER",
    description: "High-performance REST API services, route dispatching, request validation, authentication, and server runtimes.",
    skills: [
      {
        name: "FastAPI",
        category: "Backend Development",
        level: "Active Production",
        description: "REST APIs, Routing, HTTP Methods, Request Validation, Authentication, Middleware and Swagger Documentation.",
        highlight: true,
        tags: ["REST APIs", "Routing", "HTTP Methods", "Request Validation", "Authentication", "Middleware", "Swagger"],
      },
      {
        name: "Node.js (Basic)",
        category: "Backend Development",
        level: "Foundational",
        description: "Runtime Environment, Modules, npm, Express.js Basics, Routing and API Development.",
        tags: ["Runtime Environment", "Modules", "npm", "Express.js Basics", "Routing", "API Development"],
      },
    ],
  },
  {
    id: "db",
    name: "Database Technologies",
    code: "04 // PERSISTENCE",
    description: "Relational database design, query composition, transactions, data integrity, normalization, and ACID architecture.",
    skills: [
      {
        name: "MySQL",
        category: "Database Technologies",
        level: "Active Production",
        description: "SQL Queries, Tables, Joins, Constraints, Indexes and Relationships.",
        highlight: true,
        tags: ["SQL Queries", "Tables", "Joins", "Constraints", "Indexes", "Relationships"],
      },
      {
        name: "PostgreSQL",
        category: "Database Technologies",
        level: "Active Production",
        description: "Database Design, Joins, Transactions, Indexing, JSONB and Database Management.",
        tags: ["Database Design", "Joins", "Transactions", "Indexing", "JSONB", "Database Management"],
      },
      {
        name: "SQL",
        category: "Database Technologies",
        level: "Core Engineering",
        description: "CRUD Operations, Joins, Subqueries, Group By, Order By and Aggregate Functions.",
        highlight: true,
        tags: ["CRUD Operations", "Joins", "Subqueries", "Group By", "Order By", "Aggregate Functions"],
      },
      {
        name: "DBMS",
        category: "Database Technologies",
        level: "Core Engineering",
        description: "Normalization, ER Diagrams, Keys, Transactions, ACID Properties and Database Architecture.",
        tags: ["Normalization", "ER Diagrams", "Keys", "Transactions", "ACID Properties", "Database Architecture"],
      },
    ],
  },
  {
    id: "app",
    name: "App Development",
    code: "05 // MOBILE CLIENT",
    description: "Cross-platform mobile client engineering, reactive widget trees, layouts, and responsive device UI.",
    skills: [
      {
        name: "Flutter",
        category: "App Development",
        level: "Active Production",
        description: "Dart Basics, Widgets, Stateful and Stateless Widgets, UI Layouts, Navigation, API Integration and Responsive Design.",
        highlight: true,
        tags: ["Dart Basics", "Widgets", "Stateful & Stateless", "UI Layouts", "Navigation", "API Integration", "Responsive Design"],
      },
    ],
  },
  {
    id: "tools",
    name: "Developer Tools",
    code: "06 // TOOLCHAIN",
    description: "Version control, collaboration platforms, code editors, API diagnostics, documentation, and containerization.",
    skills: [
      {
        name: "Git",
        category: "Developer Tools",
        level: "Core Engineering",
        description: "Version Control and Code Management.",
        tags: ["Version Control", "Code Management", "Branching", "Commit Hygiene"],
      },
      {
        name: "GitHub",
        category: "Developer Tools",
        level: "Core Engineering",
        description: "Repository Management and Collaboration.",
        highlight: true,
        tags: ["Repository Management", "Collaboration", "Pull Requests", "Code Reviews"],
      },
      {
        name: "VS Code",
        category: "Developer Tools",
        level: "Core Engineering",
        description: "Development Environment.",
        tags: ["Development Environment", "Extensions", "Workspace Tuning", "Debugging"],
      },
      {
        name: "Postman",
        category: "Developer Tools",
        level: "Active Production",
        description: "API Testing.",
        tags: ["API Testing", "Request Collections", "Endpoint Verification", "Payload Inspection"],
      },
      {
        name: "Swagger",
        category: "Developer Tools",
        level: "Active Production",
        description: "API Documentation.",
        tags: ["API Documentation", "OpenAPI Specification", "Interactive Testing", "Schema Generation"],
      },
      {
        name: "Docker",
        category: "Developer Tools",
        level: "Foundational",
        description: "Containerization Basics.",
        tags: ["Containerization Basics", "Images", "Containers", "Environment Isolation"],
      },
    ],
  },
  {
    id: "additional",
    name: "Additional Skills",
    code: "07 // DISCIPLINES",
    description: "Full-stack software engineering practices, user experience design, AI tool integrations, and analytical problem-solving.",
    skills: [
      {
        name: "Full-Stack Development",
        category: "Additional Skills",
        level: "Active Production",
        description: "Connecting intuitive client surfaces with scalable backend services and structured relational persistence.",
        highlight: true,
        tags: ["Frontend & Backend", "Full-Stack Architecture", "End-to-End Delivery"],
      },
      {
        name: "REST API Integration",
        category: "Additional Skills",
        level: "Core Engineering",
        description: "Orchestrating external web services, HTTP client pipelines, and microservice communication.",
        tags: ["REST Endpoints", "Data Mapping", "Authentication", "Error Handling"],
      },
      {
        name: "UI/UX Design",
        category: "Additional Skills",
        level: "Active Production",
        description: "Crafting clean visual hierarchies, wireframes, accessible typography, and intuitive user experiences.",
        tags: ["User Experience", "Visual Hierarchy", "Wireframing", "Interaction Design"],
      },
      {
        name: "Database Management",
        category: "Additional Skills",
        level: "Core Engineering",
        description: "Schema administration, data integrity preservation, constraints, and query optimization.",
        tags: ["Schema Administration", "Integrity Constraints", "Indexing", "Query Tuning"],
      },
      {
        name: "AI Tool Integration",
        category: "Additional Skills",
        level: "Advanced Architecture",
        description: "Incorporating modern AI models, agentic workflows, prompt engineering, and LLM APIs into production applications.",
        highlight: true,
        tags: ["Agentic Workflows", "LLM APIs", "Vibe Coding", "Prompt Engineering"],
      },
      {
        name: "Problem Solving",
        category: "Additional Skills",
        level: "Core Engineering",
        description: "Algorithmic thinking, root cause debugging, logical decomposition, and pragmatic software engineering.",
        tags: ["Algorithmic Thinking", "Root Cause Analysis", "Logical Decomposition", "Optimization"],
      },
      {
        name: "Responsive Web Design",
        category: "Additional Skills",
        level: "Active Production",
        description: "Cross-device layout scaling, fluid grid systems, adaptive media queries, and touch-first usability.",
        tags: ["Fluid Grids", "Media Queries", "Mobile First", "Cross-Device UX"],
      },
    ],
  },
];

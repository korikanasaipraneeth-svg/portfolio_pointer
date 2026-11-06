export interface ArchitectureNode {
  id: string;
  label: string;
  type: "client" | "service" | "engine" | "database" | "external";
  subtext: string;
}

export interface ArchitectureFlow {
  id: string;
  title: string;
  badge: string;
  summary: string;
  description?: string;
  verifiedSource: string;
  nodes: ArchitectureNode[];
  steps: { step: number; title: string; detail: string }[];
  keyHighlights: string[];
}

export const ARCHITECTURE_FLOWS: ArchitectureFlow[] = [
  {
    id: "agrisahay",
    title: "Multimodal AI Agricultural Diagnostic Pipeline",
    badge: "SYS-ARCH // 01 — COMPUTER VISION & GEMINI",
    summary: "Asynchronous computer vision inference coupled with Gemini Multimodal LLM reasoning for smallholder farming diagnosis.",
    verifiedSource: "Verified implementation in repository: project-kissan (AgriSahay AI)",
    nodes: [
      { id: "cam", label: "Mobile Camera Capture", type: "client", subtext: "Offline-resilient image stream" },
      { id: "cv", label: "OpenCV Preprocessing & Flask API", type: "service", subtext: "Bilinear scaling & normalization" },
      { id: "cnn", label: "Neural Disease Classifier", type: "engine", subtext: "Fast lesion feature segmentation" },
      { id: "gemini", label: "Google Gemini Multimodal API", type: "external", subtext: "Vernacular explanation & dosage" },
      { id: "market", label: "Regional Pricing & Weather DB", type: "database", subtext: "Localized agronomy telemetry" },
    ],
    steps: [
      { step: 1, title: "Edge Image Ingestion", detail: "Farmer captures crop pathology image via responsive mobile web UI with client-side canvas compression." },
      { step: 2, title: "Feature Extraction & Inference", detail: "Flask backend passes normalized image through computer vision classifier, detecting crop pathogen symptoms." },
      { step: 3, title: "Multimodal Reasoning & Synthesis", detail: "Gemini API ingests visual lesion cues and generates structured, localized advisory in the farmer's preferred dialect." },
      { step: 4, title: "Telemetry Dispatch", detail: "Combines diagnostic prognosis with localized agricultural market rates and weather alert forecasts." },
    ],
    keyHighlights: [
      "Sub-400ms inference turnaround for field conditions",
      "Multilingual translation for non-English farming communities",
      "Decoupled microservice architecture ensuring high availability",
    ],
  },
  {
    id: "student360",
    title: "STUDENT360 Tri-Portal Verification & Recruitment Mesh",
    badge: "SYS-ARCH // 02 — ENTERPRISE SAAS & RBAC",
    summary: "Multi-tenant verification pipeline where academic accomplishments receive faculty cryptographic validation prior to recruiter exposure.",
    verifiedSource: "Verified implementation in repository: student-portfolio (STUDENT360)",
    nodes: [
      { id: "student", label: "Student Portal (Next.js)", type: "client", subtext: "Artifact & milestone submission" },
      { id: "rbac", label: "RBAC Authentication Gateway", type: "service", subtext: "Role verification & JWT session" },
      { id: "faculty", label: "Faculty Validator Node", type: "service", subtext: "Academic credential endorsement" },
      { id: "kanban", label: "Recruiter Kanban Pipeline", type: "engine", subtext: "Interactive candidate tracking" },
      { id: "db", label: "Relational Ledger Database", type: "database", subtext: "Audit-proof achievement records" },
    ],
    steps: [
      { step: 1, title: "Milestone Submission", detail: "Student submits project repository, documentation, and live demo artifacts through the authenticated student dashboard." },
      { step: 2, title: "Faculty Endorsement", detail: "Assigned faculty evaluator inspects code authenticity, issues grade validation, and cryptographically stamps the record." },
      { step: 3, title: "Recruiter Headhunting", detail: "Corporate recruiters query pre-verified talent pools and manage candidates across an interactive Kanban hiring board." },
      { step: 4, title: "Persistence & Audit", detail: "All endorsements and state transitions are stored in a normalized relational database ensuring data integrity." },
    ],
    keyHighlights: [
      "Zero unverified resume claims through mandatory faculty sign-off",
      "Real-time drag-and-drop recruitment pipeline status sync",
      "Role-based security boundaries isolating candidate, validator, and recruiter contexts",
    ],
  },
  {
    id: "guardian",
    title: "Guardian AI Emergency Geospatial Telemetry Mesh",
    badge: "SYS-ARCH // 03 — SPATIAL DISPATCH & TRIAGE",
    summary: "Real-time emergency broadcast system that computes Haversine spatial proximities to identify nearest trauma units under distress.",
    verifiedSource: "Verified implementation in repository: guardian-ai (Guardian AI)",
    nodes: [
      { id: "app", label: "Flutter Mobile SOS Trigger", type: "client", subtext: "Instant GPS coordinate extraction" },
      { id: "fastapi", label: "Python Geospatial Gateway", type: "service", subtext: "Asynchronous emergency pipeline" },
      { id: "haversine", label: "Haversine Distance Engine", type: "engine", subtext: "Top-K closest hospital calculation" },
      { id: "broadcast", label: "Emergency Contact Relay", type: "service", subtext: "Automated SMS/Webhook alert" },
      { id: "sqldb", label: "Hospital Registry (MySQL)", type: "database", subtext: "Geo-indexed trauma facilities" },
    ],
    steps: [
      { step: 1, title: "One-Touch SOS Broadcast", detail: "User initiates SOS via mobile hardware trigger or Flutter UI button, locking precise latitude and longitude." },
      { step: 2, title: "Geospatial Indexing", detail: "Python backend queries MySQL geo-indexed hospital registry and calculates spherical distance using the Haversine equation." },
      { step: 3, title: "Emergency Route Dispatch", detail: "Generates optimal navigational links to the 3 nearest accredited facilities and broadcasts incident telemetry to emergency contacts." },
      { step: 4, title: "Continuous Live Tracking", detail: "Establishes a battery-conscious beacon channel periodically updating coordinates until emergency status resolves." },
    ],
    keyHighlights: [
      "Instantaneous single-tap trigger minimizes life-critical latency",
      "Mathematical spherical distance calculation requires zero external paid routing dependencies",
      "Persistent audit trail for paramedic and emergency personnel coordination",
    ],
  },
  {
    id: "autonomous-agents",
    title: "Autonomous Multi-Agent Collaborative Development Engine",
    badge: "SYS-ARCH // 04 — AGENTIC WORKFLOW & DAG",
    summary: "Concurrent specialized agent swarm executing topological task graphs with sandboxed visual preview compilation.",
    verifiedSource: "Architectural implementation in Autonomous Development Environment (PRANEETH.AI)",
    nodes: [
      { id: "orchestrator", label: "NOVA DAG Orchestrator", type: "engine", subtext: "Prompt parsing & task dispatch" },
      { id: "architect", label: "ATLAS & PIXEL Sub-Swarm", type: "service", subtext: "System schema & token definition" },
      { id: "engineers", label: "FORGE & API Synthesizers", type: "service", subtext: "Full-stack code generation" },
      { id: "sandbox", label: "Sandboxed Preview Worker", type: "client", subtext: "Isolated iframe execution" },
      { id: "reviewers", label: "SENTINEL & DEBUG Watchdogs", type: "engine", subtext: "Static analysis & type verification" },
    ],
    steps: [
      { step: 1, title: "Prompt Decomposition", detail: "NOVA ingests natural language project requirements and compiles an execution graph specifying order and dependencies." },
      { step: 2, title: "Design & Schema Synthesis", detail: "ATLAS generates TypeScript data interfaces while PIXEL generates design tokens matching the requested theme." },
      { step: 3, title: "Parallel Component Assembly", detail: "FORGE synthesizes React components while API synthesizes endpoints and mock data adapters concurrently." },
      { step: 4, title: "Sandboxed Verification", detail: "Generated code is compiled into a sandboxed preview frame where SENTINEL enforces CSP rules and DEBUG runs type checks." },
    ],
    keyHighlights: [
      "Dual operational modes: deterministic local simulation vs. live AI provider execution",
      "Zero arbitrary eval execution: all previews render within isolated sandboxes",
      "Explicit verification gates before code release",
    ],
  },
];

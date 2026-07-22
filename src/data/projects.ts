/* ────────────────────────────────────────────────────────────────────────────
   Single source of truth for site content: AI product portfolio, enterprise
   program highlights, work experience, education, and skills.
   All facts here mirror Noopur's resume/brief — do not add metrics or claims
   that aren't in the source material.
   ──────────────────────────────────────────────────────────────────────────── */

/* ─── AI & digital product portfolio ────────────────────────────────────── */

export type ProductStatus =
  | 'Active development'
  | 'Active research'
  | 'Architecture stage'
  | 'Active venture'
  | 'Requirements & architecture'
  | 'Concept stage'

export interface AiProduct {
  id: string
  name: string
  descriptor: string
  role: string
  status: ProductStatus
  oneLiner: string
  highlights: string[]
  domain: string
  featured?: boolean
}

export const aiProducts: AiProduct[] = [
  {
    id: 'adaptiq',
    name: 'AdaptIQ',
    descriptor: 'AI Verification & Model-Improvement Layer',
    role: 'Product Architect & Research Lead',
    status: 'Active development',
    domain: 'Model verification',
    oneLiner:
      'A proprietary verification layer that raises the reliability, factual faithfulness, policy alignment, and domain readiness of AI agents and LLMs.',
    highlights: [
      'Defined the evaluation architecture, verification gates, contamination controls, and commercialization strategy',
      'Improved the finance evaluation track from ~52% contamination to 17%, while raising faithfulness from ~0.75 to 0.91',
      'Nine verification passes across a ten-case evaluation cycle',
      'Hands-on with local LLMs, LoRA fine-tuning, judge frameworks, and human-reviewed gold data',
    ],
    featured: true,
  },
  {
    id: 'kestra-dml',
    name: 'Kestra DML',
    descriptor: 'Decision Management & Governance Layer',
    role: 'Product Architect & Research Lead',
    status: 'Active research',
    domain: 'Decision governance',
    oneLiner:
      'Determines how an AI application should respond before it generates an answer — weighing risk, reversibility, uncertainty, verification needs, and the safeguards a response deserves.',
    highlights: [
      'Designed the decision-metadata schema and policy architecture',
      '100% exact-match and 100% danger recall on the initial clean evaluation set',
      'Designed a 1,000-example corpus strategy with human-review queues and gold-data specifications',
      'Positioned as the decision-governance counterpart to AdaptIQ',
    ],
    featured: true,
  },
  {
    id: 'orchestration-layer',
    name: 'Proprietary Intelligence Layer',
    descriptor: 'AI Orchestration & Shared Intelligence Architecture',
    role: 'Product Architect',
    status: 'Architecture stage',
    domain: 'AI orchestration',
    oneLiner:
      'A reusable intelligence layer designed to power multiple AI applications from one architecture — orchestration, memory, context, routing, and persistent execution.',
    highlights: [
      'Agent orchestrator, skill registry, memory graph, context service, model router, scheduler, and RAG designed as shared services',
      'Persistent execution records built into the architecture from the start',
      'A universal capability-invocation structure that lets skills evolve into independent agents',
    ],
  },
  {
    id: 'artha',
    name: 'Artha',
    descriptor: 'Local-First Intelligent Work Platform',
    role: 'Product Architect & Strategist',
    status: 'Active development',
    domain: 'Intelligent work',
    oneLiner:
      'A local-first AI work environment for intelligent assistance, task execution, memory, and automation — built for privacy-conscious operation.',
    highlights: [
      'Local-first architecture with privacy-conscious operations as a founding constraint',
      'Delegate: an asynchronous, resumable task-execution capability at the platform’s core',
    ],
  },
  {
    id: 'trinity-talent',
    name: 'Trinity Talent',
    descriptor: 'AI Career Intelligence Platform',
    role: 'Product Strategist & Platform Architect',
    status: 'Active development',
    domain: 'Career intelligence',
    oneLiner:
      'An AI-powered career, resume, interview-preparation, coaching, and opportunity-alignment platform built on three pillars connecting talent, preparation, and opportunity.',
    highlights: [
      'A next-generation interview-response framework that goes beyond STAR',
      'A full business-administration portal alongside the candidate experience',
      'Explorations of live animated recruiter and interviewer avatars',
    ],
  },
  {
    id: 'creationx',
    name: 'CreationX',
    descriptor: 'Venture — Product Vision & Commercialization',
    role: 'Co-Founder',
    status: 'Active venture',
    domain: 'Venture building',
    oneLiner:
      'An independent venture where I contribute product vision, strategic planning, business requirements, roadmap, market positioning, and commercialization.',
    highlights: [
      'Transform the core concept into user journeys, workflows, capabilities, and phased implementation plans',
      'Own the business-requirements and roadmap layer end to end',
    ],
  },
  {
    id: 'owlnest',
    name: 'OwlNest',
    descriptor: 'AI Agent Marketplace & Development Ecosystem',
    role: 'Product Architect & Strategist',
    status: 'Requirements & architecture',
    domain: 'Agent marketplace',
    oneLiner:
      'A multi-tenant ecosystem to create, configure, deploy, buy, sell, rent, and manage AI agents.',
    highlights: [
      'Phased requirements from authentication and tenant workspaces through the full marketplace',
      'Workflow automation with human approvals designed into the platform',
      'Subscriptions, seller tools, and marketplace governance scoped as first-class capabilities',
    ],
  },
  {
    id: 'askmadhav',
    name: 'AskMadhav',
    descriptor: 'Interactive Spiritual Knowledge Experience',
    role: 'Creative Product Strategist',
    status: 'Concept stage',
    domain: 'Cultural & creative AI',
    oneLiner:
      'An interactive spiritual AI experience inspired by Krishna and Hindu philosophical teachings.',
    highlights: [
      'Animated 3D avatar explorations for an immersive learning experience',
      'Defined safeguards separating spiritual education from unsupported religious authority',
    ],
  },
]

/* ─── Enterprise program highlights ─────────────────────────────────────── */

export interface EnterpriseProgram {
  id: string
  title: string
  org: string
  period: string
  summary: string
  tags: string[]
}

export const enterprisePrograms: EnterpriseProgram[] = [
  {
    id: 'mtu-m365',
    title: 'Enterprise Data Migration & Microsoft 365 Modernization',
    org: 'MTU Maintenance Canada',
    period: 'Apr 2023 – Present',
    summary:
      'Led the Canadian workstream of a global enterprise data migration and Microsoft 365 modernization program — SharePoint Online, Teams, OneDrive, and Azure-aligned services — end to end: discovery, migration and cutover planning, pilots, validation, and stabilization, with documented performance gains. Established governance for metadata, classification, retention, permissions, auditability, and controlled-goods / export-compliance handling.',
    tags: ['Microsoft 365', 'SharePoint Online', 'Azure', 'Data Migration', 'Governance'],
  },
  {
    id: 'mtu-lms',
    title: 'Enterprise LMS Replacement',
    org: 'MTU Maintenance Canada',
    period: 'Apr 2023 – Present',
    summary:
      'Led requirements for an enterprise learning-management-system replacement — 160+ documented requirements spanning business, compliance, and technical needs.',
    tags: ['Requirements Definition', 'Stakeholder Engagement'],
  },
  {
    id: 'mtu-rpa',
    title: 'Canadian RPA Capability',
    org: 'MTU Maintenance Canada',
    period: 'Apr 2023 – Present',
    summary:
      'Helped establish the Canadian robotic-process-automation capability on UiPath — from candidate processes to a working automation practice.',
    tags: ['RPA', 'UiPath', 'Process Improvement'],
  },
  {
    id: 'mtu-access-modernization',
    title: 'Legacy Application Modernization',
    org: 'MTU Maintenance Canada',
    period: 'Apr 2023 – Present',
    summary:
      'Drive modernization of legacy Microsoft Access applications toward web-based, Kubernetes/AKS-aligned solutions.',
    tags: ['Application Modernization', 'Kubernetes / AKS'],
  },
  {
    id: 'mtu-sap',
    title: 'SAP Finance, Banking & Access Initiatives',
    org: 'MTU Maintenance Canada',
    period: 'Apr 2023 – Present',
    summary:
      'Coordinate SAP finance, banking, and access requirements globally across the MTU network.',
    tags: ['SAP', 'Finance', 'Global Coordination'],
  },
  {
    id: 'bchydro-sap',
    title: 'SAP EAM & CCS Business Delivery',
    org: 'BC Hydro',
    period: 'Oct 2022 – Oct 2023',
    summary:
      'Supported SAP EAM and CCS operations — requirements, data migration, interfaces, reporting dependencies, and issue resolution. Developed test strategies, traceability, and acceptance criteria, and standardized requirements and governance practices.',
    tags: ['SAP EAM', 'SAP CCS', 'Test Strategy', 'Governance'],
  },
]

/* ─── Work experience timeline (resume-aligned; titles & dates exact) ───── */

export interface Role {
  title: string
  org: string
  period: string
  location?: string
  summary: string
  highlights?: string[]
}

export const workExperience: Role[] = [
  {
    title: 'Business Analyst & Project Lead',
    org: 'MTU Maintenance Canada',
    location: 'Richmond, BC',
    period: 'Apr 2023 – Present',
    summary:
      'Lead business analysis and project delivery for enterprise modernization in a global aerospace MRO environment, managing multiple concurrent high-visibility initiatives.',
    highlights: [
      'Led the Canadian workstream of a global enterprise data migration and Microsoft 365 modernization program end to end — discovery through stabilization — with documented performance gains',
      'Established governance for metadata, classification, retention, permissions, auditability, and controlled-goods / export-compliance handling',
      'Led requirements for an enterprise LMS replacement — 160+ documented requirements',
      'Helped establish the Canadian RPA capability on UiPath',
      'Drive modernization of legacy Microsoft Access applications toward web-based, Kubernetes/AKS-aligned solutions',
      'Coordinate SAP finance, banking, and access requirements globally; manage the IT operational budget (Cplace)',
      'Built KPI frameworks, dashboards, and adoption metrics for executive decision-making',
    ],
  },
  {
    title: 'SAP Business Decision Analyst (Consultant)',
    org: 'BC Hydro',
    location: 'British Columbia',
    period: 'Oct 2022 – Oct 2023',
    summary:
      'Translated complex business, operational, financial, and technology needs into structured requirements, governance artifacts, and implementation recommendations for a major Crown utility.',
    highlights: [
      'Supported SAP EAM and CCS operations — requirements, data migration, interfaces, reporting dependencies, issue resolution',
      'Developed test strategies, traceability, and acceptance criteria',
      'Standardized requirements and governance practices',
      'Improved reporting visibility with advanced Excel, Access, ServiceNow, and Jira',
    ],
  },
  {
    title: 'Business Intelligence Developer (Consultant)',
    org: 'Bell Canada / Bell Media',
    period: 'Nov 2021 – Apr 2023',
    summary:
      'Built and maintained BI infrastructure, ETL workflows, and management reporting for a Bell Media marketplace serving vendors, contractors, and internal stakeholders.',
    highlights: [
      'Engineered ETL and reporting workflows in Pentaho, CTools, SQL, and MySQL',
      'Unified cross-domain data into executive dashboards, trend analysis, and forecasting',
      'Trained business users in self-service analytics',
    ],
  },
  {
    title: 'Systems Integration Specialist',
    org: 'NRI Distribution',
    location: 'Calgary, AB',
    period: 'Aug 2021 – Feb 2023',
    summary:
      'Designed and maintained integrations between the company database and customer ERPs, with metadata documentation and cross-system mapping for audit compliance and reporting efficiency.',
  },
  {
    title: 'Quality Analyst',
    org: 'X360 Digital',
    location: 'Remote, Canada',
    period: 'Mar 2019 – Dec 2021',
    summary:
      'Built automated QA and data-reporting pipelines in SQL and Excel; executed 200+ functional and regression tests and visualized quality KPIs, reducing defect rates by 31%.',
  },
]

export const earlierRoles: Role[] = [
  {
    title: 'Planning & Cost Analyst / CDMS Administrator',
    org: 'Syncrude Canada Ltd.',
    period: 'Nov 2013 – Nov 2018',
    summary:
      'Progressively senior planning, cost-analysis, and document/data-management roles supporting major operations programs.',
  },
  {
    title: 'Project Coordinator',
    org: 'Opal Marketing Group',
    location: 'Vancouver, BC',
    period: 'Aug 2013 – Dec 2013',
    summary: 'Coordinated project delivery across the agency’s marketing engagements.',
  },
  {
    title: 'Technical Analyst',
    org: 'Acrodex (with Imperial Oil)',
    location: 'Fort McMurray, AB',
    period: 'Aug 2012 – Jul 2013',
    summary:
      'Early-career technical analyst role supporting Imperial Oil through Acrodex.',
  },
]

/* ─── Education & credentials ───────────────────────────────────────────── */

export const education = [
  {
    credential: 'BBA, Marketing',
    school: 'Thompson Rivers University · Kamloops, BC',
    period: '2013',
  },
]

/* ─── Skills ────────────────────────────────────────────────────────────── */

export const skills = {
  delivery: [
    'Business Analysis', 'Requirements Definition', 'Project & Program Delivery',
    'Process Improvement', 'Stakeholder Engagement', 'Change Management & Adoption',
    'Risk Management', 'IT Budget Planning', 'Vendor Coordination', 'Product Strategy',
  ],
  technology: [
    'Microsoft 365 / SharePoint / Azure', 'SAP (EAM, CCS, Finance)', 'Data Migration',
    'Power BI / Tableau / Pentaho', 'SQL', 'KPI & Governance Frameworks',
    'RPA (UiPath)', 'Application Modernization', 'QA & Test Strategy',
    'ServiceNow', 'Jira', 'LLM Evaluation & Fine-Tuning (LoRA)',
  ],
}

export type ProjectCategory =
  | 'Enterprise'
  | 'BSA'
  | 'Data & BI'
  | 'Integration'
  | 'Retail / POS'
  | 'Automation'
  | 'AI'
  | 'Founder'

export interface Project {
  id: string
  slug: string
  title: string
  client: string
  period: string
  tagline: string
  description: string
  category: ProjectCategory[]
  role: string
  tools: string[]
  problem: string
  approach: string
  execution: string
  outcome: string
  metrics?: string[]
  image?: string
  featured?: boolean
  kind: 'client' | 'side'
  accentColor?: string
}

export const projects: Project[] = [
  /* ─── Client / Enterprise case studies ─────────────────────────────────── */
  {
    id: '1',
    slug: 'bc-hydro-sap-decision-analyst',
    title: 'SAP Decision Analytics & Reporting Modernization',
    client: 'BC Hydro',
    period: 'Nov 2024 – Oct 2025',
    tagline: 'Translating cross-functional needs into reliable SAP delivery for a Crown utility.',
    description:
      'Embedded as SAP Business Decision Analyst on a regulated, multi-year enterprise program. Owned requirements, integration coordination, and reporting hygiene across SAP and adjacent SaaS systems for a 1,000+ employee organization.',
    category: ['Enterprise', 'BSA', 'Data & BI'],
    role: 'SAP Business Decision Analyst',
    tools: ['SAP', 'Agile / Scrum', 'ServiceNow', 'Jira', 'Confluence', 'Advanced Excel', 'Power BI'],
    problem:
      'Cross-functional teams needed dependable SAP operations, accurate financial reporting, and visibility into integration health — while running an enterprise change program with strict regulatory and audit obligations.',
    approach:
      'Mapped end-to-end business processes, translated complex needs into clear technical specifications, and aligned development, UX, and training teams behind a single shared definition of done. Established performance and exception dashboards as the operational source of truth.',
    execution:
      'Coordinated data migration and API-based interfaces between SAP and other SaaS applications. Authored test plans, ran issue triage with engineering, and built monitoring dashboards in Excel, ServiceNow and Jira. Drove backlog grooming and sprint demos inside the Agile delivery cadence.',
    outcome:
      'Delivered reliable SAP operations and accurate financial reporting, with fewer downstream defects and faster issue resolution. Cross-functional teams shipped against a stable, well-documented backlog.',
    metrics: [
      'Enterprise scale — 1,000+ employees served',
      'Reliable SAP + SaaS integration coordination',
      'Faster issue triage via dashboards',
      'Clean audit-ready specifications',
    ],
    featured: true,
    kind: 'client',
    accentColor: '#0f5d4a',
  },
  {
    id: '2',
    slug: 'mtu-microsoft365-modernization',
    title: 'Microsoft 365 & SharePoint Analytics Modernization',
    client: 'MTU Canada',
    period: 'Apr 2023 – Present',
    tagline: 'Standing up KPIs, governance and Tableau dashboards across a global aerospace organization.',
    description:
      'Leading the analytics workstream of a Microsoft 365 / SharePoint modernization inside a Scrum team. Defined KPIs and governance, then partnered with global cross-functional teams to model data and ship cross-department dashboards.',
    category: ['Enterprise', 'BSA', 'Data & BI'],
    role: 'Business Analyst & Project Manager',
    tools: ['Microsoft 365', 'SharePoint', 'Tableau', 'Power BI', 'Power Query', 'Jira', 'Confluence'],
    problem:
      'Departments were operating on inconsistent data and ad-hoc reporting. Modernization required not only migrating to M365 but also establishing the analytical layer, governance, and KPIs that would survive after the project ended.',
    approach:
      'Ran stakeholder interviews across departments to surface real reporting needs and define metadata, then converted those into analytical specifications. Designed governance and a KPI framework that gave each function a consistent reporting language.',
    execution:
      'Modeled and visualized performance data for advanced time intelligence and comparative reporting. Built Tableau dashboards for cross-department visibility. Drove sprint planning, backlog grooming and stakeholder demos as PM/BA.',
    outcome:
      'Enhanced data transparency across the business, gave leadership trustworthy comparative reporting, and put a durable governance and KPI foundation in place.',
    metrics: [
      'Cross-department KPI framework live',
      'Tableau dashboards in production',
      'Stakeholder-validated metadata model',
      'Scrum-aligned delivery cadence',
    ],
    featured: true,
    kind: 'client',
    accentColor: '#155e4f',
  },
  {
    id: '3',
    slug: 'bell-canada-bi-pentaho-pipelines',
    title: 'BI Infrastructure, ETL Pipelines & Executive Dashboards',
    client: 'Bell Canada',
    period: 'Nov 2022 – Nov 2024',
    tagline: 'Unifying data across domains to make decisions visibly faster.',
    description:
      'Owned BI infrastructure, ETL pipelines and analytical reporting using Pentaho and ctools. Combined raw data from multiple domains into unified dashboards and predictive reports for management.',
    category: ['Data & BI', 'Enterprise'],
    role: 'BI Developer',
    tools: ['Pentaho', 'ctools', 'SQL', 'ETL', 'Tableau', 'Power BI', 'Python'],
    problem:
      'Management lacked a unified, decision-ready view of performance. Data lived in different domains in different shapes, and reporting was reactive rather than predictive.',
    approach:
      'Built and maintained a consolidated BI layer with reusable ETL pipelines. Designed story-driven visualizations and executive dashboards so the narrative — not the spreadsheet — was the deliverable.',
    execution:
      'Engineered Pentaho/ctools pipelines, modeled domain data, ran trend analysis and forecasting on large datasets, and trained business users on data literacy and self-service analytics.',
    outcome:
      'Improved decision-making efficiency by ~30%. Trend and forecast analysis directly informed marketing and operational strategy, and business users were enabled to self-serve from the new BI layer.',
    metrics: [
      '30% lift in decision-making efficiency',
      'Unified multi-domain dashboards',
      'Forecasting models in production',
      'Business-user enablement & training',
    ],
    featured: true,
    kind: 'client',
    accentColor: '#1f5f8a',
  },
  {
    id: '4',
    slug: 'nri-pos-payment-integrations',
    title: 'POS, ERP & Payment Gateway Integrations',
    client: 'NRI Distributions',
    period: 'Aug 2021 – Feb 2023',
    tagline: 'Lead BA on the data-integration backbone connecting client retail systems.',
    description:
      'Led 2+ end-to-end data integration projects, connecting client ERPs and retail systems with the internal database via APIs and file transfers. Lead BA for a major POS integration spanning inventory, payments and e-commerce.',
    category: ['Integration', 'Retail / POS', 'BSA', 'Enterprise'],
    role: 'Systems Integration Specialist',
    tools: ['REST APIs', 'SFTP / File Transfers', 'POS Systems', 'Payment Gateways', 'ERP', 'SQL', 'Jira'],
    problem:
      'Client ERPs, point-of-sale systems and payment processors were exchanging data through brittle, undocumented paths, putting inventory accuracy, reconciliation and audit posture at risk.',
    approach:
      'Acted as the lead BA on the POS integration — mapping cross-functional data flows between the POS, inventory management and payment gateways. Analyzed functional flows in client SaaS apps (including e-commerce platforms) to design clean, auditable interfaces.',
    execution:
      'Defined technical specifications and detailed integration documentation for each project. Coordinated API and file-transfer contracts with client teams, and worked closely with engineering to validate end-to-end data exchange and reconciliation.',
    outcome:
      'Delivered seamless data exchange across multiple client integrations, with audit-ready documentation that supported reporting and compliance reviews.',
    metrics: [
      '2+ end-to-end integrations delivered',
      'POS · inventory · payments interconnected',
      'Audit-grade technical specifications',
      'Seamless e-commerce data exchange',
    ],
    featured: true,
    kind: 'client',
    accentColor: '#7c5f1f',
  },
  {
    id: '5',
    slug: 'x360-qa-data-pipelines',
    title: 'QA Automation & Product Quality Analytics',
    client: 'X360 Digital',
    period: 'Mar 2019 – Dec 2021',
    tagline: 'Built reporting around quality so release cycles stopped depending on heroics.',
    description:
      'Built and automated QA & data reporting pipelines with SQL and Excel, executed 200+ functional and regression tests, and made product-quality KPIs visible to the whole delivery team.',
    category: ['Data & BI', 'Automation', 'BSA'],
    role: 'Quality Analyst',
    tools: ['SQL', 'Excel', 'Regression Testing', 'KPI Reporting'],
    problem:
      'Product quality was being measured anecdotally, and defect rates were eating into release cycles. There was no shared visibility into what was actually breaking or how often.',
    approach:
      'Designed a lightweight reporting stack on SQL + Excel to capture defects, test outcomes and release-cycle metrics. Made the KPIs the artifact, not the spreadsheet.',
    execution:
      'Built and maintained QA reporting pipelines, executed 200+ functional and regression tests, and surfaced quality KPIs to engineering and product stakeholders for every release.',
    outcome:
      'Reduced defect rates by 31% and optimized release cycle time. Quality became a managed variable instead of a recurring fire.',
    metrics: [
      '31% reduction in defect rate',
      '200+ functional / regression tests',
      'Automated QA reporting pipeline',
      'Optimized release cycle time',
    ],
    featured: false,
    kind: 'client',
    accentColor: '#5a3a82',
  },

  /* ─── Side builds — founder ventures ──────────────────────────────────── */
  {
    id: '6',
    slug: 'trinitytalent-ai',
    title: 'TrinityTalent.ai — AI Hiring Intelligence Platform',
    client: 'TrinityTalent.ai',
    period: '2024 – Present',
    tagline: 'Semantic hiring intelligence that replaces keyword bingo.',
    description:
      'TrinityTalent.ai is an AI-native hiring platform: it analyzes resumes semantically, scores candidates against job descriptions with vector embeddings, and automates the pipeline from application through interview scheduling. Founded to fix the broken middle of hiring on both sides.',
    category: ['AI', 'Automation', 'Founder'],
    role: 'Founder',
    tools: ['OpenAI', 'Python', 'FastAPI', 'React', 'Pinecone', 'PostgreSQL', 'Tailwind CSS'],
    problem:
      'Companies reject ~75% of resumes before a human reads them — rigid keyword matching that misses strong candidates. Candidates get ghosted. Hiring managers drown in noise. The process is broken on both sides.',
    approach:
      'Built a semantic analysis engine that understands intent rather than keywords. Vector embeddings score candidates against role requirements holistically, with explainable rationale and integrated scheduling.',
    execution:
      'Full-stack product — React frontend with drag-and-drop resume parsing, FastAPI backend for AI processing, Pinecone vector store, Postgres for pipeline data. Workflow automation triggers emails, calendar links and Slack notifications at each stage.',
    outcome:
      'Reduced time-to-first-interview by 60% in pilots. Hiring managers spend their time only on candidates who fit; candidates get clear, actionable feedback instead of silence.',
    metrics: [
      '60% reduction in time-to-first-interview',
      '40% match-score accuracy improvement',
      '500+ beta users · 4.8/5 satisfaction',
      '70% less manual review time',
    ],
    featured: false,
    kind: 'side',
    accentColor: '#b88a2c',
  },
  {
    id: '7',
    slug: 'creationx-ai-agent-marketplace',
    title: 'CreationX — AI Agent Platform for Operators',
    client: 'CreationX',
    period: '2024 – Present',
    tagline: 'A productized layer over the AI work operators keep asking for.',
    description:
      'A platform where non-technical founders and operators plug in pre-built AI agents for sales, ops and growth — the productized layer on top of the bespoke AI systems we kept building one client at a time. Co-founded to make that pattern accessible.',
    category: ['Founder', 'AI', 'Automation'],
    role: 'Co-founder',
    tools: ['React', 'TypeScript', 'Supabase', 'OpenAI', 'Stripe', 'Vercel'],
    problem:
      'Operators see what AI can do but can’t hire a team to build it. Off-the-shelf tools are too generic; bespoke builds are too expensive. There is a missing middle layer.',
    approach:
      'Package the most-requested agent patterns into a small, opinionated catalog with sane defaults. Lower the activation energy from “hire a developer” to “turn it on and connect a few accounts.”',
    execution:
      'Designing the MVP, the agent catalog and the onboarding experience with a co-founding team. Drawing on patterns hardened across years of bespoke client and product work.',
    outcome:
      'Currently in build. Treating it like an enterprise rollout — clear specs, instrumented from day one, with a real user feedback loop.',
    metrics: [
      'MVP in active build',
      'Agent catalog scoped',
      'Productizing proven patterns',
    ],
    featured: false,
    kind: 'side',
    accentColor: '#0f5d4a',
  },
]

/* ─── Featured selection helpers ────────────────────────────────────────── */
export const clientProjects = projects.filter((p) => p.kind === 'client')
export const sideProjects   = projects.filter((p) => p.kind === 'side')

/* ─── Work experience timeline (resume-aligned) ─────────────────────────── */
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
    title: 'SAP Business Decision Analyst',
    org:   'BC Hydro',
    period:'Nov 2024 – Oct 2025',
    summary:
      'Drove SAP-centric IT delivery in a 1,000+ employee Crown utility — translating business needs into clear specifications, coordinating SAP/SaaS integrations and standing up monitoring dashboards.',
    highlights: [
      'Translated complex needs into technical specifications inside an Agile delivery cadence',
      'Coordinated data migration and API-based interfaces between SAP and other SaaS apps',
      'Built test plans and ran issue clarification with development, UX and training teams',
      'Streamlined reporting via Excel, ServiceNow and Jira dashboards',
    ],
  },
  {
    title: 'Business Analyst & Project Manager',
    org:   'MTU Canada',
    period:'Apr 2023 – Present',
    summary:
      'Leading analytics for a Microsoft 365 / SharePoint modernization. Defined KPIs, governance and Tableau dashboards. Partnered with global cross-functional teams on metadata, modeling and reporting.',
    highlights: [
      'Established KPIs, governance and Tableau dashboards across departments',
      'Translated business needs into analytical specifications for cross-department reporting',
      'Conducted stakeholder interviews to define metadata and reporting requirements',
      'Modeled and visualized performance data for advanced time intelligence',
    ],
  },
  {
    title: 'BI Developer',
    org:   'Bell Canada',
    period:'Nov 2022 – Nov 2024',
    summary:
      'Owned BI infrastructure, ETL pipelines and analytical reporting in Pentaho and ctools. Combined raw data from multiple domains into unified dashboards and predictive reports.',
    highlights: [
      'Built and maintained Pentaho/ctools ETL pipelines and reporting models',
      'Created story-driven visualizations and executive dashboards — ~30% decision-speed lift',
      'Ran trend analysis and forecasting on large datasets to inform strategy',
      'Trained business users on data literacy and self-service analytics',
    ],
  },
  {
    title: 'Systems Integration Specialist',
    org:   'NRI Distributions',
    period:'Aug 2021 – Feb 2023',
    summary:
      'Led 2+ end-to-end data integration projects connecting client ERPs and retail systems with the internal database via APIs and file transfers. Lead BA on a major POS integration.',
    highlights: [
      'Lead BA on POS integration spanning inventory and payment gateways',
      'Mapped cross-functional flows across POS, ERP and e-commerce SaaS apps',
      'Authored detailed technical specifications for every integration',
      'Supported audit compliance and reporting efficiency through documentation',
    ],
  },
  {
    title: 'Quality Analyst',
    org:   'X360 Digital',
    period:'Mar 2019 – Dec 2021',
    summary:
      'Built and automated QA and data reporting pipelines with SQL + Excel. Executed 200+ functional and regression tests and made product-quality KPIs visible to engineering and product.',
    highlights: [
      'Reduced defect rates by 31%',
      'Optimized release cycle time through quality KPI visibility',
      'Automated QA reporting pipelines using SQL and Excel',
    ],
  },
  {
    title: 'Planning & Cost Analyst · Sr Admin · CDMS Admin',
    org:   'Syncrude Canada Ltd',
    period:'Nov 2013 – Nov 2018',
    summary:
      'Held progressively senior planning, cost analysis and document/data management roles supporting major capital and operations programs at a large industrial operator.',
  },
  {
    title: 'Project Coordinator',
    org:   'Opal Marketing Group',
    period:'Aug 2013 – Dec 2013',
    summary:
      'Coordinated project delivery and client-facing operations across the agency’s marketing engagements.',
  },
  {
    title: 'Technical Analyst',
    org:   'Acrodex (Imperial Oil)',
    period:'Aug 2012 – Jul 2013',
    summary:
      'Early-career technical analyst role supporting Imperial Oil through Acrodex — building the operational and analytical foundations carried into every role since.',
  },
]

export const education = [
  {
    credential: 'BBA, Marketing',
    school:     'Thompson Rivers University',
    period:     '2009 – 2013',
  },
]

/* ─── Capability matrix ────────────────────────────────────────────────── */
export const skills = {
  delivery: [
    'Business Analysis', 'Requirements Engineering', 'Technical Specifications',
    'Agile / Scrum', 'Stakeholder Management', 'User Story Creation',
    'Process Mapping', 'Change Management', 'Risk Management',
  ],
  data: [
    'SQL', 'Power BI', 'Tableau', 'Power Query', 'Advanced Excel',
    'Pentaho / ctools', 'ETL Pipelines', 'Data Modelling', 'Azure Data Services',
  ],
  systems: [
    'SAP', 'Microsoft 365', 'SharePoint', 'ServiceNow', 'Jira', 'Confluence',
    'POS Systems', 'Payment Gateways', 'ERP Integration', 'REST APIs',
  ],
  ai: [
    'GPT-4 / OpenAI API', 'Vector Embeddings', 'Pinecone',
    'Zapier · Make.com', 'AI Workflow Design', 'Python', 'CI/CD',
  ],
}

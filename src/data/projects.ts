export interface Project {
  id: string
  slug: string
  title: string
  description: string
  category: ('AI' | 'BA' | 'Automation' | 'Startup' | 'Data')[]
  role: string
  tools: string[]
  problem: string
  approach: string
  execution: string
  outcome: string
  metrics?: string[]
  image?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'ai-powered-resume-analyzer',
    title: 'AI-Powered Resume Analyzer',
    description: 'An intelligent platform that optimizes resumes for ATS compatibility using LLMs.',
    category: ['AI', 'Automation', 'Startup'],
    role: 'Lead Product Builder',
    tools: ['React', 'Python', 'FastAPI', 'OpenAI', 'Tailwind CSS'],
    problem: 'Job seekers struggle to understand why their resumes are rejected by automated systems (ATS).',
    approach: 'Developed a semantic analysis engine that compares resumes against job descriptions using vector embeddings.',
    execution: 'Built a responsive frontend for resume uploading and a robust backend for AI processing and feedback generation.',
    outcome: 'Helping users achieve 40% higher match scores on average.',
    metrics: ['500+ active users', '4.8/5 user rating', 'Reduced manual review time by 70%'],
    featured: true
  },
  {
    id: '2',
    slug: 'ecommerce-automation-workflow',
    title: 'E-commerce Operations Automation',
    description: 'Streamlining order fulfillment and inventory management for a growing D2C brand.',
    category: ['BA', 'Automation'],
    role: 'Business Analyst',
    tools: ['Zapier', 'Airtable', 'Shopify API', 'Google Apps Script'],
    problem: 'Manual data entry between Shopify and inventory systems was causing 15% error rate in shipments.',
    approach: 'Mapped the entire order-to-delivery process and identified bottlenecks in manual synchronization.',
    execution: 'Implemented automated triggers between Shopify and Airtable to centralize logistics and inventory tracking.',
    outcome: 'Reduced shipping errors to <1% and saved 20+ hours of manual work per week.',
    metrics: ['99% shipping accuracy', '20+ hours saved/week', '$5k+ monthly cost savings'],
    featured: true
  },
  {
    id: '3',
    slug: 'market-entry-strategy-fintech',
    title: 'Fintech Market Entry Strategy',
    description: 'Comprehensive market analysis and product roadmap for a fintech startup expanding into SE Asia.',
    category: ['BA', 'Startup', 'Data'],
    role: 'Strategy Consultant',
    tools: ['Tableau', 'Excel', 'Python', 'Market Research Frameworks'],
    problem: 'The startup lacked a data-driven approach to prioritize geographic expansion and product localization.',
    approach: 'Analyzed regional regulatory landscapes, competitor offerings, and consumer spending patterns using public and proprietary data.',
    execution: 'Created a weighted scoring model to rank target markets and developed a phased 18-month roadmap.',
    outcome: 'Successfully launched in two target markets with 25% faster user acquisition than previous launches.',
    metrics: ['25% faster acquisition', '2 new market launches', 'Board-approved 3-year roadmap'],
    featured: true
  },
  {
    id: '4',
    slug: 'custom-crm-for-real-estate',
    title: 'Custom CRM for Real Estate Teams',
    description: 'A tailored lead management system focused on conversion and follow-up automation.',
    category: ['Automation', 'BA'],
    role: 'Product Manager',
    tools: ['No-code', 'SQL', 'Bubble', 'Make.com'],
    problem: 'Real estate agents were losing 30% of leads due to inconsistent follow-up and fragmented data.',
    approach: 'Designed a unified lead dashboard with automated SMS and email sequences based on user behavior.',
    execution: 'Built a custom web application with real-time notifications and task management for agents.',
    outcome: 'Lead conversion rate increased by 22% within the first three months of implementation.',
    metrics: ['22% conversion increase', '100% lead capture rate', 'Average response time < 5 mins'],
    featured: false
  }
]

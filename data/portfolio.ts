export const heroStats = [
  { value: "4+", label: "Years Experience" },
  { value: "5+", label: "Projects Delivered" },
  { value: "6", label: "Certifications" },
];

export const personalInfo = {
  name: "Jagan M",
  title: "Senior Software Developer",
  subtitle: "Full Stack & Salesforce Specialist",
  tagline:
    "Architecting and deploying robust web, mobile, and enterprise Salesforce solutions with 4+ years of experience.",
  email: "Jagan.m@saleminfotech.com",
  phone: "+91 8098552121",
  linkedin: "https://linkedin.com/in/jagan-m-066497185",
  location: "Chennai, Tamil Nadu, India",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "home", href: "#home" },
  { label: "works", href: "#projects" },
  { label: "about-me", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "contacts", href: "#contact" },
];

export const heroQuote = {
  text: "Building scalable software isn't just about code — it's about crafting solutions that empower people and businesses to grow.",
  author: "Jagan M",
};

export const aboutContent = {
  profileImage: "/images/profile.svg",
  introduction:
    "Results-driven Senior Software Developer with over 4 years of experience architecting, developing, and deploying robust web and mobile applications alongside custom enterprise Salesforce solutions.",
  experience:
    "Currently at Salem Infotech Private Limited, I lead full-stack web and mobile engineering initiatives while building custom Salesforce CRM solutions — from RESTful APIs and containerized microservices to Lightning Web Components and Apex automation.",
  expertise: [
    "Full-stack development with React.js, Next.js, Node.js, Python (FastAPI), and TypeScript",
    "Salesforce platform: Apex, Triggers, Batch Apex, LWC, Aura Components, and Flows",
    "RESTful APIs, OAuth 2.0, JWT, Azure AD, and Auth0 authentication with RBAC",
    "PostgreSQL, MySQL, and SQL Server database design and query optimization",
    "Cloud deployment on Microsoft Azure and AWS with Docker, Kubernetes, and CI/CD",
    "AI-assisted development using GitHub Copilot, ChatGPT, and Cursor AI",
  ],
  summary:
    "Proven track record in building high-throughput APIs, containerizing microservices, implementing enterprise security protocols, and mentoring junior developers. I deliver secure, scalable software across healthcare, research, marketing automation, and CRM domains.",
  highlights: [
    {
      title: "Senior Software Developer",
      description: "4+ years building enterprise-grade applications",
      icon: "code",
    },
    {
      title: "Full Stack Development",
      description: "Web, mobile, APIs, and cloud-native architecture",
      icon: "layers",
    },
    {
      title: "Salesforce Specialist",
      description: "Apex, LWC, Flows, and custom CRM solutions",
      icon: "cloud",
    },
  ],
};

export const education = [
  {
    degree: "Bachelor of Engineering (B.E.) – Computer Science & Engineering",
    institution: "Coimbatore Institute of Technology",
    year: "2020",
  },
  {
    degree: "Diploma – Computer Science & Engineering",
    institution: "Muthayammal Polytechnic College",
    year: "2017",
  },
  {
    degree: "Higher Secondary Education – Class XII",
    institution: "Government Higher Secondary School",
    year: "2013",
  },
];

export const skillCategories = [
  {
    title: "Frontend & Mobile",
    skills: [
      "React.js",
      "React Native",
      "Flutter",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3/SCSS",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Redux",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Python (FastAPI)",
      "Python (Flask)",
      "ASP.NET Core",
      "PHP",
      "RESTful APIs",
      "JSON Web Services",
      "Axios",
    ],
  },
  {
    title: "Salesforce Platform",
    skills: [
      "Apex Classes & Triggers",
      "Batch Apex",
      "Lightning Web Components",
      "Aura Components",
      "SOQL",
      "Flows",
      "Process Builder",
      "Validation Rules",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL Server (T-SQL)",
      "MongoDB",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Microsoft Azure",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "Git",
      "GitHub",
      "Azure DevOps",
    ],
  },
  {
    title: "Tools & Methodologies",
    skills: [
      "OAuth 2.0",
      "JWT",
      "Auth0",
      "Jest",
      "PyTest",
      "Postman",
      "Jira",
      "GitHub Copilot",
      "Agile/Scrum",
    ],
  },
];

export const experiences = [
  {
    id: 1,
    title: "Senior Software Developer",
    company: "Salem Infotech Private Limited",
    period: "October 2021 – Present",
    location: "Chennai, India",
    description:
      "Product Engineering — architecting, developing, and maintaining high-performance web, mobile, and Salesforce enterprise applications across healthcare, research, marketing automation, and CRM domains.",
    responsibilities: [
      "Architected full-stack web and cross-platform mobile apps using React.js, React Native, Next.js, Node.js, Python (FastAPI), TypeScript, and PostgreSQL",
      "Designed modular RESTful APIs and JSON web services for high-concurrency client-server communication",
      "Implemented enterprise security with Azure AD, Auth0, OAuth 2.0, OpenID Connect, JWT, and RBAC",
      "Integrated Stripe, Twilio, Zoho Chat, Firebase, Google Tag Manager, and Microsoft Clarity",
      "Containerized microservices with Docker & Kubernetes; deployed to Microsoft Azure and AWS",
      "Established CI/CD pipelines via GitHub Actions and Azure DevOps with Jest, PyTest, and Postman testing",
      "Engineered Salesforce solutions with Apex, Triggers, Batch Apex, LWC, Flows, and SOQL optimization",
      "Automated business workflows using Process Builders, Validation Rules, and Approval Processes",
      "Mentored junior engineers, conducted code reviews, and enforced architectural guidelines",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "Python",
      "TypeScript",
      "PostgreSQL",
      "Salesforce",
      "Azure",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Medical Tourism Management Platform",
    role: "Full Stack Developer",
    description:
      "Multi-tier web portal managing patient intake, hospital coordination, medical case files, quotations, and international billing with strict RBAC separating patient, doctor, coordinator, and finance team permissions.",
    highlights: [
      "Engineered a multi-tier web portal managing patient intake, hospital coordination, medical case files, quotations, and international billing.",
      "Implemented strict RBAC separating patient, doctor, hospital coordinator, and finance team permissions with high data confidentiality standards.",
      "Designed normalized PostgreSQL database structures and optimized query performance for rapid case history retrieval.",
    ],
    image: "/projects/meditour.svg",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Python (FastAPI)",
      "TypeScript",
      "PostgreSQL",
      "OAuth 2.0",
      "Tailwind CSS",
    ],
    github: null,
    live: null,
    featured: true,
    size: "large" as const,
  },
  {
    id: 2,
    name: "Healthcare & Membership Management Platform",
    role: "Full Stack / Mobile Developer",
    description:
      "Web and cross-platform mobile application for corporate membership management and employee onboarding with automated Stripe subscription renewals and Auth0 SSO authentication.",
    highlights: [
      "Developed web and cross-platform mobile interfaces in React Native and React.js for corporate membership management and employee onboarding.",
      "Implemented automated subscription renewal pipelines with seamless Stripe payment processing and multi-tier billing models.",
      "Integrated secure passwordless and SSO authentication flows leveraging Auth0, OpenID Connect, and Azure AD over a high-throughput PostgreSQL backend.",
    ],
    image: "/projects/arogyanow.svg",
    technologies: [
      "React Native",
      "React.js",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Auth0",
      "Stripe API",
      "Material UI",
    ],
    github: null,
    live: null,
    featured: true,
    size: "medium" as const,
  },
  {
    id: 3,
    name: "DRT – Doctor Request Tracking",
    role: "Full Stack Developer",
    description:
      "End-to-end marketing and field-force automation platform tracking medical representative interactions, doctor conversion requests, and promotional campaigns with multi-level approval workflows.",
    highlights: [
      "Developed an end-to-end marketing and field-force automation application tracking medical representative interactions, doctor conversion requests, and promotional campaigns.",
      "Engineered multi-level hierarchical approval workflows for marketing budgets, doctor conversion approvals, and sample disbursement tracking.",
      "Built real-time marketing analytics dashboards visualizing representative territory performance, campaign ROI, and monthly engagement metrics.",
    ],
    image: "/projects/drt.svg",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "REST APIs",
      "Tailwind CSS",
      "Twilio",
    ],
    github: null,
    live: null,
    featured: true,
    size: "medium" as const,
  },
  {
    id: 4,
    name: "VMRF – Research Grant Management",
    role: "Full Stack Developer",
    description:
      "Centralized fund allocation and research grant management system for university faculty with multi-stage review pipelines, milestone tracking, and Azure AD SSO-secured administrative portals.",
    highlights: [
      "Architected a centralized fund allocation and research grant management system for university faculty, departments, and research scholars.",
      "Implemented multi-stage grant application review pipelines, milestone tracking, fund disbursement auditing, and automated budget utilization reports.",
      "Secured faculty and institutional administrative portals using Azure AD SSO and fine-grained RBAC over normalized MySQL schemas.",
    ],
    image: "/projects/vmrf.svg",
    technologies: [
      "React.js",
      "Python (FastAPI)",
      "MySQL",
      "Azure AD",
      "RESTful APIs",
    ],
    github: null,
    live: null,
    featured: true,
    size: "medium" as const,
  },
  {
    id: 5,
    name: "Enterprise Salesforce CRM",
    role: "Salesforce Developer",
    description:
      "Custom CRM application with responsive Lightning Web Components, complex custom object schemas, optimized Apex triggers, and automated business workflows for operational teams.",
    highlights: [
      "Developed responsive Lightning Web Components (LWC) styled with custom CSS to modernize legacy CRM user interfaces for operational teams.",
      "Constructed complex custom object data models with master-detail/lookup relationships and optimized Apex triggers adhering strictly to governor limits.",
      "Automated mission-critical business workflows using Salesforce Flows, Process Builders, Validation Rules, and Approval Processes.",
    ],
    image: "/projects/salesforce-crm.svg",
    technologies: [
      "Salesforce",
      "Apex",
      "SOQL",
      "LWC",
      "Aura Components",
      "Flows",
    ],
    github: null,
    live: null,
    featured: true,
    size: "medium" as const,
  },
];

export const certifications = [
  {
    id: 1,
    name: "Salesforce Certified Platform Developer I (PD1)",
    organization: "Salesforce",
    image: "/certificates/salesforce-pd1.svg",
    year: "Certified",
    credentialUrl: "https://trailhead.salesforce.com/credentials/platformdeveloperI",
  },
  {
    id: 2,
    name: "Salesforce Certified JavaScript Developer I",
    organization: "Salesforce",
    image: "/certificates/salesforce-js.svg",
    year: "Certified",
    credentialUrl: "https://trailhead.salesforce.com/credentials/javascriptdeveloperI",
  },
  {
    id: 3,
    name: "Salesforce Certified Administrator (SCA)",
    organization: "Salesforce",
    image: "/certificates/salesforce-admin.svg",
    year: "Certified",
    credentialUrl: "https://trailhead.salesforce.com/credentials/administrator",
  },
  {
    id: 4,
    name: "Salesforce Certified Associate",
    organization: "Salesforce",
    image: "/certificates/salesforce-associate.svg",
    year: "Certified",
    credentialUrl: "https://trailhead.salesforce.com/credentials/associate",
  },
  {
    id: 5,
    name: "Scrum Fundamentals Certified",
    organization: "SCRUMstudy",
    image: "/certificates/scrum.svg",
    year: "Certified",
    credentialUrl: null,
  },
  {
    id: 6,
    name: "Jira Fundamentals",
    organization: "Atlassian",
    image: "/certificates/jira.svg",
    year: "Certified",
    credentialUrl: "https://www.atlassian.com/university",
  },
];

export const contactContent = {
  heading: "Let's Build Something Great Together.",
  subheading:
    "Open to discussing new projects, enterprise solutions, or opportunities to collaborate on impactful software.",
};

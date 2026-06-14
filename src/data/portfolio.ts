import type {
  Achievement,
  ContactFormLabels,
  Education,
  Experience,
  NavLink,
  PersonalInfo,
  Project,
  SectionLabels,
  Skills,
  SocialLink,
  Stat,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Zeenat Parveen",
  title: "Full Stack Developer",
  tagline:
    "Open to full-time roles, freelance projects, and collaborations. Let's build something meaningful together.",
  bio: "Full Stack Developer with 4+ years of experience building high-performance, scalable web applications using React.js, TypeScript, Node.js, and modern full stack technologies. Proven track record of owning features end-to-end from requirements to deployment with 80%+ test coverage, 95% on-time delivery, and a strong focus on performance engineering and optimized delivery techniques.",
  email: "zenizee010@gmail.com",
  phone: "+92 308 584 3383",
  location: "Lahore, Pakistan",
  avatarInitials: "ZP",
  cvLink: "/ZeenatParveen_FSD.pdf",
  linkedin: "https://linkedin.com/in/zeenat-parveen-fullstackdevelopr",
  github: "https://github.com/Zeeizee",
  website: "https://zeenatparveendev.netlify.app/",
};

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    url: personalInfo.linkedin,
    display: "linkedin.com/in/zeenat-parveen-fullstackdevelopr",
  },
  {
    label: "GitHub",
    url: personalInfo.github,
    display: "github.com/Zeeizee",
  },
  {
    label: "Portfolio",
    url: personalInfo.website,
    display: "zeenatparveendev.netlify.app",
  },
];

export const stats: Stat[] = [
  { value: "4+", label: "Years Experience" },
  { value: "10K+", label: "Users Served" },
  { value: "95%", label: "On-Time Delivery" },
];

export const skills: Skills = {
  categories: [
    {
      key: "frontend",
      label: "Frontend",
      items: [
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Ant Design",
        "ShadCN",
        "Framer Motion",
        "Responsive Design",
        "Cross-Browser Compatibility",
      ],
    },
    {
      key: "stateManagement",
      label: "State Management",
      items: [
        "Redux Toolkit (RTK)",
        "React Query",
        "React TanStack",
        "Zustand",
        "Context API",
        "React Hooks",
      ],
    },
    {
      key: "backend",
      label: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Python",
        "RESTful API Design",
        "JWT Authentication",
        "NextAuth",
        "Auth0",
        "RBAC",
        "Secure Coding",
      ],
    },
    {
      key: "databases",
      label: "Databases",
      items: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Firebase Firestore",
        "Schema Design",
        "Query Optimisation",
      ],
    },
    {
      key: "testing",
      label: "Testing & QA",
      items: ["Jest", "React Testing Library"],
    },
    {
      key: "devops",
      label: "DevOps & Tools",
      items: [
        "Git",
        "GitHub",
        "CI/CD Pipelines",
        "Azure DevOps",
        "Agile/Scrum",
        "Code Review",
      ],
    },
    {
      key: "aiIntegration",
      label: "AI Integration",
      items: ["OpenAI API", "Claude AI", "Grok AI"],
    },
    {
      key: "other",
      label: "Other",
      items: ["Next.js (SSG/SSR, ISR)", "i18next", "Axios"],
    },
  ],
  proficiency: [
    { name: "React.js", percent: 95 },
    { name: "TypeScript", percent: 90 },
    { name: "Node.js", percent: 88 },
    { name: "Next.js", percent: 85 },
    { name: "MongoDB", percent: 82 },
  ],
  floating: ["React", "Node.js", "TypeScript", "Next.js"],
};

export const experience: Experience[] = [
  {
    role: "MERN Stack Developer (Frontend Lead)",
    company: "aicruit.ai",
    companyUrl: "https://aicruit.ai",
    period: "Jan 2024 – Jan 2026",
    type: "AI-Powered Recruitment SaaS Platform | Canada (Remote)",
    bullets: [
      "Architected and maintained a scalable React.js + TypeScript frontend with reusable components built on Tailwind CSS, ShadCN and Ant Design, powering 500+ daily active users with 99.9% uptime — owning the complete feature lifecycle from requirements gathering to production deployment.",
      "Designed and shipped RESTful APIs using Node.js and Express.js; enforced security through JWT and Auth0 authentication with role-based access control, slashing unauthorised login attempts by 75%.",
      "Drove frontend performance engineering by implementing code splitting, lazy loading, and React Query caching — reducing bundle size by 40% and API call volume by 60%; automated delivery pipelines via CI/CD, increasing deployment frequency by 80%.",
      "Championed quality by achieving 80% test coverage with Jest and React Testing Library; delivered 40+ features across 12 Agile sprints with a 95% on-time rate through active code review, sprint planning, and cross-functional collaboration.",
      "Partnered with UI/UX designers, product managers, and QA engineers to translate ambiguous business requirements into polished, production-ready features; continuously profiled and optimised performance across frontend and backend layers.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "eclipse-ai.com",
    companyUrl: "https://eclipse-ai.com",
    period: "Sep 2022 – Dec 2023",
    type: "Generative AI SaaS Platform for Surveys & Analytics | Australia (Remote)",
    bullets: [
      "Built and owned full-stack features across React.js, Node.js, and Express.js for a multi-tenant SaaS platform; designed and consumed REST APIs and scalable MongoDB schemas to support high-volume analytics data with guaranteed integrity and security.",
      "Integrated the OpenAI Assistant API to surface AI-driven survey insights using Natural Language Processing (NLP) and sentiment analysis, cutting manual analysis time by 50%; configured Auth0 RBAC for secure, granular multi-organisation access control across the platform.",
      "Reduced client-side API calls by 50% through strategic use of Redux Toolkit and React Query; optimised NoSQL queries to improve response times and strengthen data security across all services.",
      "Managed end-to-end release cycles using Git workflows and Azure DevOps CI/CD pipelines, compressing release cycles by 50%; mentored junior engineers on state management and REST API design best practices.",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "devnation.pk",
    companyUrl: "https://devnation.pk",
    period: "Jan 2022 – Aug 2022",
    type: "Learning Management System | Lahore (Remote)",
    bullets: [
      "Led full-stack development of a Learning Management System serving 2,000+ students using React.js, Node.js, and Firebase, achieving a 90% user-satisfaction rate; architected the RESTful API layer with Express.js including secure authentication and RBAC.",
      "Engineered efficient state management with Redux, React Hooks, and Context API — reducing unnecessary re-renders by 40% and improving page load times by 30%; integrated Firebase Firestore for real-time data synchronisation across all user sessions.",
      "Defined and enforced code quality standards through structured peer code reviews and Agile best practices; built server-side services with Node.js and Express.js ensuring cross-browser compatibility and mobile responsiveness.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Memory Blogs",
    subtitle: "MERN blog platform with admin CMS",
    url: "https://momoriesblog.netlify.app/",
    displayUrl: "momoriesblog.netlify.app",
    tech: ["React.js", "Node.js", "CRUD Operations"],
    description:
      "Developed a MERN blog platform with JWT-protected admin flows for creating, editing, and deleting posts and gallery images. Designed REST APIs with MongoDB pagination, category filters, and Cloudinary cursor-based image storage. Built a responsive React/Redux frontend with route guards, category tabs, paginated listings, and reusable gallery/image-picker components.",
    icon: "book-open",
    headerColor: "indigo",
  },
  {
    title: "Angel Care Transit",
    subtitle: "HIPAA-compliant medical transport platform",
    url: "https://angelcaretransit.com",
    displayUrl: "angelcaretransit.com",
    tech: ["Next.js", "Node.js", "Axios", "Framer Motion", "HIPAA Compliance"],
    description:
      "Architected and delivered a Next.js medical transport platform serving 1,000+ clients; implemented SSG/SSR strategies for SEO performance, Framer Motion micro-animations for enhanced UX, and Axios interceptors for secure, token-based API integration. Engineered a HIPAA-compliant full-stack solution sustaining 99.9% uptime.",
    icon: "ambulance",
    headerColor: "accent",
  },
  {
    title: "Einvotca ERP System",
    subtitle: "Enterprise sales & purchase management",
    url: "https://einvotca.com",
    displayUrl: "einvotca.com",
    tech: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "REST APIs",
    ],
    description:
      "Architected a scalable ERP platform for sales and purchase management using Ant Design Form.List for dynamic form generation, i18next for multi-language support (English + more), and AI-driven analytics dashboards backed by a robust PostgreSQL schema. Implemented automated CI/CD pipelines to streamline release delivery.",
    icon: "bar-chart-3",
    headerColor: "teal",
  },
  {
    title: "TECH-IOMES",
    subtitle: "Industry 4.0 corporate website",
    url: "https://www.tech-iomes.io/",
    displayUrl: "tech-iomes.io",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "EmailJS", "Google Analytics"],
    description:
      "Designed and built a responsive marketing website for an industrial IoT and ML solutions company. Implemented bilingual (English/Chinese) content switching with dynamic page rendering; integrated a contact form with client-side validation, Google reCAPTCHA, and EmailJS for automated email delivery. Built sections for product offerings, global project references, company updates, and mobile-friendly navigation; added Google Analytics to track visitor engagement.",
    icon: "globe",
    headerColor: "emerald",
  },
];

export const education: Education[] = [
  {
    degree: "Master of Computer Science (MCS)",
    institution: "PMAS-Arid Agriculture University, Pakistan",
    period: "2015 – 2017",
    gpa: "CGPA: 3.92/4.0",
    note: "Specialisation: Software Engineering, Database Systems, Distributed Computing",
  },
  {
    degree: "MERN Stack Development Certification",
    institution: "DevNation, Lahore",
    period: "2021",
    gpa: "",
  },
];

export const achievements: Achievement[] = [
  {
    value: "3",
    description:
      "Enterprise SaaS platforms architected, collectively serving 10,000+ users, balancing scalability, security, and time-to-market.",
  },
  {
    value: "95%",
    description:
      "On-time delivery rate across 20+ Agile sprints, consistently shipping high-quality, well-tested code under tight deadlines.",
  },
  {
    value: "90%",
    description:
      "Reduction in production incidents and 80% faster deployments via robust CI/CD pipelines with automated testing gates.",
  },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", icon: "home" },
  { label: "About", href: "#about", icon: "user" },
  { label: "Skills", href: "#skills", icon: "zap" },
  { label: "Experience", href: "#experience", icon: "briefcase" },
  { label: "Projects", href: "#projects", icon: "code" },
  { label: "Get in Touch", href: "#contact", icon: "mail" },
];

export const sectionLabels: SectionLabels = {
  skills: { tag: "SKILLS & TOOLS", title: "Technical Expertise" },
  experience: { tag: "EXPERIENCE", title: "Professional Journey" },
  projects: { tag: "PROJECTS", title: "Selected Work" },
  education: { title: "Education" },
  achievements: { title: "Achievements" },
  contact: {
    tag: "CONTACT",
    title: "Get In Touch",
    tagline: personalInfo.tagline,
    formSubtitle: "Fill out the form and I'll get back to you shortly.",
  },
};

export const contactFormLabels: ContactFormLabels = {
  title: "Send a Message",
  name: "Your name",
  email: "you@example.com",
  subject: "What's this about?",
  message: "Tell me about your project...",
  submit: "Send Message",
  submitting: "Sending...",
  success: "Message sent successfully! I'll get back to you soon.",
  errorRequired: "Please fill in all required fields.",
  errorEmail: "Please enter a valid email address.",
  errorConfig:
    "EmailJS is not configured. Please check your environment variables.",
  errorSend: `Failed to send message. Please try again or contact me directly at ${personalInfo.email}`,
};

export const footerText = {
  copyright: "© 2026 Zeenat Parveen · Full Stack Developer",
  backToTop: "Back to Top",
};

export const navbarLabels = {
  openToWork: "Open to Work",
};

export const heroLabels = {
  viewProjects: "View Projects",
  downloadCv: "Download CV",
};

export const skillCategoryLabels = {
  proficiency: "Proficiency Levels",
};

export const skillCategoryVariants: Record<string, "frontend" | "backend" | "tools"> = {
  frontend: "frontend",
  stateManagement: "frontend",
  backend: "backend",
  databases: "backend",
  testing: "tools",
  devops: "tools",
  aiIntegration: "frontend",
  other: "tools",
};

export const themes = ["light", "dark", "purple"] as const;
export type ThemeName = (typeof themes)[number];

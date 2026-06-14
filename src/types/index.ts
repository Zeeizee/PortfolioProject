export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  avatarInitials: string;
  cvLink: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Proficiency {
  name: string;
  percent: number;
}

export interface SkillCategoryGroup {
  key: string;
  label: string;
  items: string[];
}

export interface Skills {
  categories: SkillCategoryGroup[];
  proficiency: Proficiency[];
  floating: string[];
}

export interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  type: string;
  bullets: string[];
}

export type ProjectHeaderColor = "accent" | "teal" | "emerald" | "indigo";

export interface Project {
  title: string;
  subtitle: string;
  url: string;
  displayUrl: string;
  tech: string[];
  description: string;
  icon: string;
  headerColor: ProjectHeaderColor;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  note?: string;
}

export interface Achievement {
  value: string;
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
  display: string;
}

export interface NavLink {
  label: string;
  href: string;
  icon: string;
}

export interface ContactFormLabels {
  title: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  submit: string;
  submitting: string;
  success: string;
  errorRequired: string;
  errorEmail: string;
  errorConfig: string;
  errorSend: string;
}

export interface SectionLabels {
  skills: { tag: string; title: string };
  experience: { tag: string; title: string };
  projects: { tag: string; title: string };
  education: { title: string };
  achievements: { title: string };
  contact: {
    tag: string;
    title: string;
    tagline: string;
    formSubtitle: string;
  };
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "tools"
  | "default";

export type SkillCategoryVariant = SkillCategory;

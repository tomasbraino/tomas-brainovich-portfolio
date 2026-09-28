export interface ExperienceItem {
  id: string;
  role: string;
  project: string;
  period: string;
  isFeatured?: boolean;
  bullets: string[];
  skills?: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    isPrimary?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  tagline?: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
}

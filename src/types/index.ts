export interface NavLink {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
  image?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

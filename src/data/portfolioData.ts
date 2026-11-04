import type { TFunction } from "i18next";
import type { Experience, NavLink, Project, SocialLink } from "../types";

export const getNavLinks = (t: TFunction): NavLink[] => [
  { label: t("nav.about"), href: "#about" },
  { label: t("nav.experience"), href: "#experience" },
  { label: t("nav.projects"), href: "#projects" },
  { label: t("nav.contact"), href: "#contact" },
];

export const getExperiences = (t: TFunction): Experience[] => [
  {
    id: "exp-2",
    role: t("experience.marcoUm.role"),
    company: "Marco Um",
    period: t("experience.marcoUm.period"),
    description: t("experience.marcoUm.description", { returnObjects: true }) as string[],
    tech: ["React", "TypeScript", "Node.js", "FastAPI", "Python", "Docker", "AWS", "Java"],
  },
  {
    id: "exp-1",
    role: t("experience.versa.role"),
    company: "Versa Informatica",
    period: t("experience.versa.period"),
    description: t("experience.versa.description", { returnObjects: true }) as string[],
    tech: [],
  },
];

export const getProjects = (t: TFunction): Project[] => [
  {
    id: "proj-1", title: "ReminderApp", description: t("projects.reminderApp"),
    tech: ["Python", "TkInter", "Bootstrap"],
    github: "https://github.com/MiguelValadao/ReminderApp",
    live: "https://github.com/MiguelValadao/ReminderApp",
    featured: false, image: "/images/reminderApp.png",
  },
  {
    id: "proj-2", title: "Terminal Portfolio", description: t("projects.terminal"),
    tech: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/MiguelValadao/Terminal",
    live: "https://miguelvaladao.github.io/Terminal/",
    featured: true, image: "/images/terminal.png",
  },
  {
    id: "proj-3", title: "CATAS", description: t("projects.catas"),
    tech: ["Flutter", "Python", "FastAPI", "Dart", "Supabase"],
    github: "https://github.com/MiguelValadao", featured: true, image: "/images/catas.png",
  },
  {
    id: "proj-4", title: "Mobilibus", description: t("projects.mobilibus"),
    tech: ["Flutter", "Dart", "Geolocator"],
    github: "https://github.com/MiguelValadao/Mobilibus", featured: true, image: "/images/MobiliBus.png",
  },
  {
    id: "proj-5", title: "Koda-AI", description: t("projects.koda"),
    tech: ["Next.js", "TypeScript", "FastAPI", "React", "Prisma", "Docker"],
    github: "https://github.com/marcoum", featured: true, image: "/images/koda.png",
  },
  {
    id: "proj-6", title: "GesturePilot", description: t("projects.gesturePilot"),
    tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    github: "https://github.com/MiguelValadao/GesturePilot", featured: false,
  },
  {
    id: "proj-7", title: "Shelf", description: t("projects.shelf"),
    tech: ["Flutter", "Python", "FastAPI", "Dart", "Supabase"],
    github: "https://github.com/MiguelValadao/Shelf", featured: false,
  },
  
  {
    id: "proj-8", title: "Chess", description: t("projects.chess"),
    tech: ["JavaScript", "HTML", "CSS"], github: "https://github.com/MiguelValadao/Chess", featured: false,
  },
];

export const skillGroups = [
  { categoryKey: "about.skills.stack", items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C#", "Dart"] },
  { categoryKey: "about.skills.frontend", items: ["React", "Tailwind CSS", "Flutter", "HTML/CSS"] },
  { categoryKey: "about.skills.backend", items: ["Node.js", "FastAPI", "Flask", "Docker", "Java/Spring Boot"] },
  { categoryKey: "about.skills.infrastructure", items: ["Docker", "AWS", "PostgreSQL"] },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/MiguelValadao", icon: "github" },
  { label: "LinkedIn", url: "www.linkedin.com/in/miguel-valadão-973578310", icon: "linkedin" },
  { label: "Instagram", url: "https://instagram.com/omiguelito_valadao", icon: "twitter" },
];

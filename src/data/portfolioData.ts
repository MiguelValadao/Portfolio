import type { NavLink, Experience, Project, Skill, SocialLink } from "../types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const experiences: Experience[] = [
  {
    id: "exp-2",
    role: "Full Stack Developer & Co-Founder",
    company: "Marco Um",
    period: "Sep 2026 – Present",
    description: [
      " Developed digital solutions tailored to companies' business needs.",
      "Collaborated with clients and internal teams to gather requirements and deliver solutions aligned with client expectations",
      "Assisted in developing and maintaining the backend of the company's main application.",
      "Utilized Google developer and marketing tools to create digital campaigns and deploy websites.",
    ],
    
    tech: ["React", "TypeScript", "Node.js", "FastAPI", "Python", "Docker", "AWS", "Java"],
  },
  {
    id: "exp-1",
    role: "Support Analyst",
    company: "Versa Informatica",
    period: "Apr 2025 – Dec 2025",
    description: [
      "Identified, registered and solved 100+ technical issues in the system's enviroment",
      "Communication with clients to understand their needs and provide effective solutions, resulting in a 95% satisfaction rate.",
      "Technical support for clients and internal teams",
    ],
    tech: [],
  },
  // {
  //   id: "exp-2",
  //   role: "Frontend Engineer",
  //   company: "Startup XYZ",
  //   period: "Jun 2021 – Dec 2022",
  //   description: [
  //     "Built reusable component library adopted across 3 product teams, cutting design-to-dev handoff by 60%.",
  //     "Implemented real-time dashboard with WebSockets, improving user engagement by 35%.",
  //     "Collaborated closely with designers to deliver pixel-perfect, accessible UIs.",
  //   ],
  //   tech: [],
  // },
  // {
  //   id: "exp-3",
  //   role: "Software Engineer Intern",
  //   company: "Tech Labs",
  //   period: "Jan 2021 – May 2021",
  //   description: [
  //     "Developed a data-pipeline tool that automated ETL workflows, saving 10+ hours/week of manual work.",
  //     "Wrote comprehensive unit tests achieving 90% code coverage on the analytics module.",
  //   ],
  //   tech: ["Python", "FastAPI", "React", "SQLite"],
  // },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "ReminderApp",
    description:
      "ReminderApp is a simple, yet effective, user-friendly notification app and task scheduler that uses system native notifications to remind users of important tasks and events. Users can create custom reminders with flexible scheduling options.",
    tech: ["Python", "TkInter", "Bootstrap"],
    github: "https://github.com/MiguelValadao/ReminderApp",
    live: "https://github.com/MiguelValadao/ReminderApp",
    featured: true,
    image: "/images/reminderApp.png",
  },
  {
    id: "proj-2",
    title: "Terminal Portfolio",
    description:
      "A PowerShell-style terminal emulator for browsing my portfolio.",
    tech: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/MiguelValadao/Terminal",
    live: "https://miguelvaladao.github.io/Terminal/",
    featured: true,
    image: "/images/terminal.png",
  },
  {
    id: "proj-3",
    title: "CATAS",
    description:
      "CATAS is a context aware task automation system that uses user input as workflow triggers. It integrates with various APIs and services to automate tasks like sending emails, managing calendars, and controlling applications based on user-defined rules and contexts. (Not yet complete)",
    tech: ["Flutter", "Python", "FastAPI", "Dart", "Supabase", "N8N"],
    github: "https://github.com/MiguelValadao",
    featured: true,
    image: "/images/catas.png",
  },
  {
    id: "proj-4",
    title: "Chess",
    description:
      "Simple chess game built purely with JS and HTML.",
    tech: ["Javascript", "HTML", "CSS"],
    github: "https://github.com/MiguelValadao/Chess",
    featured: false,
  },
    {
    id: "proj-5",
    title: "Shelf",
    description:
      "AI powered library management system that allows users to manage their book collections, track reading progress, and receive personalized book recommendations based on their reading habits and preferences.",
    tech: ["Flutter", "Python", "FastAPI", "Dart", "Supabase"],
    github: "https://github.com/MiguelValadao/Shelf",
    featured: false,
  },
  // {
  //   id: "proj-5",
  //   title: "Pulse — API Health Monitor",
  //   description:
  //     "Lightweight self-hosted uptime monitor with Slack/email alerts, status pages, and response-time analytics.",
  //   tech: ["Go", "SQLite", "React", "Docker"],
  //   github: "https://github.com",
  //   featured: false,
  // },
  // {
  //   id: "proj-6",
  //   title: "Chromatic — Theme Studio",
  //   description:
  //     "In-browser design-token editor that exports to CSS variables, Tailwind config, or JSON. Live preview with a component sandbox.",
  //   tech: ["Vue 3", "TypeScript", "Vite"],
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   featured: false,
  // },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C#", "Dart"],
  },
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "Flutter", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "FastAPI", "Flask", "Docker", "Java/Spring Boot"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "AWS", "PostgreSQL"],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/MiguelValadao", icon: "github" },
  { label: "LinkedIn", url: "www.linkedin.com/in/miguel-valadão-973578310", icon: "linkedin" },
  { label: "Instagram", url: "https://instagram.com/omiguelito_valadao", icon: "twitter" },
];

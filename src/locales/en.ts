const en = {
  nav: {
    about: "About", experience: "Experience", projects: "Projects", contact: "Contact",
    resume: "My résumé", toggleMenu: "Toggle navigation menu",
  },
  language: {
    switcher: "Language", switchTo: "Switch language to {{language}}",
    english: "English", portuguese: "Português",
  },
  hero: {
    greeting: "Hi, my name is", tagline: "I build mobile and backend applications.",
    descriptionBefore: "I'm a full-stack developer specialising in crafting exceptional digital experiences. Currently focused on building",
    highlight: "accessible && performant", descriptionAfter: "products at the intersection of design and engineering.",
    viewWork: "View my work", getInTouch: "Get in touch",
  },
  about: {
    label: "01. about me", title: "Who I Am", introBefore: "Hey! I'm",
    introAfter: ", a full-stack engineer based in Belo Horizonte, Brazil. I love turning complex problems into elegant, performant software that people genuinely enjoy using.",
    journey: "My journey started with a curiosity about how web pages work — within a few years that curiosity shifted into a passion for building useful full-stack applications for both mobile and web.",
    interests: "When I'm not pushing code, you'll find me reading philosophy, classics, or playing my humble guitar.",
    skills: { stack: "Core stack", frontend: "Frontend", backend: "Backend", infrastructure: "Infrastructure" },
    stats: { experience: "Years exp.", projects: "Projects", languages: "Languages spoken", variables: "Understandable variables", coding: "Years of coding" },
  },
  experience: {
    label: "02. experience", title: "Where I've Worked",
    marcoUm: {
      role: "Full-stack Developer & Co-founder", period: "Sep 2026 – Present",
      description: ["Developed digital solutions tailored to companies' business needs.", "Collaborated with clients and internal teams to gather requirements and deliver solutions aligned with expectations.", "Assisted with developing and maintaining the backend of the company's main application.", "Used Google developer and marketing tools to create digital campaigns and deploy websites."],
    },
    versa: {
      role: "Support Analyst", period: "Apr 2025 – Dec 2025",
      description: ["Identified, recorded, and resolved 100+ technical issues in the system environment.", "Communicated with clients to understand their needs and provide effective solutions, resulting in a 95% satisfaction rate.", "Provided technical support for clients and internal teams."],
    },
  },
  projects: {
    label: "03. projects", title: "Things I've Built", featured: "Featured project", other: "Other noteworthy projects", liveSite: "Live site",
    reminderApp: "ReminderApp is a simple, effective notification app and task scheduler that uses native system notifications to remind users of important tasks and events. Users can create custom reminders with flexible scheduling options.",
    terminal: "A PowerShell-style terminal emulator for browsing my portfolio.",
    catas: "CATAS is a context-aware task automation system that uses user input as workflow triggers. It integrates with APIs and services to automate tasks such as sending emails, managing calendars, and controlling applications from user-defined rules and contexts. (In progress)",
    koda: "Koda is an AI-powered business management platform that simplifies complex ERP systems. It combines CRM, financial tracking, revenue forecasting, inventory control, and task management in one place. With WhatsApp integration and a conversational AI assistant, it automates repetitive tasks and surfaces personalised insights.",
    chess: "A simple chess game built purely with JavaScript and HTML.",
    shelf: "An AI-powered library management system for managing book collections, tracking reading progress, and receiving personalised recommendations based on reading habits and preferences.",
    gesturePilot: "A camera-based gesture-control system that lets users control a Windows computer with hand gestures for a touchless, intuitive experience.",
  },
  contact: {
    label: "04. contact", title: "Get In Touch",
    body: "I'm currently open to new opportunities. Whether you have a project idea, a question, or just want to say hi — my inbox is always open!",
    location: "Belo Horizonte, Brazil", sayHello: "Say hello", name: "Name", namePlaceholder: "Your name", email: "Email", emailPlaceholder: "your@email.com", subject: "Subject", subjectPlaceholder: "What's this about?", message: "Message", messagePlaceholder: "Your message...", send: "Send message",
  },
  footer: { copy: "Designed & built by" },
} as const;

export default en;

const pt = {
  nav: {
    about: "Sobre", experience: "Experiência", projects: "Projetos", contact: "Contato",
    resume: "Meu currículo", toggleMenu: "Alternar menu de navegação",
  },
  language: {
    switcher: "Idioma", switchTo: "Mudar idioma para {{language}}",
    english: "English", portuguese: "Português",
  },
  hero: {
    greeting: "Olá, meu nome é", tagline: "Desenvolvo aplicações mobile e de backend.",
    descriptionBefore: "Sou desenvolvedor full-stack especializado em criar experiências digitais excepcionais. Atualmente, estou focado em construir produtos",
    highlight: "acessíveis && eficientes", descriptionAfter: "na interseção entre design e engenharia.",
    viewWork: "Ver meu trabalho", getInTouch: "Entre em contato",
  },
  about: {
    label: "01. sobre mim", title: "Quem sou eu", introBefore: "Olá! Eu sou",
    introAfter: ", engenheiro full-stack de Belo Horizonte, Brasil. Gosto de transformar problemas complexos em softwares elegantes e eficientes que as pessoas realmente gostam de usar.",
    journey: "Minha jornada começou com a curiosidade de entender como as páginas web funcionavam — em poucos anos, essa curiosidade se transformou em uma paixão por criar aplicações full-stack úteis para mobile e web.",
    interests: "Quando não estou programando, você vai me encontrar lendo filosofia e clássicos, ou tocando meu humilde violão.",
    skills: { stack: "Base técnica", frontend: "Frontend", backend: "Backend", infrastructure: "Infraestrutura" },
    stats: { experience: "Anos de experiência", projects: "Projetos", languages: "Idiomas", variables: "Variáveis compreensíveis", coding: "Anos programando" },
  },
  experience: {
    label: "02. experiência", title: "Onde trabalhei",
    marcoUm: {
      role: "Desenvolvedor full-stack e cofundador", period: "Set 2026 – Atual",
      description: ["Desenvolvi soluções digitais adaptadas às necessidades de negócio das empresas.", "Colaborei com clientes e equipes internas para levantar requisitos e entregar soluções alinhadas às expectativas.", "Auxiliei no desenvolvimento e na manutenção do backend da principal aplicação da empresa.", "Utilizei ferramentas de desenvolvimento e marketing do Google para criar campanhas digitais e publicar sites."],
    },
    versa: {
      role: "Analista de suporte", period: "Abr 2025 – Dez 2025",
      description: ["Identifiquei, registrei e resolvi mais de 100 problemas técnicos no ambiente do sistema.", "Comuniquei-me com clientes para entender necessidades e fornecer soluções eficazes, resultando em 95% de satisfação.", "Prestei suporte técnico para clientes e equipes internas."],
    },
  },
  projects: {
    label: "03. projetos", title: "O que construí", featured: "Projeto em destaque", other: "Outros projetos relevantes", liveSite: "Site ao vivo",
    reminderApp: "ReminderApp é um aplicativo simples e eficaz de notificações e agendamento de tarefas. Ele usa as notificações nativas do sistema para lembrar tarefas e eventos importantes, com lembretes personalizados e opções flexíveis de agendamento.",
    terminal: "Um emulador de terminal no estilo PowerShell para navegar pelo meu portfólio.",
    mobilibus: "Mobilibus é um aplicativo móvel que fornece informações em tempo real sobre o transporte público em Belo Horizonte, Brasil. Ele permite que os usuários acompanhem a localização dos ônibus, visualizem horários e recebam notificações sobre atrasos ou alterações no serviço.",
    catas: "CATAS é um sistema de automação de tarefas sensível ao contexto que usa a entrada do usuário como gatilho de fluxos de trabalho. Ele integra APIs e serviços para automatizar tarefas como enviar e-mails, gerenciar calendários e controlar aplicações a partir de regras e contextos definidos pelo usuário. (Em desenvolvimento)",
    koda: "Koda é uma plataforma de gestão empresarial com IA que simplifica sistemas ERP complexos. Ela reúne CRM, controle financeiro, previsão de receita, estoque e gerenciamento de tarefas em um só lugar. Com integração ao WhatsApp e um assistente de IA conversacional, automatiza tarefas repetitivas e oferece insights personalizados.",
    chess: "Um jogo de xadrez simples construído somente com JavaScript e HTML.",
    shelf: "Um sistema de gestão de bibliotecas com IA para administrar coleções de livros, acompanhar a leitura e receber recomendações personalizadas com base em hábitos e preferências.",
    gesturePilot: "Um sistema de controle por gestos com câmera que permite controlar um computador Windows com movimentos das mãos, para uma experiência intuitiva e sem toque.",
  },
  contact: {
    label: "04. contato", title: "Entre em contato",
    body: "Estou aberto a novas oportunidades. Se você tem uma ideia de projeto, uma pergunta ou só quer dar um oi, minha caixa de entrada está sempre aberta!",
    location: "Belo Horizonte, Brasil", sayHello: "Diga olá", name: "Nome", namePlaceholder: "Seu nome", email: "E-mail", emailPlaceholder: "seu@email.com", subject: "Assunto", subjectPlaceholder: "Sobre o que é a mensagem?", message: "Mensagem", messagePlaceholder: "Sua mensagem...", send: "Enviar mensagem",
  },
  footer: { copy: "Desenvolvido por" },
} as const;

export default pt;

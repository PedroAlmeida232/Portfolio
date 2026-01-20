import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.about': { pt: 'Sobre', en: 'About' },
  'nav.skills': { pt: 'Habilidades', en: 'Skills' },
  'nav.projects': { pt: 'Projetos', en: 'Projects' },
  'nav.contact': { pt: 'Contato', en: 'Contact' },
  
  // Hero
  'hero.greeting': { pt: 'Olá, eu sou', en: 'Hi, I\'m' },
  'hero.name': { pt: 'Pedro Rodrigues Almeida', en: 'Pedro Rodrigues Almeida' },
  'hero.role': { pt: 'Desenvolvedor de Software', en: 'Software Developer' },
  'hero.description': { 
    pt: 'Experiência em desenvolvimento back-end com Node.js e front-end com React. Interesse em desenvolvimento web e tecnologias emergentes.', 
    en: 'Experience in back-end development with Node.js and front-end with React. Interested in web development and emerging technologies.' 
  },
  'hero.cta': { pt: 'Ver Projetos', en: 'View Projects' },
  'hero.contact': { pt: 'Entrar em Contato', en: 'Get in Touch' },
  
  // About
  'about.title': { pt: 'Sobre Mim', en: 'About Me' },
  'about.subtitle': { pt: 'Conheça um pouco da minha história', en: 'Get to know my story' },
  'about.p1': { 
    pt: 'Busco oportunidades para iniciar minha carreira na área de tecnologia, com foco em desenvolvimento de software. Tenho interesse em aprender novas tecnologias e contribuir com soluções inovadoras.', 
    en: 'I\'m looking for opportunities to start my career in technology, focusing on software development. I\'m interested in learning new technologies and contributing innovative solutions.' 
  },
  'about.p2': { 
    pt: 'Atualmente curso Bacharelado em Engenharia de Software na FIAP. Tenho experiência em desenvolvimento back-end com Node.js (avançado) e front-end com React (intermediário). Habilidade para trabalhar em equipe e disposição para aprender continuamente.', 
    en: 'Currently pursuing a Bachelor\'s degree in Software Engineering at FIAP. I have experience in back-end development with Node.js (advanced) and front-end with React (intermediate). Skilled at teamwork with a willingness to continuously learn.' 
  },
  'about.education': { pt: 'Em Formação', en: 'In Progress' },
  'about.focus': { pt: 'Foco em Backend', en: 'Backend Focus' },
  'about.learning': { pt: 'Aprendizado Contínuo', en: 'Continuous Learning' },
  
  // Skills
  'skills.title': { pt: 'Habilidades', en: 'Skills' },
  'skills.subtitle': { pt: 'Tecnologias que domino', en: 'Technologies I master' },
  'skills.frontend': { pt: 'Frontend', en: 'Frontend' },
  'skills.backend': { pt: 'Backend', en: 'Backend' },
  'skills.tools': { pt: 'Ferramentas', en: 'Tools' },
  'skills.other': { pt: 'Outros', en: 'Other' },
  
  // Projects
  'projects.title': { pt: 'Projetos', en: 'Projects' },
  'projects.subtitle': { pt: 'Alguns dos meus trabalhos', en: 'Some of my work' },
  'projects.viewCode': { pt: 'Ver Código', en: 'View Code' },
  'projects.viewDemo': { pt: 'Ver Demo', en: 'View Demo' },
  'projects.project1.title': { pt: 'API REST com Node.js', en: 'REST API with Node.js' },
  'projects.project1.description': { 
    pt: 'API RESTful completa com autenticação, CRUD e integração com MongoDB.', 
    en: 'Complete RESTful API with authentication, CRUD and MongoDB integration.' 
  },
  'projects.project2.title': { pt: 'Dashboard React', en: 'React Dashboard' },
  'projects.project2.description': { 
    pt: 'Dashboard interativo construído com React e Tailwind CSS para visualização de dados.', 
    en: 'Interactive dashboard built with React and Tailwind CSS for data visualization.' 
  },
  'projects.project3.title': { pt: 'Sistema de Tarefas', en: 'Task System' },
  'projects.project3.description': { 
    pt: 'Aplicativo de gerenciamento de tarefas com Node.js e SQLite.', 
    en: 'Task management app with Node.js and SQLite.' 
  },
  'projects.project4.title': { pt: 'Projeto IoT com Arduino', en: 'IoT Project with Arduino' },
  'projects.project4.description': { 
    pt: 'Sistema de automação com Arduino integrado a uma interface web.', 
    en: 'Automation system with Arduino integrated to a web interface.' 
  },
  
  // Contact
  'contact.title': { pt: 'Contato', en: 'Contact' },
  'contact.subtitle': { pt: 'Vamos trabalhar juntos?', en: 'Let\'s work together?' },
  'contact.name': { pt: 'Nome', en: 'Name' },
  'contact.email': { pt: 'E-mail', en: 'Email' },
  'contact.message': { pt: 'Mensagem', en: 'Message' },
  'contact.send': { pt: 'Enviar Mensagem', en: 'Send Message' },
  'contact.namePlaceholder': { pt: 'Seu nome', en: 'Your name' },
  'contact.emailPlaceholder': { pt: 'seu@email.com', en: 'your@email.com' },
  'contact.messagePlaceholder': { pt: 'Sua mensagem...', en: 'Your message...' },
  'contact.cta.title': { pt: 'Vamos criar algo incrível!', en: 'Let\'s create something amazing!' },
  'contact.cta.description': { pt: 'Estou sempre aberto a novos projetos e oportunidades. Não hesite em entrar em contato!', en: 'I\'m always open to new projects and opportunities. Don\'t hesitate to get in touch!' },
  
  // Footer
  'footer.rights': { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

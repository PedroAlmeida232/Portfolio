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
    pt: 'Experiência em desenvolvimento back-end com Java e front-end com React. Interesse em desenvolvimento web e tecnologias emergentes.', 
    en: 'Experience in back-end development with Java and front-end with React. Interested in web development and emerging technologies.' 
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
    pt: 'Atualmente curso Bacharelado em Engenharia de Software na FIAP. Tenho experiência em desenvolvimento back-end com Java(intermediário) Node.js(avançado) e front-end com React (intermediário). Habilidade para trabalhar em equipe e disposição para aprender continuamente.', 
    en: 'Currently pursuing a Bachelor\'s degree in Software Engineering at FIAP. I have experience in back-end development with Java(intermediate) Node.Js(advanced) and front-end with React (intermediate). Skilled at teamwork with a willingness to continuously learn.' 
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
  'projects.project1.title': { pt: 'SafeWater - São Paulo', en: 'SafeWater - São Paulo' },
  'projects.project1.description': { 
    pt: 'Uma iniciativa dedicada ao desenvolvimento de soluções tecnológicas para prevenção e mitigação de enchentes na capital paulista. Utilizamos inovação, análise de dados e ferramentas digitais para tornar a cidade mais resiliente frente aos desafios climáticos.', 
    en: 'An initiative dedicated to developing technological solutions for flood prevention and mitigation in the city of São Paulo. We use innovation, data analysis, and digital tools to make the city more resilient to climate challenges.' 
  },
  'projects.project2.title': { pt: 'Insight Jobs', en: 'Insight Jobs' },
  'projects.project2.description': { 
    pt: 'Seu assistente de carreira inteligente. Uma solução que transforma a busca por emprego em uma experiência personalizada. Utilizamos algoritmos de filtragem para garantir que você veja apenas o que importa: a vaga certa para o seu momento profissional.', 
    en: 'Your intelligent career assistant. A solution that transforms job searching into a personalized experience. We use filtering algorithms to ensure you only see what matters: the right job for your professional moment.' 
  },
  'projects.project3.title': { pt: 'Inventory Dashboard', en: 'Inventory Dashboard' },
  'projects.project3.description': { 
    pt: 'Gerenciamento inteligente de estoque com dashboard visual e controle rigoroso de acesso multinível (Usuário, Gerente e Superior).', 
    en: 'Intelligent inventory management with a visual dashboard and strict multi-level access control (User, Manager, and Superior).' 
  },
  'projects.project4.title': { pt: 'Assistente Inteligente RAG', en: 'Intelligent RAG Assistant' },
  'projects.project4.description': { 
    pt: 'Um assistente inteligente desenvolvido com LangChain e OpenAI que utiliza a arquitetura RAG (Retrieval-Augmented Generation). O sistema processa documentos PDF, armazena-os em uma base vetorial (Chroma DB) e gera respostas precisas e contextualizadas com base no conteúdo ingerido.', 
    en: 'An intelligent assistant developed with LangChain and OpenAI using RAG (Retrieval-Augmented Generation) architecture. The system processes PDF documents, stores them in a vector database (Chroma DB), and generates accurate, contextualized responses based on the ingested content.' 
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

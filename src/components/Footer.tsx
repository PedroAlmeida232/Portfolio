import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/PedroAlmeida', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/pedro-rodrigues-almeida-', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:perodri@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Pedro Rodrigues Almeida.</span>
            <span>{t('footer.rights')}</span>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-destructive fill-current" />
            <span>e muito ☕</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

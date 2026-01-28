import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: 'E-mail',
      href: 'mailto:pedrominato232@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pedro-rodrigues-almeida-63779a227/',
    },
    {
      icon: MapPin,
      label: 'São Paulo, SP',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 px-4 bg-secondary/30"
    >
      <div className="container mx-auto max-w-lg text-center">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Informações */}
        <div className="space-y-4">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
              className="flex items-center justify-center gap-3 p-3 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <info.icon className="h-4 w-4" />
              </div>
              <span className="text-base font-medium">
                {info.label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Texto final */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-primary/90 to-accent/90 text-primary-foreground"
        >
          <h3 className="text-lg font-semibold mb-1">
            {t('contact.cta.title')}
          </h3>
          <p className="text-sm opacity-90">
            {t('contact.cta.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

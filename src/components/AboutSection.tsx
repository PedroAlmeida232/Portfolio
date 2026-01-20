import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Server, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: GraduationCap, value: 'FIAP', label: t('about.education') },
    { icon: Server, value: 'Node.js', label: t('about.focus') },
    { icon: Sparkles, value: '∞', label: t('about.learning') },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl" />
              <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">👨‍💻</div>
                    <p className="text-muted-foreground font-mono text-sm">
                      São Paulo, SP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.p2')}
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

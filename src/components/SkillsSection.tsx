import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  key: string;
  skills: Skill[];
}

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  const categories: SkillCategory[] = [
    {
      key: 'backend',
      skills: [
        { name: 'Java', level: 60, icon: '☕' },
        { name: 'Node.js', level: 90, icon: '🟢' },
        { name: 'Python', level: 75, icon: '🐍' },
        { name: 'SQLite', level: 50, icon: '🗄️' },
      ],
    },
    {
      key: 'frontend',
      skills: [
        { name: 'React', level: 60, icon: '⚛️' },
        { name: 'Tailwind CSS', level: 60, icon: '🎨' },
        { name: 'HTML', level: 70, icon: '📄' },
        { name: 'CSS', level: 50, icon: '🎭' },
      ],
    },
    {
      key: 'tools',
      skills: [
        { name: 'Git', level: 60, icon: '🔀' },
        { name: 'GitHub', level: 60, icon: '🐙' },
        { name: 'APIs REST', level: 50, icon: '🔌' },
        { name: 'Arduino', level: 60, icon: '🔧' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('skills.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">
                {t(`skills.${category.key}`)}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

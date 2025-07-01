import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Database, 
  Cloud, 
  Terminal, 
  Code, 
  Users,
  Lightbulb,
  Target,
  Heart,
  Zap,
  Award
} from 'lucide-react';

const skillCategories = {
  technical: {
    title: 'Habilidades Técnicas',
    icon: Shield,
    color: 'from-cyber-neon-cyan to-blue-500',
    skills: [
      { name: 'SOC Operations', icon: Database },
      { name: 'SIEM (Wazuh)', icon: Eye },
      { name: 'Blue Team', icon: Shield },
      { name: 'Java/Spring Boot', icon: Code },
      { name: 'Docker', icon: Terminal },
      { name: 'Linux/Windows', icon: Terminal },
      { name: 'AWS Cloud', icon: Cloud },
      { name: 'MySQL/PostgreSQL', icon: Database },
    ]
  },
  tools: {
    title: 'Ferramentas & Plataformas',
    icon: Terminal,
    color: 'from-cyber-neon-green to-green-500',
    skills: [
      { name: 'Wazuh SIEM', icon: Database },
      { name: 'Splunk (básico)', icon: Database },
      { name: 'Kali Linux', icon: Terminal },
      { name: 'AWS Services', icon: Cloud },
      { name: 'Git/GitHub', icon: Code },
      { name: 'IntelliJ IDEA', icon: Code },
      { name: 'Wireshark', icon: Eye },
      { name: 'VirtualBox/VMware', icon: Terminal },
    ]
  },
  soft: {
    title: 'Habilidades Interpessoais',
    icon: Users,
    color: 'from-cyber-neon-purple to-purple-500',
    skills: [
      { name: 'Comunicação', level: 85, icon: Users },
      { name: 'Trabalho em Equipe', level: 90, icon: Heart },
      { name: 'Resolução de Problemas', level: 85, icon: Lightbulb },
      { name: 'Pensamento Crítico', level: 80, icon: Eye },
      { name: 'Adaptabilidade', level: 95, icon: Zap },
      { name: 'Documentação', level: 85, icon: Users },
      { name: 'Aprendizado Rápido', level: 90, icon: Target },
      { name: 'Atenção aos Detalhes', level: 85, icon: Eye },
    ]
  }
};

const SkillTag = ({ skill, category, index }: { skill: any; category: any; index: number }) => {
  const Icon = skill.icon;
  const colorClass = 
    category.title === 'Habilidades Técnicas' ? 'text-cyber-neon-cyan' :
    category.title === 'Ferramentas & Plataformas' ? 'text-cyber-neon-green' :
    'text-cyber-neon-purple';

  return (
    <motion.div
      key={skill.name}
      className="flex items-center space-x-2 bg-cyber-accent rounded-lg px-4 py-2 border border-cyber-border hover-lift"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Icon className={`h-5 w-5 ${colorClass}`} />
      <span className="font-semibold text-cyber-text-primary">
        {skill.name}
      </span>
    </motion.div>
  );
};

const SkillCard = ({ skill, category, index }: { skill: any; category: any; index: number }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      key={skill.name}
      className="bg-cyber-accent rounded-lg p-6 border border-cyber-border hover-lift"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-cyber-text-primary">
          {skill.name}
        </h3>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-cyber-text-secondary">Nível</span>
          <span className="text-sm font-semibold text-cyber-neon-cyan">
            {skill.level}%
          </span>
        </div>
        <div className="w-full bg-cyber-border rounded-full h-2">
          <motion.div
            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillCategories>('technical');
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const currentCategory = skillCategories[activeCategory];
  const softTagNames = ['Aprendizado Rápido', 'Atenção aos Detalhes'];
  
  const softCardSkills = activeCategory === 'soft' 
    ? currentCategory.skills.filter(s => !softTagNames.includes(s.name)) 
    : [];
  const softTagSkills = activeCategory === 'soft' 
    ? currentCategory.skills.filter(s => softTagNames.includes(s.name)) 
    : [];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyber-primary via-cyber-secondary to-cyber-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Meu <span className="gradient-text">Arsenal</span> de Habilidades
            </h1>
            <p className="text-xl text-cyber-text-secondary leading-relaxed mb-8">
              Combinação de background em desenvolvimento, conhecimentos em segurança 
              e habilidades interpessoais para crescer na área de cibersegurança.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-cyber-accent border border-cyber-border">
                <Shield className="h-8 w-8 text-cyber-neon-cyan mx-auto mb-3" />
                <h3 className="text-lg font-bold text-cyber-text-primary">Técnicas</h3>
                <p className="text-cyber-text-secondary text-sm">Conhecimentos em segurança e desenvolvimento</p>
              </div>
              <div className="p-6 rounded-lg bg-cyber-accent border border-cyber-border">
                <Terminal className="h-8 w-8 text-cyber-neon-green mx-auto mb-3" />
                <h3 className="text-lg font-bold text-cyber-text-primary">Ferramentas</h3>
                <p className="text-cyber-text-secondary text-sm">Experiência com plataformas e tecnologias</p>
              </div>
              <div className="p-6 rounded-lg bg-cyber-accent border border-cyber-border">
                <Users className="h-8 w-8 text-cyber-neon-purple mx-auto mb-3" />
                <h3 className="text-lg font-bold text-cyber-text-primary">Interpessoais</h3>
                <p className="text-cyber-text-secondary text-sm">Soft skills para comunicação e colaboração</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <motion.div
            ref={skillsRef}
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {Object.entries(skillCategories).map(([key, category]) => {
              const Icon = category.icon;
              const isActive = activeCategory === key;
              
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key as keyof typeof skillCategories)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isActive 
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-cyber-accent text-cyber-text-secondary hover:bg-cyber-border hover:text-cyber-text-primary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                  <span>{category.title}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Grid */}
          {activeCategory !== 'soft' && (
            <motion.div
              key={activeCategory}
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {currentCategory.skills.map((skill, index) => (
                <SkillTag key={skill.name} skill={skill} category={currentCategory} index={index} />
              ))}
            </motion.div>
          )}

          {activeCategory === 'soft' && (
            <motion.div
              key="soft-skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {softCardSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} category={currentCategory} index={index} />
                ))}
              </div>
              {softTagSkills.length > 0 && (
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {softTagSkills.map((skill, index) => (
                    <SkillTag key={skill.name} skill={skill} category={currentCategory} index={index} />
                  ))}
                </div>
              )}
            </motion.div>
          )}

        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-cyber-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Certificações</span> & Credenciais
            </h2>
            <p className="text-cyber-text-secondary text-lg max-w-2xl mx-auto">
              Validação das minhas competências e meu plano de desenvolvimento contínuo.
            </p>
          </motion.div>

          {/* Current Certification */}
          <div className="mb-16">
              <h3 className="text-2xl font-bold text-cyber-text-primary text-center mb-8">Certificação Atual</h3>
              <div className="flex justify-center">
                  <motion.div
                      className="bg-cyber-accent rounded-lg p-6 border border-cyber-border hover-lift text-center max-w-sm"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                  >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                          <Award className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-cyber-text-primary mb-2">
                          AWS Certified Cloud Practitioner
                      </h3>
                      <p className="text-cyber-text-secondary mb-2">Amazon Web Services</p>
                      <p className="text-cyber-text-secondary text-sm mb-3">Set 2024</p>
                      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-cyber-success text-white">
                          Obtida
                      </span>
                  </motion.div>
              </div>
          </div>

          {/* Roadmap */}
          <div>
              <h3 className="text-2xl font-bold text-cyber-text-primary text-center mb-10">Roadmap de Certificações (Metas)</h3>
              <div className="max-w-3xl mx-auto">
                  <ol className="relative border-l-2 border-cyber-border space-y-10">
                      {[
                        {
                          name: 'AWS Solutions Architect – Associate',
                          goal: '2025',
                          icon: Cloud,
                        },
                        {
                          name: 'Cloud Computing Engineer – IA',
                          goal: '2026',
                          icon: Lightbulb,
                        },
                        {
                          name: 'CompTIA Security+ (ou CISA+)',
                          goal: '2026',
                          icon: Shield,
                        },
                      ].map((cert, index) => (
                          <motion.li
                              key={cert.name}
                              className="ml-8"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.2 }}
                              viewport={{ once: true }}
                          >
                              <span className="absolute flex items-center justify-center w-8 h-8 bg-cyber-accent rounded-full -left-4 border-2 border-cyber-border">
                                  <Target className="w-4 h-4 text-cyber-neon-cyan" />
                              </span>
                              <h4 className="flex items-center mb-1 text-lg font-semibold text-cyber-text-primary">
                                  {cert.name}
                                  <span className="bg-cyber-neon-cyan text-cyber-primary text-sm font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">Meta {cert.goal}</span>
                              </h4>
                              <p className="text-base font-normal text-cyber-text-secondary">
                                  Certificação Meta - Foco em aprimoramento contínuo.
                              </p>
                          </motion.li>
                      ))}
                  </ol>
              </div>
          </div>

        </div>
      </section>
    </div>
  );
};
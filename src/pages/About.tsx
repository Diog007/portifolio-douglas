import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Target, Heart, Shield, Code } from 'lucide-react';

const journey = [
  {
    year: '2016',
    role: 'Frentista',
    company: 'Posto de Combustível',
    description: 'Primeiro emprego. Aprendi responsabilidade, atendimento ao cliente e trabalho em equipe.',
    skills: ['Responsabilidade', 'Atendimento', 'Pontualidade'],
  },
  {
    year: '2018',
    role: 'Caixa',
    company: 'Posto de Combustível',
    description: 'Evolução para gestão de caixa e introdução aos primeiros sistemas digitais.',
    skills: ['Gestão', 'Sistemas', 'Organização'],
  },
  {
    year: '2019',
    role: 'Motorista Autônomo',
    company: 'Transporte Refrigerado',
    description: 'Responsabilidade com logística e atendimento especializado ao cliente.',
    skills: ['Logística', 'Autonomia', 'Responsabilidade'],
  },
  {
    year: '2022',
    role: 'Desenvolvedor Java',
    company: 'Freelancer & CLT',
    description: 'Descoberta da paixão por tecnologia. Desenvolvimento de APIs e microsserviços.',
    skills: ['Java', 'Spring Boot', 'Docker'],
  },
  {
    year: '2024',
    role: 'Foco em Segurança',
    company: 'Estudos & Home Lab',
    description: 'Transição para segurança cibernética. Montagem de home lab e estudos focados.',
    skills: ['Blue Team', 'SIEM', 'Análise'],
  },
  {
    year: '2025',
    role: 'Analista SOC N1',
    company: 'Darede',
    description: 'Primeira experiência profissional em SOC. Aprendizado prático em ambiente real.',
    skills: ['SOC', 'Triagem', 'SIEM'],
  },
];

const values = [
  {
    icon: Target,
    title: 'Aprendizado Contínuo',
    description: 'Sempre em busca de novos conhecimentos e habilidades para evoluir na área de segurança.',
  },
  {
    icon: Heart,
    title: 'Paixão por Segurança',
    description: 'Cada desafio é uma oportunidade de aprender e contribuir para um ambiente digital mais seguro.',
  },
  {
    icon: Shield,
    title: 'Dedicação',
    description: 'Comprometimento total com cada projeto, sempre buscando entregar o melhor resultado.',
  },
];

export const About: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [journeyRef, journeyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
              Minha <span className="gradient-text">Jornada</span> Profissional
            </h1>
            <p className="text-xl text-cyber-text-secondary leading-relaxed mb-8">
              Com uma base sólida construída em diversas áreas de atuação, minha carreira é marcada por uma transição estratégica e dedicada à tecnologia e segurança cibernética. Cada experiência contribuiu para desenvolver uma perspectiva única e um conjunto de habilidades que aplico hoje para enfrentar os desafios do universo digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-cyber-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={journeyRef}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={journeyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Minha <span className="gradient-text">Evolução</span>
            </h2>
            <p className="text-cyber-text-secondary text-lg max-w-2xl mx-auto">
              Cada experiência contribuiu para formar o profissional que sou hoje
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-cyber-neon-cyan"></div>

            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={journeyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyber-neon-cyan rounded-full border-4 border-cyber-primary"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-cyber-accent rounded-lg p-6 border border-cyber-border hover-lift">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-cyber-neon-cyan font-bold text-lg">{item.year}</span>
                      <Briefcase className="h-5 w-5 text-cyber-neon-green" />
                    </div>
                    <h3 className="text-xl font-bold text-cyber-text-primary mb-2">{item.role}</h3>
                    <p className="text-cyber-neon-green font-semibold mb-3">{item.company}</p>
                    <p className="text-cyber-text-secondary mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-cyber-primary text-cyber-neon-cyan text-sm rounded-full border border-cyber-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={valuesRef}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meus <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-cyber-text-secondary text-lg max-w-2xl mx-auto">
              Princípios que guiam minha conduta profissional e pessoal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-8 rounded-lg bg-cyber-accent border border-cyber-border hover-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-green">
                    <value.icon className="h-8 w-8 text-cyber-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-cyber-text-primary mb-4">{value.title}</h3>
                <p className="text-cyber-text-secondary leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
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
              <span className="gradient-text">Formação</span> Acadêmica
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-cyber-accent rounded-lg p-8 border border-cyber-border hover-lift"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-cyber-neon-purple to-cyber-neon-cyan">
                  <GraduationCap className="h-8 w-8 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyber-text-primary">
                    Bacharelado em Sistemas de Informação
                  </h3>
                  <p className="text-cyber-neon-green font-semibold">UNINOVE - Universidade Nove de Julho</p>
                  <p className="text-cyber-text-secondary">2022 - 2026 (6º semestre em curso)</p>
                </div>
              </div>
              <p className="text-cyber-text-secondary mb-6">
                Formação em desenvolvimento de software, arquitetura de sistemas, 
                banco de dados e segurança da informação. Base sólida para compreender 
                vulnerabilidades e implementar soluções de segurança eficazes.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Programação', 'Banco de Dados', 'Redes', 'Segurança'].map((subject) => (
                  <div key={subject} className="text-center p-3 bg-cyber-primary rounded-lg">
                    <span className="text-cyber-neon-cyan font-semibold">{subject}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
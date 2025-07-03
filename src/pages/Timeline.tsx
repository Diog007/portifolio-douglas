import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  MapPin, 
  Briefcase, 
  Award, 
  Target, 
  TrendingUp,
  Users,
  Code,
  Shield,
  GraduationCap
} from 'lucide-react';

const timelineEvents = [
  {
    id: 1,
    year: '2025',
    title: 'Analista SOC N1 (Assistente)',
    company: 'Darede',
    location: 'São Paulo, SP',
    period: 'Jul 2025 - Presente',
    type: 'work',
    description: 'Primeira experiência prática em segurança operacional, atuando na triagem de alertas, escalonamento de incidentes e ajuste de regras no SIEM. Atuação em uma das principais consultorias de cibersegurança do Brasil, reconhecida como a única com o mais alto nível de parceria oficial com a AWS no país.',
    achievements: [
      'Primeiro mês de experiência em SOC',
      'Triagem de alertas de segurança',
      'Aprendizado de ferramentas SIEM'
    ],
    skills: ['SIEM', 'Triagem de Alertas', 'Escalonamento'],
    icon: Shield,
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 2,
    year: '2023-2024',
    title: 'Desenvolvedor Backend Java',
    company: 'Ambiente Comunicação',
    location: 'São Paulo, SP',
    period: 'Mar 2023 - Jan 2024',
    type: 'work',
    description: 'Desenvolvimento de APIs REST com Spring Boot, containerização com Docker e trabalho com bancos MySQL/PostgreSQL.',
    achievements: [
      'APIs Spring Boot em produção',
      'Implementação de testes JUnit/Mockito',
      'Documentação técnica de processos',
      'Trabalho com Docker e bancos relacionais'
    ],
    skills: ['Java', 'Spring Boot', 'Docker', 'MySQL', 'PostgreSQL'],
    icon: Code,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 3,
    year: '2022-2023',
    title: 'Desenvolvedor Java Autônomo',
    company: 'Freelancer',
    location: 'São Paulo, SP',
    period: 'Nov 2022 - Jan 2023',
    type: 'work',
    description: 'Desenvolvimento de microsserviços, integração com RabbitMQ, projetos PlanEventos e CypherCard.',
    achievements: [
      'Microsserviços com Spring Boot',
      'Integração com RabbitMQ',
      'Projetos PlanEventos e CypherCard',
      'Arquitetura de sistemas distribuídos'
    ],
    skills: ['Microsserviços', 'RabbitMQ', 'Spring Boot', 'Arquitetura'],
    icon: Code,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 4,
    year: '2022',
    title: 'Início da Graduação',
    company: 'UNINOVE',
    location: 'São Paulo, SP',
    period: '2022 - 2026 (em curso)',
    type: 'education',
    description: 'Bacharelado em Sistemas de Informação - atualmente no 6º semestre, com foco crescente em segurança da informação.',
    achievements: [
      'Cursando 6º semestre',
      'Foco em Segurança da Informação',
      'Projetos acadêmicos em desenvolvimento',
      'Base sólida em programação e sistemas'
    ],
    skills: ['Sistemas de Informação', 'Segurança', 'Programação'],
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 5,
    year: '2019-2022',
    title: 'Motorista Autônomo',
    company: 'Autônomo',
    location: 'São Paulo, SP',
    period: 'Out 2019 - Jan 2022',
    type: 'work',
    description: 'Transporte refrigerado (carnes & laticínios) - logística e atendimento ao cliente.',
    achievements: [
      'Gestão de rotas e logística',
      'Atendimento especializado ao cliente',
      'Responsabilidade com produtos refrigerados',
      'Pontualidade e confiabilidade'
    ],
    skills: ['Logística', 'Atendimento ao Cliente', 'Responsabilidade'],
    icon: TrendingUp,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 6,
    year: '2018-2019',
    title: 'Caixa - Posto de Combustível',
    company: 'Posto de Combustível',
    location: 'São Paulo, SP',
    period: 'Abr 2018 - Dez 2019 (8 meses)',
    type: 'work',
    description: 'Gestão de caixa, suporte administrativo e introdução a processos digitais.',
    achievements: [
      'Gestão de caixa e vendas',
      'Suporte administrativo',
      'Introdução a sistemas digitais',
      'Controle de estoque básico'
    ],
    skills: ['Gestão de Caixa', 'Administração', 'Sistemas'],
    icon: Briefcase,
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 7,
    year: '2016-2018',
    title: 'Frentista - Posto de Combustível',
    company: 'Posto de Combustível',
    location: 'São Paulo, SP',
    period: 'Set 2016 - Ago 2018',
    type: 'work',
    description: 'Abastecimento, vendas e treinamento de novos colegas — zero acidentes.',
    achievements: [
      'Zero acidentes de trabalho',
      'Treinamento de novos funcionários',
      'Excelência em atendimento',
      'Responsabilidade e pontualidade'
    ],
    skills: ['Atendimento ao Cliente', 'Treinamento', 'Segurança'],
    icon: Users,
    color: 'from-emerald-500 to-teal-600'
  }
];

export const Timeline: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
              Minha <span className="gradient-text">Jornada</span>
            </h1>
            <p className="text-xl text-cyber-text-secondary leading-relaxed mb-8">
              Uma timeline da minha evolução profissional, desde os primeiros 
              passos até iniciar a carreira em segurança cibernética.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-neon-cyan">1</div>
                <div className="text-cyber-text-secondary">Mês em SOC</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-neon-green">6º</div>
                <div className="text-cyber-text-secondary">Semestre</div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-neon-cyan via-cyber-neon-green to-cyber-neon-purple"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${event.color} p-1`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-full h-full bg-cyber-primary rounded-full flex items-center justify-center">
                      <event.icon className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    className="bg-cyber-accent rounded-lg p-6 border border-cyber-border hover-lift"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}>
                        {event.year}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.type === 'work' ? 'bg-cyber-neon-cyan text-cyber-primary' :
                        'bg-cyber-neon-green text-cyber-primary'
                      }`}>
                        {event.type === 'work' ? 'Trabalho' : 'Educação'}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-cyber-text-primary mb-2">
                      {event.title}
                    </h3>

                    <div className="flex items-center space-x-4 mb-2">
                      <div className="flex items-center space-x-2 text-cyber-neon-green">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-semibold">{event.company}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-cyber-text-secondary">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="text-cyber-text-secondary text-sm mb-4">
                      {event.period}
                    </div>

                    <p className="text-cyber-text-secondary mb-6">
                      {event.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyber-text-primary mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-cyber-neon-cyan" />
                        Principais Conquistas
                      </h4>
                      <ul className="space-y-2">
                        {event.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-cyber-neon-cyan rounded-full mt-2 flex-shrink-0" />
                            <span className="text-cyber-text-secondary text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-cyber-text-primary mb-3">
                        Habilidades Desenvolvidas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {event.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-cyber-primary text-cyber-neon-cyan text-xs rounded-full border border-cyber-border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO MODIFICADA --- */}
      <section className="py-20 bg-cyber-secondary ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Próximos <span className="gradient-text">Objetivos</span>
            </h2>
            <p className="text-cyber-text-secondary text-lg max-w-2xl mx-auto">
              Metas para continuar evoluindo na área de segurança cibernética
            </p>
          </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-center ">
            {[
              // Card da Esquerda
              {
                title: 'CrowdStrike Certified Falcon Responder (CCFR)',
                description: 'Certificação focada em resposta a incidentes e análise forense com a plataforma Falcon.',
                timeline: '2025',
                icon: Shield, // Ícone de escudo, relevante para segurança
                color: 'from-blue-500 to-indigo-600'
              },
              // Card da Direita
              {
                title: 'Certificação Security+',
                description: 'Obter a certificação CompTIA Security+ para validar conhecimentos fundamentais.',
                timeline: '2026',
                icon: Award,
                color: 'from-red-500 to-pink-600'
              }
            ].map((goal, index) => (
              <motion.div
                key={goal.title}
                className="bg-cyber-accent rounded-lg p-6 border border-cyber-border hover-lift text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${goal.color}`}>
                    <goal.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-cyber-text-primary mb-2">
                  {goal.title}
                </h3>
                <p className="text-cyber-text-secondary mb-4">
                  {goal.description}
                </p>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${goal.color} text-white`}>
                  Meta: {goal.timeline}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Github,
  Shield,
  Code,
  Server,
  Layers // Ícone para Full Stack
} from 'lucide-react';

const projects = [
  // Projetos de Segurança (Destaque)
  {
    id: 1,
    title: 'Projeto SOC em Ambiente Realista',
    description: 'Simulação de um SOC com máquinas para Servidor (Honeypot), Monitoramento (Splunk/Wazuh) e Ataque. O projeto aborda o ciclo completo de segurança, da invasão à resposta, usando ferramentas como Nmap, Nessus e SQLMap.',
    image: '/security.png',
    tags: ['SOC', 'Splunk', 'Wazuh', 'Red Team', 'Blue Team', 'SIEM'],
    category: 'security',
    github: 'https://www.linkedin.com/in/douglascloudsec/details/projects/',
    featured: true,
  },
  {
    id: 2,
    title: 'Home Lab SOC/SIEM',
    description: 'Ambiente de laboratório para simulação, detecção e resposta a incidentes. Utiliza Wazuh como SIEM, com endpoints Windows/Linux e uma máquina Kali para testes.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Wazuh', 'SIEM', 'Blue Team', 'Virtualization', 'Linux'],
    category: 'security',
    github: 'https://github.com/devDouglasN/homelab-soc',
    featured: true,
  },
  // Novos Projetos de Programação (Não são destaque)
  {
    id: 3,
    title: 'ReadVista Frontend',
    description: 'Frontend para uma API de gerenciamento de bibliotecas, com interfaces para administradores e clientes, incluindo toda a lógica de negócio. O sistema possui regras como limite de empréstimos e horários de funcionamento.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Angular', 'Angular Material', 'Auth0 JWT', 'Autenticação'],
    category: 'frontend',
    github: 'https://github.com/devDouglasN/',
    featured: false,
  },
  {
    id: 4,
    title: 'InventoryFlow',
    description: 'Backend para gerenciamento de logística, utilizando Spring Boot e Apache Kafka para comunicação assíncrona. A aplicação processa e armazena informações sobre pessoas e seus estoques de responsabilidades.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Java', 'Spring Boot', 'Apache Kafka', 'Confluent Avro'],
    category: 'backend',
    github: 'https://github.com/devDouglasN/',
    featured: false,
  },
  {
    id: 5,
    title: 'PlanEventos',
    description: 'Backend para gerenciar eventos, participantes e organizadores. A API permite o cadastro completo de eventos, com funcionalidades de CRUD para eventos, participantes e organizadores.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Swagger API', 'Hibernate'],
    category: 'backend',
    github: 'https://github.com/devDouglasN/',
    featured: false,
  },
  {
    id: 6,
    title: 'SustentaVida',
    description: 'Plataforma para fornecer produtos alimentícios e de higiene para pessoas em situação de rua, com foco em qualidade, sustentabilidade e redução do impacto ambiental.',
    image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Java', 'Spring Boot', 'Hibernate', 'JWT', 'MySQL', 'OpenAPI'],
    category: 'backend',
    github: 'https://github.com/devDouglasN/',
    featured: false,
  },
  {
    id: 7,
    title: 'ProTechDesk (Frontend)',
    description: 'Interface de um sistema de Help Desk para cadastro de clientes e técnicos, registro e atendimento de chamados. Foco na experiência do usuário e interatividade com o backend.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Angular', 'TypeScript', 'Angular Material', 'Autenticação'],
    category: 'frontend',
    github: 'https://github.com/devDouglasN/',
    featured: false,
  },
  {
    id: 8,
    title: 'CypherCard',
    description: 'API de avaliação de crédito e emissão de cartões com base na renda. Utiliza microserviços, Docker para execução, RabbitMQ para mensageria, Eureka para service discovery e Keycloak para segurança.',
    image: 'https://images.pexels.com/photos/5775854/pexels-photo-5775854.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Java', 'Spring Cloud', 'Docker', 'RabbitMQ', 'Microsserviços'],
    category: 'backend',
    github: 'https://github.com/devDouglasN/',
    featured: false,
  },
  {
    id: 9,
    title: 'ReadVista (Backend)',
    description: 'API de gerenciamento de bibliotecas para facilitar o processo de empréstimo e devolução de livros, com regras de negócio como restrição de empréstimos e horários de funcionamento.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Swagger API', 'JPA'],
    category: 'backend',
    github: 'https://github.com/devDouglasN/',
    featured: false,
  },
  {
    id: 10,
    title: 'UserRegistration App',
    description: 'Aplicação web full stack para cadastro, alteração e seleção de candidatos para vagas de emprego, utilizando um modelo monorepo baseado em MVC para agilizar o processo de recrutamento.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Java', 'Spring Boot', 'JPA', 'Thymeleaf', 'Bootstrap'],
    category: 'fullstack',
    github: 'https://github.com/devDouglasN/',
    featured: false,
  },
  {
    id: 11,
    title: 'Clinic Med.Pro',
    description: 'API para uma clínica médica que oferece um CRUD completo para monitorar o cadastro de médicos, pacientes e o agendamento de consultas.',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'JWT'],
    category: 'backend',
    github: 'https://github.com/devDouglasN/',
    featured: false,
  },
  {
    id: 12,
    title: 'ProTechDesk (Backend)',
    description: 'Sistema de Help Desk que permite o cadastro e exclusão de clientes e técnicos, possibilitando que clientes registrem chamadas e os técnicos as atendam.',
    image: 'https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'JWT'],
    category: 'backend',
    github: 'https://github.com/devDouglasN/',
    featured: false,
  },
  {
    id: 13,
    title: 'Safe Exchange',
    description: 'Aplicação web full stack para transações de pedidos e ofertas. Usuários podem registrar pedidos e outros podem fazer ofertas, com gestão de contas e controle de produtos. Utiliza Spring Security para segurança.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'Bootstrap', 'Spring Security'],
    category: 'fullstack',
    github: 'https://github.com/devDouglasN/safe_exchange',
    featured: false,
  },
];

const categories = [
    { id: 'all', name: 'Todos', icon: Shield },
    { id: 'security', name: 'Segurança', icon: Shield },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'fullstack', name: 'Full Stack', icon: Layers },
];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects = selectedCategory === 'all'
    ? projects.filter(p => !p.featured)
    : projects.filter(project => project.category === selectedCategory && !project.featured);

  const featuredProjects = projects.filter(project => project.featured);

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
              Meus <span className="gradient-text">Projetos</span>
            </h1>
            <p className="text-xl text-cyber-text-secondary leading-relaxed mb-8">
              Soluções práticas desenvolvidas para enfrentar desafios da segurança
              cibernética e do desenvolvimento de software, baseadas em estudos e experiências reais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
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
              Projetos em <span className="gradient-text">Destaque</span>
            </h2>
            <p className="text-cyber-text-secondary text-lg max-w-2xl mx-auto">
              Principais projetos que demonstram minha aplicação prática de conhecimentos em Segurança.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-cyber-accent rounded-lg overflow-hidden border border-cyber-border hover-lift flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyber-neon-cyan text-cyber-primary px-3 py-1 rounded-full text-sm font-semibold">
                      Destaque
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-cyber-text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-cyber-text-secondary mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-cyber-primary text-cyber-neon-cyan text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-auto pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-cyber-primary text-cyber-text-primary hover:bg-cyber-border transition-colors rounded-lg"
                      >
                        <Github className="h-4 w-4" />
                        <span>Ver Projeto</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={projectsRef}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Outros <span className="gradient-text">Projetos</span>
            </h2>
            <p className="text-cyber-text-secondary text-lg max-w-2xl mx-auto mb-8">
              Explore meu portfólio completo de projetos de desenvolvimento.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => {
                 if (category.id === 'security') return null; // Oculta o filtro de segurança
                 const Icon = category.icon;
                 const isActive = selectedCategory === category.id;

                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-cyber-neon-cyan text-cyber-primary'
                        : 'bg-cyber-accent text-cyber-text-secondary hover:bg-cyber-border hover:text-cyber-text-primary'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{category.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-cyber-accent rounded-lg overflow-hidden border border-cyber-border hover-lift flex flex-col"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-cyber-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-cyber-text-secondary mb-4 text-sm flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-cyber-primary text-cyber-neon-cyan text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3 mt-auto pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-cyber-primary text-cyber-text-primary hover:bg-cyber-border transition-colors rounded-lg"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
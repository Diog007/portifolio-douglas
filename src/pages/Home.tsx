import React from 'react';
import { Hero } from '../components/Hero';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Code, GraduationCap, Clock } from 'lucide-react';

const stats = [
  { icon: GraduationCap, label: 'Semestre Atual', value: '6º', color: 'text-cyber-neon-cyan' },
  { icon: Shield, label: 'Experiência SOC', value: '1 mês', color: 'text-cyber-neon-green' },
  { icon: Code, label: 'Background Dev', value: '2+ anos', color: 'text-cyber-neon-purple' },
  { icon: Clock, label: 'Foco Blue Team', value: '1 ano', color: 'text-cyber-warning' },
];

export const Home: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 bg-cyber-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-lg bg-cyber-accent border border-cyber-border hover-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-cyber-primary">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <h3 className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </h3>
                <p className="text-cyber-text-secondary font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Home Lab Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="gradient-text">Home Lab SOC</span> em Evolução
              </h2>
              <p className="text-cyber-text-secondary text-lg mb-6 leading-relaxed">
                Ambiente caseiro com 3 máquinas físicas (Servidor, SOC, Ataque) para treinar 
                detecção e resposta. Documentação pública no GitHub com configurações, 
                playbooks e cenários de simulação.
              </p>
              <div className="space-y-4">
                {[
                  'Wazuh SIEM configurado para monitoramento',
                  'Máquina atacante com Kali Linux',
                  'Servidor Windows com logs estruturados',
                  'Documentação completa de setup e uso',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-cyber-neon-cyan rounded-full" />
                    <span className="text-cyber-text-secondary">{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <a
                  href="https://www.linkedin.com/in/douglascloudsec/details/projects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber inline-flex items-center space-x-2 px-6 py-3"
                >
                  <Shield className="h-5 w-5" />
                  <span>Ver repositório do Lab</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-cyber-accent rounded-lg p-8 border border-cyber-border">
                <div className="font-mono text-sm text-cyber-neon-green mb-4">
                  $ cat /home/douglas/lab-status.txt
                </div>
                <div className="space-y-2 text-cyber-text-secondary">
                  <div className="text-cyber-neon-cyan">Name: Douglas Nascimento</div>
                  <div className="text-cyber-text-primary">Role: SOC Analyst N1 (Trainee)</div>
                  <div className="text-cyber-text-primary">Education: UNINOVE - 6º Semestre</div>
                  <div className="text-cyber-text-primary">Lab: [Wazuh, Kali, Windows Server]</div>
                  <div className="text-cyber-text-primary">Certifications: [AWS-CCP]</div>
                  <div className="text-cyber-neon-green">Status: Learning & Growing</div>
                  <div className="text-cyber-text-secondary">// First month in SOC operations</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
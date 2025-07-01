import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Eye, Lock, UserCheck, Mail, Calendar } from 'lucide-react';

export const Privacy: React.FC = () => {
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
              Política de <span className="gradient-text">Privacidade</span>
            </h1>
            <p className="text-xl text-cyber-text-secondary leading-relaxed mb-8">
              Transparência total sobre como seus dados são coletados, utilizados e protegidos. 
              Sua privacidade é nossa prioridade.
            </p>
            <div className="flex justify-center">
              <div className="bg-cyber-accent rounded-lg p-6 border border-cyber-border">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-cyber-neon-cyan" />
                  <span className="text-cyber-text-primary font-semibold">
                    Última atualização: 15 de Janeiro de 2024
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-cyber-text-primary mb-4 flex items-center">
                <UserCheck className="h-6 w-6 mr-3 text-cyber-neon-cyan" />
                Introdução
              </h2>
              <div className="bg-cyber-accent rounded-lg p-6 border border-cyber-border">
                <p className="text-cyber-text-secondary leading-relaxed">
                  Esta Política de Privacidade descreve como Douglas Nascimento ("eu", "meu" ou "nosso") 
                  coleta, usa e protege suas informações quando você visita meu portfólio pessoal 
                  (douglascloudsec.dev) ou utiliza meus serviços de consultoria em segurança cibernética.
                </p>
                <p className="text-cyber-text-secondary leading-relaxed mt-4">
                  Ao utilizar este site, você concorda com a coleta e uso de informações de acordo 
                  com esta política. Esta política está em conformidade com a Lei Geral de Proteção 
                  de Dados (LGPD) do Brasil.
                </p>
              </div>
            </motion.div>

            {/* Data Collection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-cyber-text-primary mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-3 text-cyber-neon-green" />
                Informações que Coletamos
              </h2>
              <div className="space-y-6">
                <div className="bg-cyber-accent rounded-lg p-6 border border-cyber-border">
                  <h3 className="text-lg font-semibold text-cyber-text-primary mb-3">
                    Informações Fornecidas Voluntariamente
                  </h3>
                  <ul className="space-y-2 text-cyber-text-secondary">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cyber-neon-cyan rounded-full mt-2 flex-shrink-0" />
                      <span>Nome e informações de contato quando você preenche formulários</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cyber-neon-cyan rounded-full mt-2 flex-shrink-0" />
                      <span>Mensagens enviadas através do formulário de contato</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cyber-neon-cyan rounded-full mt-2 flex-shrink-0" />
                      <span>Informações sobre projetos ou necessidades de consultoria</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cyber-neon-cyan rounded-full mt-2 flex-shrink-0" />
                      <span>Endereço de email para newsletter (quando solicitado)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-cyber-accent rounded-lg p-6 border border-cyber-border">
                  <h3 className="text-lg font-semibold text-cyber-text-primary mb-3">
                    Informações Coletadas Automaticamente
                  </h3>
                  <ul className="space-y-2 text-cyber-text-secondary">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cyber-neon-green rounded-full mt-2 flex-shrink-0" />
                      <span>Endereço IP e informações do dispositivo</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cyber-neon-green rounded-full mt-2 flex-shrink-0" />
                      <span>Tipo de navegador e sistema operacional</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cyber-neon-green rounded-full mt-2 flex-shrink-0" />
                      <span>Páginas visitadas e tempo de permanência</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cyber-neon-green rounded-full mt-2 flex-shrink-0" />
                      <span>Referrer (site de origem da visita)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Data Usage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-cyber-text-primary mb-4 flex items-center">
                <Lock className="h-6 w-6 mr-3 text-cyber-neon-purple" />
                Como Utilizamos suas Informações
              </h2>
              <div className="bg-cyber-accent rounded-lg p-6 border border-cyber-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-cyber-text-primary mb-3">
                      Finalidades Principais
                    </h3>
                    <ul className="space-y-2 text-cyber-text-secondary">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-cyan rounded-full mt-2 flex-shrink-0" />
                        <span>Responder às suas mensagens e solicitações</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-cyan rounded-full mt-2 flex-shrink-0" />
                        <span>Fornecer serviços de consultoria solicitados</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-cyan rounded-full mt-2 flex-shrink-0" />
                        <span>Enviar newsletter (apenas com consentimento)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-cyan rounded-full mt-2 flex-shrink-0" />
                        <span>Melhorar a experiência do usuário no site</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyber-text-primary mb-3">
                      Finalidades Secundárias
                    </h3>
                    <ul className="space-y-2 text-cyber-text-secondary">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-green rounded-full mt-2 flex-shrink-0" />
                        <span>Análise de tráfego e comportamento do usuário</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-green rounded-full mt-2 flex-shrink-0" />
                        <span>Prevenção de fraude e atividades maliciosas</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-green rounded-full mt-2 flex-shrink-0" />
                        <span>Cumprimento de obrigações legais</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-green rounded-full mt-2 flex-shrink-0" />
                        <span>Melhoria dos serviços oferecidos</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Data Protection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-cyber-text-primary mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-cyber-neon-cyan" />
                Proteção de Dados
              </h2>
              <div className="bg-cyber-accent rounded-lg p-6 border border-cyber-border">
                <p className="text-cyber-text-secondary leading-relaxed mb-4">
                  Como especialista em segurança cibernética, implemento as melhores práticas 
                  de segurança para proteger suas informações:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-cyber-text-primary mb-3">
                      Medidas Técnicas
                    </h3>
                    <ul className="space-y-2 text-cyber-text-secondary">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-cyan rounded-full mt-2 flex-shrink-0" />
                        <span>Criptografia SSL/TLS para todas as comunicações</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-cyan rounded-full mt-2 flex-shrink-0" />
                        <span>Armazenamento seguro com criptografia em repouso</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-cyan rounded-full mt-2 flex-shrink-0" />
                        <span>Controles de acesso rigorosos</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-cyan rounded-full mt-2 flex-shrink-0" />
                        <span>Monitoramento contínuo de segurança</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyber-text-primary mb-3">
                      Medidas Organizacionais
                    </h3>
                    <ul className="space-y-2 text-cyber-text-secondary">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-green rounded-full mt-2 flex-shrink-0" />
                        <span>Política de retenção de dados definida</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-green rounded-full mt-2 flex-shrink-0" />
                        <span>Acesso limitado apenas ao necessário</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-green rounded-full mt-2 flex-shrink-0" />
                        <span>Auditorias regulares de segurança</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyber-neon-green rounded-full mt-2 flex-shrink-0" />
                        <span>Plano de resposta a incidentes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* User Rights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-cyber-text-primary mb-4 flex items-center">
                <UserCheck className="h-6 w-6 mr-3 text-cyber-neon-purple" />
                Seus Direitos (LGPD)
              </h2>
              <div className="bg-cyber-accent rounded-lg p-6 border border-cyber-border">
                <p className="text-cyber-text-secondary leading-relaxed mb-4">
                  De acordo com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Confirmação da existência de tratamento',
                    'Acesso aos dados',
                    'Correção de dados incompletos ou inexatos',
                    'Anonimização ou eliminação de dados',
                    'Portabilidade dos dados',
                    'Eliminação dos dados tratados com consentimento',
                    'Informação sobre compartilhamento',
                    'Revogação do consentimento'
                  ].map((right, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cyber-neon-purple rounded-full mt-2 flex-shrink-0" />
                      <span className="text-cyber-text-secondary">{right}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-cyber-text-primary mb-4 flex items-center">
                <Mail className="h-6 w-6 mr-3 text-cyber-neon-cyan" />
                Contato para Questões de Privacidade
              </h2>
              <div className="bg-cyber-accent rounded-lg p-6 border border-cyber-border">
                <p className="text-cyber-text-secondary leading-relaxed mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política de privacidade, 
                  entre em contato:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-cyber-neon-cyan" />
                    <span className="text-cyber-text-primary">douglas@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <UserCheck className="h-5 w-5 text-cyber-neon-green" />
                    <span className="text-cyber-text-primary">Douglas Nascimento - Controlador de Dados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-cyber-neon-purple" />
                    <span className="text-cyber-text-primary">Resposta em até 15 dias úteis</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Updates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-cyber-text-primary mb-4 flex items-center">
                <Calendar className="h-6 w-6 mr-3 text-cyber-neon-green" />
                Atualizações desta Política
              </h2>
              <div className="bg-cyber-accent rounded-lg p-6 border border-cyber-border">
                <p className="text-cyber-text-secondary leading-relaxed">
                  Esta Política de Privacidade pode ser atualizada periodicamente para refletir 
                  mudanças em nossas práticas ou por outros motivos operacionais, legais ou 
                  regulamentares. Recomendamos que você revise esta página regularmente para 
                  se manter informado sobre como protegemos suas informações.
                </p>
                <p className="text-cyber-text-secondary leading-relaxed mt-4">
                  Mudanças significativas serão comunicadas através do site ou por email, 
                  quando aplicável.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
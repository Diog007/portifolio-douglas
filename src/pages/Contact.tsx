import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Github, 
  Linkedin,
  MessageSquare,
  Calendar,
  Shield
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Resposta em até 24 horas',
    value: 'douglas.cloudsec@gmail.com',
    href: 'mailto:douglas.cloudsec@gmail.com',
    color: 'from-cyber-neon-cyan to-blue-500'
  },
  {
    icon: Phone,
    title: 'WhatsApp',
    description: 'Disponível em horário comercial',
    value: '+55 11 99999-9999',
    href: 'https://wa.me/5511999999999',
    color: 'from-cyber-neon-green to-green-500'
  },
  {
    icon: Calendar,
    title: 'Calendly',
    description: 'Agende uma conversa',
    value: 'calendly.com/douglas-sec',
    href: 'https://calendly.com/douglas-sec',
    color: 'from-cyber-neon-purple to-purple-500'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Conectar profissionalmente',
    value: 'linkedin.com/in/douglascloudsec',
    href: 'https://linkedin.com/in/douglascloudsec',
    color: 'from-blue-500 to-indigo-500'
  }
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/devDouglasN', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/douglascloudsec', label: 'LinkedIn' },
];

const availabilityStatus = {
  available: true,
  nextAvailable: '2024-12-01',
  responseTime: '< 24 horas',
  timezone: 'UTC-3 (Brasília)'
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    projectType: 'consultation'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      projectType: 'consultation'
    });
    setIsSubmitting(false);
    
    // Show success message (in a real app, you'd handle this properly)
    alert('Mensagem enviada com sucesso! Retornarei em breve.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Vamos <span className="gradient-text">Conversar</span>
            </h1>
            <p className="text-xl text-cyber-text-secondary leading-relaxed mb-8">
              Estou sempre interessado em oportunidades de aprendizado, networking 
              e discussões sobre segurança cibernética. Entre em contato!
            </p>
            
            {/* Availability Status */}
            <div className="flex justify-center">
              <motion.div
                className="bg-cyber-accent rounded-lg p-6 border border-cyber-border inline-flex items-center space-x-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${
                    availabilityStatus.available ? 'bg-cyber-neon-green' : 'bg-cyber-warning'
                  } animate-pulse`} />
                  <span className="font-semibold text-cyber-text-primary">
                    {availabilityStatus.available ? 'Disponível' : 'Ocupado'}
                  </span>
                </div>
                <div className="text-cyber-text-secondary text-sm">
                  Resposta em {availabilityStatus.responseTime}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Como Me <span className="gradient-text">Encontrar</span>
            </h2>
            <p className="text-cyber-text-secondary text-lg max-w-2xl mx-auto">
              Escolha o método de contato que funciona melhor para você
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyber-accent rounded-lg p-6 border border-cyber-border hover-lift block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${method.color}`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-cyber-text-primary mb-2 text-center">
                  {method.title}
                </h3>
                <p className="text-cyber-text-secondary text-sm text-center mb-3">
                  {method.description}
                </p>
                <p className="text-cyber-neon-cyan text-sm text-center font-mono">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-cyber-text-primary mb-6">
                Envie uma Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cyber-text-primary mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-accent border border-cyber-border rounded-lg text-cyber-text-primary placeholder-cyber-text-secondary focus:outline-none focus:border-cyber-neon-cyan transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cyber-text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-accent border border-cyber-border rounded-lg text-cyber-text-primary placeholder-cyber-text-secondary focus:outline-none focus:border-cyber-neon-cyan transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-cyber-text-primary mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cyber-accent border border-cyber-border rounded-lg text-cyber-text-primary placeholder-cyber-text-secondary focus:outline-none focus:border-cyber-neon-cyan transition-colors"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-cyber-text-primary mb-2">
                    Tipo de Conversa
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cyber-accent border border-cyber-border rounded-lg text-cyber-text-primary focus:outline-none focus:border-cyber-neon-cyan transition-colors"
                  >
                    <option value="consultation">Networking</option>
                    <option value="opportunity">Oportunidade de Trabalho</option>
                    <option value="mentorship">Mentoria</option>
                    <option value="collaboration">Colaboração</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-cyber-text-primary mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-accent border border-cyber-border rounded-lg text-cyber-text-primary placeholder-cyber-text-secondary focus:outline-none focus:border-cyber-neon-cyan transition-colors"
                    placeholder="Resumo do que você gostaria de conversar"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cyber-text-primary mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-cyber-accent border border-cyber-border rounded-lg text-cyber-text-primary placeholder-cyber-text-secondary focus:outline-none focus:border-cyber-neon-cyan transition-colors resize-none"
                    placeholder="Conte-me mais sobre o que você tem em mente..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-cyber flex items-center justify-center space-x-2 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="cyber-spinner" />
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-cyber-text-primary mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-cyber-neon-cyan rounded-lg">
                    <MapPin className="h-5 w-5 text-cyber-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyber-text-primary">Localização</h4>
                    <p className="text-cyber-text-secondary">São Paulo, SP - Brasil</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-cyber-neon-green rounded-lg">
                    <Clock className="h-5 w-5 text-cyber-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyber-text-primary">Disponibilidade</h4>
                    <p className="text-cyber-text-secondary">Retorno o mais breve possível.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-cyber-neon-purple rounded-lg">
                    <MessageSquare className="h-5 w-5 text-cyber-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyber-text-primary">Preferências</h4>
                    <p className="text-cyber-text-secondary">Email para conversas formais</p>
                    <p className="text-cyber-text-secondary">LinkedIn para networking</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-cyber-text-primary mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-cyber-accent border border-cyber-border rounded-lg text-cyber-text-secondary hover:text-cyber-neon-cyan hover:border-cyber-neon-cyan transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="h-6 w-6" />
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="mt-8 p-4 bg-cyber-accent border border-cyber-border rounded-lg">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-cyber-neon-cyan mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-cyber-text-primary text-sm">Sobre Mim</h4>
                    <p className="text-cyber-text-secondary text-sm">
                      Estudante apaixonado por segurança cibernética, sempre aberto a aprender 
                      e compartilhar conhecimentos com a comunidade.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
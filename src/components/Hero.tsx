// src/components/Hero.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Building } from 'lucide-react';
import DaredeLogo from '/logotipo-darede-colorido.svg'; 
import SecofficeLogo from '/secoffice-white-red.png';
import { CyberBackground } from './CyberBackground'; // Importe o componente

export const Hero: React.FC = () => {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 }}};
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 }}};

  return (
    // O container principal define o fundo padrão e a altura da tela
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-primary">
      
      {/* Container para o background interativo. Ele fica posicionado no topo. */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-auto"
        style={{
          // Este 'clip-path' restringe a área visível do background
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }}
      >
        <CyberBackground
          density={1}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Conteúdo do Hero fica em uma camada acima (z-10) e permite que o mouse passe */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.0 } }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="flex justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 }}}>
            <div className="relative group">
              <motion.div 
                className="absolute -inset-1.5 bg-gradient-to-r from-cyber-neon-purple via-cyber-neon-cyan to-cyber-neon-green rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQEOhdSGIlx6NQ/profile-displayphoto-shrink_800_800/B4DZWrohrlGkAc-/0/1742341283060?e=1756339200&v=beta&t=iLRLaMhn0TAv-EVUArFbyETF59wqLFypLCvcMfnhv6k" alt="Douglas Nascimento" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-1 text-center lg:text-left" variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4" variants={itemVariants} style={{ textShadow: '0 0 8px rgba(0, 224, 255, 0.3)' }}>
              <span className="gradient-text">Douglas</span><br />
              <span className="glitch font-mono" data-text="Nascimento">Nascimento</span>
            </motion.h1>
            <motion.p className="text-lg text-cyber-text-secondary mb-8 max-w-xl mx-auto lg:mx-0" variants={itemVariants}>
              Assistente SOC N1. Ex-Desenvolvedor Java em transição de carreira para Segurança Cibernética, focado em fortalecer defesas digitais.
            </motion.p>

            {/* Seção da Empresa */}
            <motion.div className="mt-8 text-center lg:text-left" variants={itemVariants}>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-cyber-text-secondary mb-4">
                <Building className="h-5 w-5" />
                <span className="font-semibold">Atualmente na</span>
              </div>
              <div className="flex justify-center lg:justify-start items-center space-x-8 mb-4">
                <a href="https://www.darede.com.br/" target="_blank" rel="noopener noreferrer" title="Darede" className="pointer-events-auto">
                  <img src={DaredeLogo} alt="Darede Logo" className="h-14 opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-105" />
                </a>
                <a href="https://secoffice.com.br/" target="_blank" rel="noopener noreferrer" title="SecOffice" className="pointer-events-auto">
                  <img src={SecofficeLogo} alt="SecOffice Logo" className="h-12 opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-105" />
                </a>
              </div>
              <p className="text-sm text-cyber-text-secondary max-w-xl mx-auto lg:mx-0">
                Contribuindo em uma das líderes em Cibersegurança e Cloud no Brasil.
              </p>
            </motion.div>

            {/* Botões e Links Sociais */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-8" variants={itemVariants}>
              <a href="" download className="btn-cyber flex items-center space-x-2 px-8 py-3 font-semibold pointer-events-auto">
                <Download className="h-5 w-5" />
                <span>Download CV</span>
              </a>
            </motion.div>

            <motion.div className="flex justify-center lg:justify-start space-x-6 mt-8" variants={itemVariants}>
              {[
                { icon: Github, href: 'https://github.com/devDouglasN', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/douglascloudsec', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:douglas.cloudsec@gmail.com', label: 'Email' },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 text-cyber-text-secondary hover:text-cyber-neon-cyan transition-all duration-300 pointer-events-auto">
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
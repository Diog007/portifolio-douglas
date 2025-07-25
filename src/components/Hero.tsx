// src/components/Hero.tsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Github, Linkedin, Mail } from 'lucide-react';
import { CyberBackground } from './CyberBackground';

// Logos e imagens
import DaredeLogo from '/logotipo-darede-colorido.svg';
import SecofficeLogo from '/secoffice-white-red.png';

// --- IMAGENS E VÍDEO ---
// Certifique-se de que ambas as imagens tenham fundo transparente (formato PNG)
import profileImageDefault from '/teste.png'; // Imagem padrão
import profileImageHover from '/dd.png'; // <-- IMAGEM QUE APARECERÁ NO HOVER
import profileVideo from '/video2.mp4'; // O caminho para o seu vídeo MP4

export const Hero: React.FC = () => {
  // Estado para controlar o hover
  const [isHovering, setIsHovering] = useState(false);

  // Variantes para animação do Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-cyber-primary">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <CyberBackground density={1} style={{ width: '100%', height: '100%' }} />
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado da Imagem/Vídeo */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-1.5 bg-gradient-to-r from-cyber-neon-purple via-cyber-neon-cyan to-cyber-neon-green rounded-2xl blur opacity-75 transition-opacity duration-300"
                animate={{ rotate: 270 }}
              />
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden bg-cyber-primary">
                {/* Vídeo de fundo */}
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={profileVideo}
                  loop
                  muted
                  autoPlay
                  playsInline
                />
                {/* Imagens com troca suave no hover */}
                <AnimatePresence initial={false}>
                  <motion.img
                    key={isHovering ? 'hover' : 'default'}
                    src={isHovering ? profileImageHover : profileImageDefault}
                    alt="Douglas Nascimento"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Lado do Texto e Informações (sem alterações) */}
          <motion.div className="lg:col-span-1 text-center lg:text-left">
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4"
              variants={itemVariants}
              style={{ textShadow: '0 0 8px rgba(0, 224, 255, 0.3)' }}
            >
              <span className="gradient-text">Douglas</span>
              <br />
              <span className="glitch font-mono" data-text="Nascimento">
                Nascimento
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-cyber-text-secondary mb-8 max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Assistente SOC N1. Ex-Desenvolvedor Java em transição de carreira para Segurança
              Cibernética, focado em fortalecer defesas digitais.
            </motion.p>

            <motion.div className="mt-8 text-center lg:text-left" variants={itemVariants}>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-cyber-text-secondary mb-4">
                <Building className="h-5 w-5" />
                <span className="font-semibold">Atualmente na</span>
              </div>
              <div className="flex justify-center lg:justify-start items-center space-x-8 mb-4">
                <a href="https://www.darede.com.br/" target="_blank" rel="noopener noreferrer" title="Darede">
                  <img
                    src={DaredeLogo}
                    alt="Darede Logo"
                    className="h-14 opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-105"
                  />
                </a>
                <a href="https://secoffice.com.br/" target="_blank" rel="noopener noreferrer" title="SecOffice">
                  <img
                    src={SecofficeLogo}
                    alt="SecOffice Logo"
                    className="h-12 opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-105"
                  />
                </a>
              </div>
              <p className="text-sm text-cyber-text-secondary max-w-xl mx-auto lg:mx-0">
                Contribuindo em uma das líderes em Cibersegurança e Cloud no Brasil.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start space-x-6 mt-8"
              variants={itemVariants}
            >
              {[
                { icon: Github, href: 'https://github.com/devDouglasN', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/douglascloudsec', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:douglas.cloudsec@gmail.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-cyber-text-secondary hover:text-cyber-neon-cyan transition-all duration-300"
                >
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
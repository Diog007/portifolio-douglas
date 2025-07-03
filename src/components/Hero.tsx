// src/components/Hero.tsx

// --- 1. Importações ---
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Ícones e outros componentes
import { Download, Github, Linkedin, Mail, Building } from 'lucide-react';
import { CyberBackground } from './CyberBackground';

// Logos (mantenha os caminhos corretos)
import DaredeLogo from '/logotipo-darede-colorido.svg';
import SecofficeLogo from '/secoffice-white-red.png';

// --- 2. Suas Imagens ---
// !!! IMPORTANTE: Substitua estes caminhos pelos caminhos corretos das suas imagens !!!
import profileImageDefault from '/dodo1.png';
import profileImageHover from '/dodo.png';


export const Hero: React.FC = () => {
  // --- 3. Gerenciamento de Estado ---
  // Estado para controlar a imagem que está sendo exibida.
  const [currentImage, setCurrentImage] = useState(profileImageDefault);

  // --- 4. Manipuladores de Evento ---
  // Função para trocar para a imagem de hover
  const handleMouseEnter = () => {
    setCurrentImage(profileImageHover);
  };

  // Função para voltar para a imagem padrão
  const handleMouseLeave = () => {
    setCurrentImage(profileImageDefault);
  };

  // --- 5. Animações Framer Motion ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  // --- 6. Renderização do Componente (JSX) ---
  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-cyber-primary">
      
      {/* Background interativo em uma camada inferior */}
      <div className="absolute top-0 left-0 w-full h-full">
        <CyberBackground density={1} style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Conteúdo do Hero em uma camada superior */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado da Imagem */}
          <motion.div
            className="flex justify-center pointer-events-auto" // Permite eventos de mouse nesta área
            variants={itemVariants}
            onMouseEnter={handleMouseEnter} // Aciona a troca de imagem ao entrar com o mouse
            onMouseLeave={handleMouseLeave} // Reverte a imagem ao sair com o mouse
          >
            <div className="relative group">
              {/* Efeito de brilho animado */}
              <motion.div
                className="absolute -inset-1.5 bg-gradient-to-r from-cyber-neon-purple via-cyber-neon-cyan to-cyber-neon-green rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              {/* Container da imagem com bordas arredondadas */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
                <motion.img
                  key={currentImage} // Chave única para forçar a re-renderização e a animação
                  src={currentImage}
                  alt="Douglas Nascimento"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }} // Transição suave
                />
              </div>
            </div>
          </motion.div>

          {/* Lado do Texto */}
          <motion.div className="lg:col-span-1 text-center lg:text-left">
            <motion.h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4" variants={itemVariants} style={{ textShadow: '0 0 8px rgba(0, 224, 255, 0.3)' }}>
              <span className="gradient-text">Douglas</span><br />
              <span className="glitch font-mono" data-text="Nascimento">Nascimento</span>
            </motion.h1>

            <motion.p className="text-lg text-cyber-text-secondary mb-8 max-w-xl mx-auto lg:mx-0" variants={itemVariants}>
              Assistente SOC N1. Ex-Desenvolvedor Java em transição de carreira para Segurança Cibernética, focado em fortalecer defesas digitais.
            </motion.p>
            
            {/* Seção Empresa e Botões (com pointer-events-auto para serem clicáveis) */}
            <motion.div variants={itemVariants} className="pointer-events-auto">
              {/* Conteúdo da empresa, CV e links sociais... */}
            </motion.div>
            
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
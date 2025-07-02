// src/components/Hero.tsx

import React, { Suspense, useMemo, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Github, Linkedin, Mail, Building } from 'lucide-react'; // Adicionado o ícone Building
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { MatrixRain } from './MatrixRain';

// --- ADICIONE A IMPORTAÇÃO DOS LOGOS AQUI ---
import DaredeLogo from '/public/logotipo-darede-colorido.svg'; // Use o caminho correto para seus logos
import SecofficeLogo from '/secoffice-white-red.png';    // Use o caminho correto para seus logos

// --- Componente de Partículas 3D (sem alterações) ---
const Particles = ({ count = 5000 }) => {
  const mesh = useRef<THREE.Points>(null!);
  const { viewport } = useThree();
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      temp[i3] = (Math.random() - 0.5) * (viewport.width * 3);
      temp[i3 + 1] = (Math.random() - 0.5) * (viewport.height * 3);
      temp[i3 + 2] = (Math.random() - 0.5) * 15;
    }
    return temp;
  }, [count, viewport.width, viewport.height]);

  useFrame((state) => {
    const { x, y } = state.pointer;
    if (mesh.current) {
        mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, x * 0.1, 0.02);
        mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, y * -0.1, 0.02);
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#00e0ff" sizeAttenuation depthWrite={false} transparent opacity={0.6} />
    </points>
  );
};

// --- Componente de Boot Sequence (sem alterações) ---
const BootSequence = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-cyber-primary z-20">
        <div className="font-mono text-cyber-neon-green text-lg md:text-xl text-center">
          <TypeAnimation
            sequence={[
              '[INITIALIZING CORE SYSTEMS...]', 200,
              '[LOADING NEURAL INTERFACE...]', 300,
              '[DECRYPTING IDENTITY MATRIX...]', 400,
              'ACCESS GRANTED.', 500,
              'WELCOME, DOUGLAS.', 1000
            ]}
            wrapper="p"
            cursor={true}
            speed={70}
          />
        </div>
      </div>
    );
  };
  

// --- Componente Hero Principal ---
export const Hero: React.FC = () => {
  const [stage, setStage] = useState('matrix'); // 'matrix', 'booting', 'revealed'

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('booting'), 1000); 
    const timer2 = setTimeout(() => setStage('revealed'), 2500); 
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 }}};
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 }}};

  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden bg-cyber-primary">
      <AnimatePresence>
        {stage === 'matrix' && (
          <motion.div key="matrix" exit={{ opacity: 0, transition: { duration: 1.0 } }} className="absolute inset-0 z-30">
            <MatrixRain />
          </motion.div>
        )}
        {stage === 'booting' && (
          <motion.div key="booting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.5 } }}>
            <BootSequence />
          </motion.div>
        )}
      </AnimatePresence>
      
      {stage !== 'matrix' && (
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <Particles />
            </Suspense>
          </Canvas>
        </div>
      )}

      <AnimatePresence>
        {stage === 'revealed' && (
          <motion.div
            className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
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
                    <div className="absolute inset-0 grid grid-cols-16 grid-rows-16">
                      {Array.from({ length: 256 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + (Math.random() * 1.5) }}
                          className="bg-cyber-primary"
                        />
                      ))}
                    </div>
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

                {/* --- NOVA SEÇÃO DA EMPRESA INTEGRADA AQUI --- */}
                <motion.div className="mt-8 text-center lg:text-left" variants={itemVariants}>
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-cyber-text-secondary mb-4">
                    <Building className="h-5 w-5" />
                    <span className="font-semibold">Atualmente na</span>
                  </div>
                  <div className="flex justify-center lg:justify-start items-center space-x-8 mb-4">
                    <a href="https://www.darede.com.br/" target="_blank" rel="noopener noreferrer" title="Darede">
                      <img src={DaredeLogo} alt="Darede Logo" className="h-14 opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-105" />
                    </a>
                    <a href="https://secoffice.com.br/" target="_blank" rel="noopener noreferrer" title="SecOffice">
                      <img src={SecofficeLogo} alt="SecOffice Logo" className="h-12 opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-105" />
                    </a>
                  </div>
                  <p className="text-sm text-cyber-text-secondary max-w-xl mx-auto lg:mx-0">
                    Contribuindo em uma das líderes em Cibersegurança e Cloud no Brasil.
                  </p>
                </motion.div>

                <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-8" variants={itemVariants}>
                  <a href="" download className="btn-cyber flex items-center space-x-2 px-8 py-3 font-semibold">
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
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 text-cyber-text-secondary hover:text-cyber-neon-cyan transition-all duration-300">
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
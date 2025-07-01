import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Terminal, Code, User, Briefcase, Clock, Mail, FileText } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Terminal },
  { path: '/about', label: 'About', icon: User },
  { path: '/skills', label: 'Skills', icon: Code },
  { path: '/projects', label: 'Projects', icon: Briefcase },
  { path: '/timeline', label: 'Timeline', icon: Clock },
  // A linha abaixo foi removida
  // { path: '/blog', label: 'Blog', icon: FileText }, 
  { path: '/contact', label: 'Contact', icon: Mail },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-cyber-secondary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              className="p-2 rounded-lg bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-green"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield className="h-6 w-6 text-cyber-primary" />
            </motion.div>
            <span className="text-xl font-bold font-mono neon-text hidden sm:block">
              Douglas<span className="text-cyber-neon-green">Sec</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-cyber-accent group ${
                    isActive ? 'bg-cyber-accent text-cyber-neon-cyan' : 'text-cyber-text-secondary hover:text-cyber-text-primary'
                  }`}
                >
                  <Icon className={`h-4 w-4 transition-colors duration-300 ${
                    isActive ? 'text-cyber-neon-cyan' : 'group-hover:text-cyber-neon-cyan'
                  }`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-cyber-accent text-cyber-text-primary hover:bg-cyber-border transition-colors duration-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-cyber-secondary/95 backdrop-blur-md border-t border-cyber-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-cyber-accent group ${
                      isActive ? 'bg-cyber-accent text-cyber-neon-cyan' : 'text-cyber-text-secondary hover:text-cyber-text-primary'
                    }`}
                  >
                    <Icon className={`h-5 w-5 transition-colors duration-300 ${
                      isActive ? 'text-cyber-neon-cyan' : 'group-hover:text-cyber-neon-cyan'
                    }`} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
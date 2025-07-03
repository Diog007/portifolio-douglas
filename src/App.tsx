import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Timeline } from './pages/Timeline';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Footer } from './components/Footer';
import { MatrixRain } from './components/MatrixRain';
import { ScrollToTopOnMount } from './components/ScrollToTopOnMount';

function App() {
  return (
    <Router>
      <ScrollToTopOnMount />
      <div className="min-h-screen bg-cyber-primary text-cyber-text-primary overflow-x-hidden">
        <MatrixRain />
        <Navigation />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
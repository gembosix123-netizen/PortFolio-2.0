import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';

// Navbar Modern (Glassmorphism)
const Navbar = () => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full flex gap-8 items-center shadow-2xl">
    <Link to="/" className="text-white font-black tracking-tighter hover:text-purple-400 transition-colors">ALLAN.</Link>
    <div className="h-4 w-[1px] bg-white/20"></div>
    <Link to="/portfolio" className="text-sm font-medium hover:text-purple-400 transition-colors text-slate-400">Works</Link>
    <Link to="/experience" className="text-sm font-medium hover:text-purple-400 transition-colors text-slate-400">Journey</Link>
  </nav>
);

function App() {
  // State untuk Mouse Position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-purple-500/50 overflow-x-hidden relative">
        
        {/* Modern Custom Cursor (Mouse Follower) */}
        <motion.div 
          className="fixed w-8 h-8 border-2 border-purple-500 rounded-full pointer-events-none z-[999] hidden md:block"
          animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
          transition={{ type: "spring", damping: 30, stiffness: 250, mass: 0.5 }}
        />

        {/* Background Glow Effects */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full"></div>
        </div>

        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </AnimatePresence>

        {/* Floating WhatsApp CTA */}
        <div className="fixed bottom-10 right-10 z-[100]">
          <a 
            href="https://wa.me/601112076533" 
            target="_blank" 
            rel="noreferrer"
            className="bg-white text-black p-4 rounded-2xl font-bold shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform"
          >
            <span className="text-xs uppercase tracking-widest">Chat</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </a>
        </div>

      </div>
    </Router>
  );
}

export default App;
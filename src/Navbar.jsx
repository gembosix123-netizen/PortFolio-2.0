import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-slate-800 p-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-black text-white tracking-tighter">ALLAN<span className="text-blue-500">.</span></h1>
        <div className="flex gap-6 items-center">
          <a href="#portfolio" className="text-slate-400 hover:text-white text-sm transition-colors">Portfolio</a>
          <a href="#resume" className="text-slate-400 hover:text-white text-sm transition-colors">Resume</a>
          <a href="mailto:allanzyt123@gmail.com" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold">Hire Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
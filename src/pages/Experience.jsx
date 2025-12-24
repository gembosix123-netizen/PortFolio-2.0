import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const journeys = [
    {
      title: "Aspiring Developer",
      company: "Gamuda AI Academy",
      period: "2025 - Present",
      description: "Menamatkan latihan intensif dalam pembangunan web dan AI. Membina projek SignBridge menggunakan React, Python, dan FastAPI.",
      skills: ["React", "FastAPI", "AI Integration"],
      current: true
    },
    {
      title: "Banquet Assistant",
      company: "Raia Hotel",
      period: "2022 - 2024",
      description: "Menguruskan kualiti servis dan kerjasama pasukan dalam persekitaran profesional yang pantas.",
      skills: ["Teamwork", "Customer Service", "Discipline"],
      current: false
    },
    {
      title: "Shop Assistant",
      company: "Walk-in & Shop",
      period: "2021 - 2022",
      description: "Bertanggungjawab dalam pengurusan stok inventori dan urusan jualan harian.",
      skills: ["Inventory Management", "Retail"],
      current: false
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-black text-white mb-16 italic tracking-tighter">
          MY <span className="text-purple-500 underline decoration-white/10 underline-offset-8">JOURNEY.</span>
        </h2>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {journeys.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-16 ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-[#020617] ${item.current ? 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]' : 'bg-slate-700'}`}></div>
              
              <span className="text-xs font-black uppercase tracking-widest text-purple-400 mb-2 block">
                {item.period}
              </span>
              
              <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-slate-400 font-medium mb-4 italic">
                {item.company}
              </p>
              
              <p className="max-w-2xl text-slate-500 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Portfolio */}
        <motion.div 
          whileHover={{ x: 10 }}
          className="mt-20 inline-block"
        >
          <a href="/portfolio" className="text-white font-black text-xl flex items-center gap-4 group">
            LIHAT HASIL KERJA SAYA 
            <span className="text-purple-500 group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
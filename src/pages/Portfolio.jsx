import { motion } from 'framer-motion';

export default function Portfolio() {
  const designAssets = [
    { id: 1, title: "Elite Red Design", img: "/jersey2.jpg", type: "Apparel" },
    { id: 2, title: "Turquoise Pattern", img: "/jersey3.jpg", type: "Apparel" },
    { id: 3, title: "Black Panther Logo", img: "/logo1.jpg", type: "Identity" },
    { id: 4, title: "Predator FC", img: "/logo2.jpg", type: "Branding" },
    { id: 5, title: "Z1 Body Cam", img: "/jersey4.jpg", type: "Apparel" },
    { id: 6, title: "GTC Corporate", img: "/logo3.jpg", type: "Identity" },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
      className="pt-32 pb-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-7xl font-black text-white italic tracking-tighter leading-none">WORK<span className="text-purple-500">.</span></h2>
          <p className="text-slate-500 font-bold tracking-[0.4em] uppercase text-xs mt-4">Design • Motion • Technology</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* FEATURED: SignBridge AI */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="col-span-2 md:col-span-4 bg-slate-900 rounded-[3rem] overflow-hidden border border-white/5 relative group h-[500px]"
          >
            <img 
              src="/signbridge-hero.jpg.png" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[2s]" 
            />
            <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent">
              <span className="bg-purple-600 text-white text-[10px] font-bold px-4 py-1 rounded-full w-fit mb-4">CAPSTONE PROJECT @ GAMUDA AI</span>
              <h3 className="text-4xl md:text-6xl font-black text-white italic mb-4 uppercase">SignBridge AI</h3>
              <p className="text-slate-300 max-w-xl text-lg mb-8 italic">"Connecting the Silent World to the Sound of Understanding."</p>
              <a href="https://signbridge-app-6f7c4.web.app/" target="_blank" className="w-fit bg-white text-black px-10 py-4 rounded-2xl font-black hover:bg-purple-500 hover:text-white transition-all">LAUNCH APP →</a>
            </div>
          </motion.div>

          {/* MOTION SECTION: Hans & Yati Card */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="col-span-2 md:row-span-2 bg-gradient-to-br from-green-900/40 to-slate-900 rounded-[3rem] border border-green-500/20 overflow-hidden relative group"
          >
            <video 
              src="/hans_yati_card.mp4" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute top-8 left-8 right-8 z-20 text-center">
              <div className="bg-green-500/20 backdrop-blur-md border border-green-500/30 px-4 py-1 rounded-full text-green-400 text-[10px] font-bold tracking-widest uppercase mb-4 inline-block">Motion Graphics</div>
              <h4 className="text-3xl font-black text-white italic tracking-tighter uppercase">Hans & Yati <br/> Motion Card</h4>
              <p className="text-slate-400 text-xs mt-4 italic">Kad jemputan digital dengan animasi transisi yang elegan.</p>
            </div>
          </motion.div>

          {/* PROFILE CARD: Allan (Formal) */}
          <div className="col-span-2 md:col-span-1 bg-slate-900 rounded-[3rem] overflow-hidden border border-white/5 relative">
            <img src="/profile.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <p className="absolute bottom-8 left-8 text-white font-black text-xl italic leading-none uppercase">Allan Andan</p>
          </div>

          {/* TECH STACK BENTO */}
          <div className="col-span-2 md:col-span-1 bg-white rounded-[3rem] p-8 flex flex-col justify-between">
            <h4 className="text-black font-black text-xl italic tracking-tighter leading-none">TECH & TOOLS.</h4>
            <div className="flex flex-wrap gap-1 mt-4">
              {['React', 'Python', 'FastAPI', 'Vite', 'PS', 'AI'].map(t => (
                <span key={t} className="bg-black text-white text-[9px] font-bold px-2 py-1 rounded-md">{t}</span>
              ))}
            </div>
          </div>

          {/* GRID GALLERY: Belasah Jersey & Logo */}
          {designAssets.map((asset) => (
            <motion.div 
              key={asset.id}
              whileHover={{ scale: 1.05 }}
              className="col-span-1 bg-slate-900 rounded-[2rem] overflow-hidden border border-white/5 relative group"
            >
              <img src={asset.img} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4">
                <p className="text-white font-bold text-[10px] uppercase tracking-widest text-center">{asset.title}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </motion.section>
  );
}

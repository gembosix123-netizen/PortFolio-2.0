import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 px-4 py-1 border border-purple-500/30 rounded-full bg-purple-500/5 text-purple-400 text-xs font-bold tracking-widest uppercase"
      >
        Available for new opportunities
      </motion.div>
      
      <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
        DESIGNER <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 animate-gradient">TURNS CODE.</span>
      </h1>

      <p className="max-w-xl text-slate-400 text-lg mb-12 leading-relaxed">
        Dari rekaan apparel yang kreatif kepada solusi teknologi di <strong>Gamuda AI Academy</strong>. Saya membina produk yang berfungsi dan estetik.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <Link to="/portfolio" className="group relative bg-white text-black px-10 py-4 rounded-2xl font-bold transition-all hover:pr-14 overflow-hidden">
          <span className="relative z-10">Lihat Projek Saya</span>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">→</span>
        </Link>
        <Link to="/experience" className="px-10 py-4 rounded-2xl font-bold border border-white/10 hover:bg-white/5 transition-all">
          Kenali Perjalanan Saya
        </Link>
      </div>
      <motion.div 
        whileHover={{ rotateY: 15, rotateX: -15 }}
        style={{ perspective: 1000 }}
        className="relative w-64 h-80 rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl"
      >
        <img src="/muka allan.png" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
      </motion.div>
    </motion.section>
  );
}

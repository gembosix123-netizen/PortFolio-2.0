import React from 'react';

const ProjectCard = ({ title, img, tag }) => {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-slate-800">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/400x400?text=Design'; }}
        />
      </div>
      <div className="p-6">
        <span className="text-blue-500 text-xs font-black uppercase tracking-widest">{tag}</span>
        <h4 className="text-xl font-bold text-white mt-1">{title}</h4>
      </div>
    </div>
  );
};

export default ProjectCard;
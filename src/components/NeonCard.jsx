import React from 'react';

const NeonCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      
      {/* Card Container */}
      <div className="relative w-[300px] h-[400px] bg-gray-900 rounded-xl
       overflow-hidden flex items-center justify-center">
        
        {/* 1. THE ROTATING BORDER (Conic Gradient) */}
        {/* 'inset-[-250%]' makes it huge so corners don't get cut while spinning */}
        <div className="absolute inset-[-250%] animate-[spin_4s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#000000_50%,#0ea5e9_100%)]">
        </div>

        {/* 2. THE INNER CARD (Black overlay to create the border effect) */}
        {/* inset-1 leaves 4px gap for the border to show */}
        <div className="absolute inset-[2px] bg-neutral-950 rounded-xl 
        flex flex-col items-center justify-center p-6 text-center z-10">
          
          {/* Icon/Logo */}
          <div className="w-16 h-16 mb-4 bg-cyan-500/20
           rounded-full flex items-center justify-center 
           border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <span className="text-3xl">⚛️</span>
          </div>

          <h2 className="text-white text-xl font-bold tracking-wider">
            React Magic
          </h2>
          
          <p className="text-gray-400 text-sm mt-2">
            This border is created using Conic Gradient & Tailwind arbitrary values.
          </p>

          <button className="mt-6 px-6 py-2 rounded-full
           bg-cyan-600 text-white font-medium hover:bg-cyan-500 
           hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all">
            Subscribe
          </button>

        </div>
      </div>
    </div>
  );
};

export default NeonCard;
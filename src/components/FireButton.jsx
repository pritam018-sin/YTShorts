import React from 'react';

const FireButton = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      
      <h1 className="text-white text-3xl font-bold mb-20 uppercase tracking-[0.2em] animate-pulse">
        Warning: Highly Flammable
      </h1>

      {/* WRAPPER */}
      <div className="relative group">
        
        {/* 🔥 FIRE LAYERS (Behind the button) */}
        {/* Layer 1: Red/Orange Glow - Expands on Hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        
        {/* Layer 2: The Flames (Blurry Moving Gradient) */}
        <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition duration-500 animate-[fire_2s_infinite]"></div>

        {/* BUTTON ITSELF */}
        <button className="relative px-12 py-6 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 border border-gray-800 group-hover:border-orange-500/50 transition-colors">
          
          <span className="flex items-center space-x-5">
            {/* Fire Icon that turns colorful */}
            <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-125">
               🔥
            </span>
            
            <span className="pr-6 text-gray-100 font-black text-2xl tracking-widest uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-red-500 transition-all">
              Ignite Me
            </span>
          </span>
        </button>
      </div>

      <p className="text-gray-600 mt-20 font-mono text-sm">
        CSS Filter: Blur + Gradient Animation
      </p>

      {/* --- CUSTOM ANIMATIONS --- */}
      <style>{`
        @keyframes fire {
          0% { transform: skew(2deg) scale(1); }
          25% { transform: skew(-2deg) scale(1.02); }
          50% { transform: skew(1deg) scale(1); }
          75% { transform: skew(-1deg) scale(1.02); }
          100% { transform: skew(2deg) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default FireButton;
import React from 'react';

const GlitchButton = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-4">
      
      {/* Background Grid for Tech Vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <h1 className="relative z-10 text-white font-mono text-sm mb-16 opacity-50 tracking-widest">
        SYSTEM_OVERRIDE // INITIATED
      </h1>

      {/* --- THE GLITCH BUTTON --- */}
      <button className="glitch-btn relative w-64 h-20 bg-transparent text-white font-black text-2xl tracking-widest uppercase outline-none border-none cursor-pointer group">
        
        {/* Main Content */}
        <span className="absolute top-0 left-0 w-full h-full bg-[#f0f] flex items-center justify-center translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-[2px_2px_0px_#0ff] z-10 clip-path-polygon">
           HACK ME
        </span>
        
        {/* Shadow/Glitch Layers */}
        <span className="absolute top-0 left-0 w-full h-full bg-transparent border-2 border-white flex items-center justify-center z-20 group-hover:text-black group-hover:bg-[#0ff] transition-all duration-100 mix-blend-hard-light">
           HACK ME
        </span>

        {/* Glitch Effect Elements (Hidden by default, appear on hover) */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 pointer-events-none animate-pulse"></div>
        
      </button>

      {/* --- CSS MAGIC (Copy this exactly) --- */}
      <style>{`
        /* Button Base Style */
        .glitch-btn {
          --glitch-red: #ff003c;
          --glitch-blue: #2695ff;
        }

        /* Pseudo Element 1 (Red Shift) */
        .glitch-btn::before {
          content: "HACK ME";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #050505;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          z-index: -1;
          opacity: 0;
        }

        /* Pseudo Element 2 (Blue Shift) */
        .glitch-btn::after {
          content: "HACK ME";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #050505;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          z-index: -2;
          opacity: 0;
        }

        /* HOVER ANIMATIONS */
        .glitch-btn:hover::before {
          opacity: 1;
          animation: glitch-anim-1 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
          color: var(--glitch-red);
          z-index: 2;
        }

        .glitch-btn:hover::after {
          opacity: 1;
          animation: glitch-anim-2 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
          color: var(--glitch-blue);
          z-index: 1;
        }

        /* KEYFRAMES FOR SLICING EFFECT */
        @keyframes glitch-anim-1 {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
          40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
          80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
          100% { clip-path: inset(30% 0 50% 0); transform: translate(1px, -1px); }
        }

        @keyframes glitch-anim-2 {
          0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
          20% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(30% 0 20% 0); transform: translate(2px, -2px); }
          60% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, 1px); }
          80% { clip-path: inset(50% 0 30% 0); transform: translate(1px, -1px); }
          100% { clip-path: inset(70% 0 10% 0); transform: translate(-1px, 1px); }
        }
      `}</style>
    </div>
  );
};

export default GlitchButton;
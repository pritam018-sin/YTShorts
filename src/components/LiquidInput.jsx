import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const LiquidInput = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
        className="relative p-[2px] rounded-xl overflow-hidden group"
      >
        {/* The Liquid Border Effect */}
        <motion.div 
          animate={{
            opacity: isFocused ? 1 : 0,
            x: mousePos.x - 100,
            y: mousePos.y - 100,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
          className="absolute w-40 h-40 bg-cyan-400 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }}
        />
        
        {/* The Input Field */}
        <input 
          type="text" 
          placeholder="Search something unique..."
          className="relative w-80 px-6 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-xl focus:outline-none placeholder-zinc-500 transition-colors"
        />
      </div>
      
      {/* SVG Filter for the "Gooey" Look (Optional but recommended) */}
      <svg className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default LiquidInput;
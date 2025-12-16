import React, { useRef, useState } from 'react';

const SpotlightGrid = () => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      
      <h1 className="text-4xl font-bold text-white mb-10 tracking-tight">
        Spotlight <span className="text-cyan-500">Effect</span>
      </h1>

      {/* Grid Container */}
      <div 
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full"
      >
        
        {/* --- THE SPOTLIGHT OVERLAY (The Magic Part) --- */}
        {/* Yeh ek invisible layer hai jo mouse ke piche ghumti hai */}
        <div 
            className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100 z-30"
            style={{
                opacity,
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6,182,212,0.15), transparent 40%)`
            }}
        />

        {/* --- CARDS --- */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="relative group rounded-xl border border-white/10 bg-neutral-900 px-8 py-10 overflow-hidden">
            
            {/* Inner Border Glow (Mouse ke pass aane par border bright hoga) */}
            <div
              className="absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
              style={{
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`
              }}
            />
            
            {/* Card Content */}
            <div className="relative z-10">
              <span className="mb-4 inline-flex items-center justify-center rounded-lg bg-neutral-800 p-3 shadow-lg">
                <span className="text-2xl">🚀</span>
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">Feature {item}</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Move your mouse over this card to see the lighting effect reveal the borders.
              </p>
            </div>
            
          </div>
        ))}
      </div>
      
      <p className="text-neutral-600 mt-12 font-mono text-xs">
        Uses React useRef & MouseMove Events
      </p>
    </div>
  );
};

export default SpotlightGrid;
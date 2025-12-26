import React, { useState, useRef } from 'react';

// 1. Hacker Text Component (True Decryption Logic)
const HackerText = ({ label }) => {
  const chars = "!@#$%^&*()_+{}|:<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  // Helper: Generate random string of same length
  const getRandomText = (length) => {
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };

  // Default state "Encrypted" (Random garbage) hai
  const [text, setText] = useState(getRandomText(label.length));
  const intervalRef = useRef(null);

  const handleMouseEnter = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setText((prev) => 
        label.split("").map((letter, index) => {
          if (index < iteration) return label[index]; // Reveal logic
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );

      if (iteration >= label.length) clearInterval(intervalRef.current);
      iteration += 1 / 3; // Speed of decryption
    }, 30);
  };

  const handleMouseLeave = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);
    
    // Wapas random garbage banne ka logic
    intervalRef.current = setInterval(() => {
      setText((prev) => 
        label.split("").map((letter, index) => {
           // Yahan logic ulta hai, wapas random characters laana
           return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      
      // Stop when fully scrambled (just a quick effect)
      if (iteration >= label.length) {
         setText(getRandomText(label.length)); // Ensure it stays random
         clearInterval(intervalRef.current);
      }
      iteration += 1 / 2;
    }, 30);
  };

  return (
    <h3 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      className="font-mono text-xl text-green-400 cursor-pointer select-none"
    >
      {text}
    </h3>
  );
};

// 2. Main Grid Layout (Spotlight Same rahega)
const SpotEncrypt = () => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Cards Data
  const cards = ["DASHBOARD", "ANALYTICS", "SETTINGS", "PROFILE", "SECURITY", "LOGOUT"];

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="relative grid grid-cols-3 gap-2 p-20 bg-black min-h-screen overflow-hidden group"
    >
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34, 197, 94, 0.15), transparent 40%)`
        }}
      />

      {/* Grid Items */}
      {cards.map((item, idx) => (
        <div key={idx} className="relative border border-white/10 bg-neutral-900/80 p-8 rounded-xl hover:border-green-500/50 transition-colors z-10 flex items-center justify-center h-40 shadow-xl">
           <HackerText label={item} />
        </div>
      ))}
    </div>
  );
}
export default SpotEncrypt;
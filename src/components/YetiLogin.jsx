import React, { useState } from 'react';

const YetiLogin = () => {
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    // Background: Thoda soft gradient
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-[#dceffb]
     flex flex-col items-center justify-center p-4 font-sans">
      
      {/* --- THE YETI CHARACTER (Pure SVG) --- */}
      {/* Z-index higher taki haath form ke upar aa sakein agar zaroorat padi */}
      <div className="relative w-48 h-48 mb-[-35px] z-20">
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
          {/* BODY/FACE SHAPE (Thoda off-white for realism) */}
          <circle cx="100" cy="100" r="90" fill="#fafafa" />
          <path d="M100,10 C150,10 195,50 195,110 L195,220 L5,220 L5,110 C5,50 50,10 100,10 Z" fill="#fafafa" />
          
          {/* HAIR DETAIL (Thoda blue tint) */}
          <path d="M70,10 Q100,30 130,10 M60,25 Q100,45 140,25" fill="none" stroke="#d0e0f0"
           strokeWidth="4" strokeLinecap="round" />

          {/* EARS (Pinkish inside) */}
          <circle cx="20" cy="90" r="18" fill="#fafafa" 
          stroke="#e0e0e0" strokeWidth="2" />
          <circle cx="20" cy="90" r="10" fill="#ffd1dc" />
          <circle cx="180" cy="90" r="18" fill="#fafafa" stroke="#e0e0e0" strokeWidth="2" />
          <circle cx="180" cy="90" r="10" fill="#ffd1dc" />

          {/* EYES (Cute style) */}
          <g className="transition-all duration-200">
            <ellipse cx="70" cy="90" rx="12" ry="14" fill="#333" />
            <circle cx="75" cy="85" r="4" fill="white" />
            
            <ellipse cx="130" cy="90" rx="12" ry="14" fill="#333" />
            <circle cx="135" cy="85" r="4" fill="white" />
          </g>

          {/* NOSE & MOUTH (Blue Nose) */}
          <ellipse cx="100" cy="115" rx="18" ry="12" fill="#89cff0" />
          <path d="M85,135 Q100,150 115,135" fill="none" stroke="#333"
           strokeWidth="3" strokeLinecap="round" />

          {/* --- HANDS (THE ANIMATION MAGIC) --- */}
          {/* Increased translate-y value for better coverage */}
          <g 
            className={`transition-transform duration-500 cubic-bezier(0.68, -0.55, 0.27, 1.55)
               ${isPasswordFocused ? '-translate-y-[85px]' : 'translate-y-[10px]'}`}
          >
            {/* Paws (Thoda fluffy shape) */}
            <path d="M10,180 C0,150 40,140 70,160 C85,170 75,200 40,210 Z" fill="#fafafa" 
            stroke="#e0e0e0" strokeWidth="3" />
            <path d="M190,180 C200,150 160,140 130,160 C115,170 125,200 160,210 Z"
             fill="#fafafa" stroke="#e0e0e0" strokeWidth="3" />
            
            {/* Paw Pads (Pink details) */}
            <ellipse cx="45" cy="175" rx="8" ry="10" fill="#ffd1dc" />
            <ellipse cx="155" cy="175" rx="8" ry="10" fill="#ffd1dc" />
          </g>
        </svg>
      </div>

      {/* --- LOGIN FORM (Card Style Update) --- */}
      <div className="bg-white/80 backdrop-blur-md p-8 pt-14 rounded-[30px] 
      shadow-2xl w-full max-w-sm text-center relative z-10 border border-white/50">
        
        <h2 className="text-3xl font-black text-gray-800 mb-6">Hello There!</h2>

        <div className="space-y-5">
          <div className="text-left group">
            <label className="text-xs font-bold text-blue-500 uppercase tracking-wide ml-1">Username</label>
            <input 
              type="text" 
              placeholder="codeminds_hero"
              className="w-full mt-1 px-5 py-4 bg-blue-50/50 rounded-2xl border-2 
              border-transparent focus:bg-white focus:border-blue-400 outline-none
               transition-all font-medium text-gray-700 placeholder-blue-300"
            />
          </div>

          {/* PASSWORD FIELD (Trigger) */}
          <div className="text-left group">
            <label className="text-xs font-bold text-blue-500 uppercase tracking-wide ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              onFocus={() => setIsPasswordFocused(true)} // Haath Upar (Bounce Effect)
              onBlur={() => setIsPasswordFocused(false)} // Haath Niche
              className="w-full mt-1 px-5 py-4 bg-blue-50/50 rounded-2xl border-2
               border-transparent focus:bg-white focus:border-blue-400 outline-none
                transition-all font-medium text-gray-700 placeholder-blue-300"
            />
          </div>
        </div>

        <button className="w-full mt-8 bg-gradient-to-r from-blue-500 to-indigo-600
         hover:from-blue-600 hover:to-indigo-700 text-white font-bold 
         py-4 rounded-2xl shadow-lg shadow-blue-500/40 transition-transform active:scale-[0.98]">
          Let me in!
        </button>

      </div>

      <p className="mt-8 text-blue-900/60 text-sm font-medium tracking-wide">
        Don't look, it's a secret! 🤫
      </p>
    </div>
  );
};

export default YetiLogin;
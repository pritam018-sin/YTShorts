import React, { useRef } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform 
} from "framer-motion";

// --- IMAGES ---
import vecnaBg from '../assets/vecna.png';       
import vecnaChar from '../assets/vecna_char.png'; 
import elevenBg from '../assets/elven_bg.png';
import elevenChar from '../assets/elven_char.png';

const vecnaData = {
  id: "vecna",
  images: { bg: vecnaBg, char: vecnaChar },
  info: { name: "VECNA", subTitle: "001 • THE UNDYING", color: "#e50914" }
};

const elevenData = {
  id: "eleven",
  images: { bg: elevenBg, char: elevenChar },
  info: { name: "ELEVEN", subTitle: "011 • THE WEAPON", color: "#0099ff" }
};

const StrangerThingsDuel = () => {
  return (
    <div className="min-h-screen bg-[#020202] 
    flex flex-col md:flex-row items-center justify-center gap-10 py-20 px-5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15"></div>
      
      <ViralPopUpCard data={vecnaData} />

      <div className="relative z-10 flex flex-col 
      items-center justify-center scale-110">
        <h1 className="text-7xl font-black text-transparent 
        bg-clip-text bg-gradient-to-b from-red-600 to-black drop-shadow-[0_0_20px_rgba(229,9,20,0.6)]" style={{ fontFamily: 'serif' }}>VS</h1>
      </div>

      <ViralPopUpCard data={elevenData} />
    </div>
  );
};

const ViralPopUpCard = ({ data }) => {
  const { images, info } = data;
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]); 
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  // --- ANIMATION LOGIC (NO SLIDING, ONLY SCALING) ---

  // 1. BG Image: Hamesha visible rahegi, bas thoda dark ho jayegi hover pe
  const bgVariants = {
    rest: { opacity: 1, scale: 1 },
    hover: { opacity: 0.6, scale: 0.98, transition: { duration: 0.4 } } // Thoda piche jayega focus character pe lane ke liye
  };

  // 2. Character: Pehle se visible rahega, hover par bada hoga
  const charVariants = {
    rest: { 
      opacity: 1,      // <--- ALWAYS VISIBLE
      y: 0,            // <--- APNI JAGAH PAR (No Slide)
      scale: 1,        // <--- NORMAL SIZE
      filter: "drop-shadow(0px 0px 0px transparent)" 
    },
    hover: { 
      opacity: 1, 
      y: -10,          // Bas halka sa upar taaki 3D lage (Slide nahi)
      scale: 1.2,      // <--- SIZE BADA HOGA (ZOOM)
      zIndex: 50,
      // Border/Glow Effect
      filter: `drop-shadow(0px 0px 2px #fff) drop-shadow(0px 0px 15px ${info.color})`,
      transition: { type: "spring", stiffness: 150, damping: 15 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="rest"
      whileHover="hover"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[300px] h-[450px] rounded-[20px] cursor-pointer group perspective-1000"
    >
      {/* CARD FRAME */}
      <div 
        className="absolute inset-0 rounded-[20px] bg-[#121212] border 
        border-white/10 shadow-2xl overflow-visible"
        style={{ transform: "translateZ(0px)" }}
      >
        {/* BACKGROUND LAYER (Always Visible) */}
        <div className="absolute inset-0 rounded-[20px] overflow-hidden">
             <motion.div 
                variants={bgVariants}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${images.bg})` }}
            >
               <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>
        </div>

        {/* CHARACTER LAYER (Overlay Match) */}
        {/* 'origin-bottom' use kiya hai taaki zoom hone par pair wahi rahein */}
        <motion.div
            variants={charVariants}
            className="absolute bottom-0 left-0 w-full h-full z-50 pointer-events-none origin-bottom"
            style={{ transformStyle: "preserve-3d" }}
        >
            <img 
                src={images.char} 
                alt={info.name}
                // 'object-cover' taaki bg se exactly match kare
                className="w-full h-full object-cover rounded-[20px]" 
                style={{ objectPosition: "center" }}
            />
        </motion.div>

        {/* INFO TEXT */}
        <div 
            className="absolute bottom-6 left-0 w-full text-center z-40 pointer-events-none"
            style={{ transform: "translateZ(40px)" }}
        >
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter drop-shadow-xl"
                style={{ textShadow: `0 0 20px ${info.color}` }}>
                {info.name}
            </h2>
        </div>
      </div>

      {/* GLOWING BORDER FRAME */}
      <div 
        className="absolute inset-0 rounded-[20px] border-2 z-50 pointer-events-none 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
            transform: "translateZ(20px)",
            borderColor: info.color,
            boxShadow: `0 0 30px ${info.color}40` 
        }} 
      />
    </motion.div>
  );
};

export default StrangerThingsDuel;
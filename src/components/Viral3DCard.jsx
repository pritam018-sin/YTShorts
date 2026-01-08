import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Viral3DCard = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center
     bg-black perspective-1000">
      <Card 
        image="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=1000&auto=format&fit=crop" 
        title="CYBER SAMURAI" 
        color="#00f3ff"
      />
    </div>
  );
};

const Card = ({ image, title, color }) => {
  const ref = useRef(null);

  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for tilt (Makkhan jaisa feel)
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  // Convert mouse position to rotation degrees
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]); // Tilt Up/Down
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]); // Tilt Left/Right
  
  // Glare effect movement
  const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;

    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d", // Important for 3D effect
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-72 h-[420px] rounded-3xl cursor-pointer group"
    >
      {/* 1. NEON GLOW SHADOW (Behind Card) */}
      <div 
        className="absolute inset-0 rounded-3xl blur-2xl opacity-0 
        group-hover:opacity-60 transition-opacity duration-500"
        style={{ background: color }} 
        transform="translateZ(-50px)"
      />

      {/* 2. CARD BASE (Image Container) */}
      <div className="absolute inset-0 bg-gray-900 rounded-3xl 
      overflow-hidden border border-white/10 shadow-2xl">
        {/* Background Image - Scales up slightly on hover */}
        <div 
            className="absolute inset-0 bg-cover bg-center 
            transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 
            bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        </div>

        {/* Glare/Shine Effect */}
        <motion.div 
            style={{ x: glareX, y: glareY }}
            className="absolute w-[200%] h-[200%]
             bg-white/10 blur-3xl rounded-full pointer-events-none -top-1/2 -left-1/2 opacity-0 group-hover:opacity-40 transition-opacity"
        />
      </div>

      {/* 3. POP-OUT CONTENT (Floating Elements) */}
      <div 
        className="absolute inset-0 flex flex-col justify-end p-6"
        style={{ transform: "translateZ(60px)" }} // Magic: Pushes content OUT of the card
      >
        <h2 
            className="text-4xl font-black italic 
            text-transparent bg-clip-text uppercase tracking-tighter"
            style={{ 
                backgroundImage: `linear-gradient(to bottom, white, ${color})`,
                textShadow: `0 10px 20px rgba(0,0,0,0.5)`
            }}
        >
          {title}
        </h2>
        <p className="text-gray-300 text-xs font-medium 
        mt-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 
        group-hover:translate-y-0">
          HOVER INTERACTION • REACT
        </p>
      </div>

      {/* 4. FLOATING BADGE (Extra Pop) */}
      <div 
        className="absolute top-6 right-6 bg-black/50 
        backdrop-blur-md border border-white/20 p-2 rounded-full"
        style={{ transform: "translateZ(80px)" }}
      >
        <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: color }} />
      </div>

    </motion.div>
  );
};

export default Viral3DCard;
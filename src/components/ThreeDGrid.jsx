import React from 'react';

const ThreeDGrid = () => {
  const cards = [
    { id: 1, title: "HTML", color: "from-orange-400 to-red-500", icon: "🌐" },
    { id: 2, title: "CSS", color: "from-blue-400 to-blue-600", icon: "🎨" },
    { id: 3, title: "JS", color: "from-yellow-300 to-yellow-500", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-8 font-sans perspective-[1200px]">

      <h1 className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tighter">
        3D <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Hover</span> Grid
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card) => (
          <div key={card.id} className="group relative w-64 h-80 cursor-pointer">
            

            <div className="relative w-full h-full duration-500 transition-all ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(25deg)_rotateY(20deg)_rotateZ(-5deg)]">
              

              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} shadow-2xl border-2 border-white/20 [transform:translateZ(0px)]`}>
                 <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center [transform:translateZ(40px)]">
                <span className="text-8xl drop-shadow-lg filter">{card.icon}</span>
              </div>

              <div className="absolute bottom-8 left-0 right-0 text-center [transform:translateZ(80px)]">
                <h2 className="text-3xl font-black text-white tracking-widest uppercase drop-shadow-md">
                  {card.title}
                </h2>
                <p className="text-xs text-white/80 font-mono mt-1">CODE MINDS</p>
              </div>


              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none [transform:translateZ(1px)]" />
              
            </div>

            <div className="absolute -bottom-10 left-0 right-0 h-10 bg-black/50 blur-xl rounded-[50%] transition-all duration-500 group-hover:scale-110 group-hover:bg-black/80"></div>
          
          </div>
        ))}
      </div>

      <p className="mt-20 text-gray-500 text-sm">Hover over the cards</p>
    </div>
  );
};

export default ThreeDGrid;
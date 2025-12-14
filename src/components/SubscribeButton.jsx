import React, { useState } from 'react';

const SubscribeButton = () => {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-8 font-sans">
      
      <h1 className="text-4xl font-bold text-white mb-8">
        Click the <span className="text-red-500">Button</span> 👇
      </h1>

      <button
        onClick={() => setSubscribed(!subscribed)}
        className={`
          relative overflow-hidden px-10 py-4 rounded-full text-xl font-bold tracking-wider uppercase transition-all duration-300 transform
          ${subscribed 
            ? 'bg-gray-800 text-gray-400 scale-95 ring-2 ring-gray-600' 
            : 'bg-red-600 text-white scale-100 hover:scale-110 hover:shadow-[0_0_30px_rgba(220,38,38,0.7)]'
          }
        `}
      >
        {/* Shine Effect Animation */}
        {!subscribed && (
          <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-[shimmer_2s_infinite]"></span>
        )}

        <span className="relative z-10 flex items-center gap-2">
          {subscribed ? (
            <>
              <span>✓ Subscribed</span>
            </>
          ) : (
            <>
              <span>Subscribe</span>
              <span className="text-2xl animate-bounce">🔔</span>
            </>
          )}
        </span>
      </button>

      <p className="text-gray-500 text-sm mt-12">
        {subscribed ? "Thanks for joining! 🎉" : "Don't forget to hit it!"}
      </p>

      {/* Tailwind Custom Animation define karne ke liye style tag (Short cut) */}
      <style>{`
        @keyframes shimmer {
          100% { left: 150%; }
        }
      `}</style>
    </div>
  );
};

export default SubscribeButton;
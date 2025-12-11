import React from 'react';

const GalaxyBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020205]">
      {/* Deep Space Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-40"></div>

      {/* Stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-60 animate-pulse-slow"></div>
      
      {/* Multi-colored Nebula Layers */}
      <div className="absolute top-[-40%] left-[-20%] w-[150%] h-[150%] opacity-40 animate-spin-slower"
           style={{
             background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.3), transparent 60%)', // Violet
             filter: 'blur(80px)',
           }}></div>
      
      <div className="absolute bottom-[-20%] right-[-20%] w-[140%] h-[140%] opacity-30 animate-float"
           style={{
             background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.25), transparent 60%)', // Pink
             filter: 'blur(90px)',
             animationDuration: '45s'
           }}></div>

      <div className="absolute top-[20%] right-[10%] w-[100%] h-[100%] opacity-30 animate-float-reverse"
           style={{
             background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.25), transparent 50%)', // Blue
             filter: 'blur(70px)',
             animationDuration: '50s'
           }}></div>

      <div className="absolute bottom-[10%] left-[10%] w-[80%] h-[80%] opacity-20 animate-pulse-slow"
           style={{
             background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.2), transparent 50%)', // Emerald
             filter: 'blur(60px)',
           }}></div>
           
       {/* Vignette Overlay */}
       <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-[#020205]/80 pointer-events-none"></div>
       
       <style>{`
         @keyframes spin-slower {
           from { transform: rotate(0deg); }
           to { transform: rotate(360deg); }
         }
         @keyframes float {
           0%, 100% { transform: translate(0, 0); }
           50% { transform: translate(40px, -40px); }
         }
         @keyframes float-reverse {
           0%, 100% { transform: translate(0, 0); }
           50% { transform: translate(-40px, 40px); }
         }
         @keyframes pulse-slow {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.7; }
         }
         .animate-spin-slower {
           animation-name: spin-slower;
           animation-duration: 120s;
           animation-iteration-count: infinite;
           animation-timing-function: linear;
         }
         .animate-float {
           animation-name: float;
           animation-iteration-count: infinite;
           animation-timing-function: ease-in-out;
         }
         .animate-float-reverse {
           animation-name: float-reverse;
           animation-iteration-count: infinite;
           animation-timing-function: ease-in-out;
         }
         .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
         }
       `}</style>
    </div>
  );
};

export default GalaxyBackground;
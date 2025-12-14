import { useState } from "react";
import ArcadeOverlay from "./arcadeoverlay"; // Ensure path matches your structure

export default function ProjectCard({ 
  title, 
  image, 
  link, 
  mode = "arcade", 
  version = "v1.0", // New prop for flavor
  size = "64KB"     // New prop for flavor
}) {
  const [open, setOpen] = useState(false);

  // Helper to determine badge color/icon based on mode
  const getModeBadge = () => {
    switch(mode) {
      case "interactive": return { label: "TOUCH CORE", icon: "📱", color: "text-blue-400 border-blue-500" };
      case "adaptive":    return { label: "HYBRID SYS", icon: "⟷", color: "text-purple-400 border-purple-500" };
      default:            return { label: "ARCADE ROM", icon: "🕹", color: "text-green-400 border-green-500" };
    }
  };

  const badge = getModeBadge();

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group relative cursor-pointer overflow-hidden bg-black border-2 border-neutral-800 hover:border-green-500 transition-all duration-300"
      >
        
        {/* === HOVER SCANLINE EFFECT === */}
        {/* A green bar that scans down the card when you hover */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-green-500/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 ease-in-out pointer-events-none z-10"></div>

        {/* === CARD IMAGE (The "Sticker") === */}
        <div className="relative h-48 w-full overflow-hidden border-b-2 border-neutral-800 group-hover:border-green-500/50 transition-colors">
            {/* Image gets slight scanlines overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 mix-blend-overlay"></div>
            
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
            />
            
            {/* Mode Badge (Floating) */}
            <div className={`absolute top-2 right-2 z-20 font-tech text-[10px] bg-black/80 backdrop-blur-sm px-2 py-1 border ${badge.color} shadow-lg`}>
               {badge.icon} {badge.label}
            </div>
        </div>

        {/* === CARD BODY (The "Plastic Shell") === */}
        <div className="p-4 relative bg-neutral-900 group-hover:bg-neutral-900/80 transition-colors">
            
            {/* Header Flex */}
            <div className="flex justify-between items-start mb-2">
                <h2 className="font-arcade text-sm md:text-base text-white group-hover:text-green-400 transition-colors leading-tight">
                    {title}
                </h2>
                {/* Status Light */}
                <div className="h-2 w-2 rounded-full bg-neutral-700 group-hover:bg-green-500 shadow-[0_0_5px_rgba(0,255,0,0)] group-hover:shadow-[0_0_8px_rgba(34,197,94,1)] transition-all duration-300 mt-1"></div>
            </div>

            {/* Tech Specs Grid */}
            <div className="grid grid-cols-2 gap-2 mb-3 border-t border-dashed border-neutral-700 pt-2 font-tech text-[10px] text-neutral-500 uppercase">
                <div>
                   <span className="opacity-50">VER:</span> {version}
                </div>
                <div className="text-right">
                   <span className="opacity-50">SIZE:</span> {size}
                </div>
            </div>

            {/* Footer Action */}
            <div className="flex items-center justify-between font-retro text-xs">
                 <span className="text-neutral-400 group-hover:text-white transition-colors">
                    {mode === "adaptive" ? "Auto-Detect Device" : mode === "interactive" ? "Touch Input Ready" : "Keyboard Required"}
                 </span>
                 <span className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300 font-bold">
                    [LOAD] ▶
                 </span>
            </div>

        </div>
      </div>

      {/* === THE OVERLAY === */}
      {open && (
        <ArcadeOverlay
          src={link}
          mode={mode}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
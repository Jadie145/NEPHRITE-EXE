import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { pathname } = useLocation();

  const items = [
    { name: "HOME", path: "/" },
    { name: "PROJECTS", path: "/projects" },
    { name: "ABOUT", path: "/about" },
    { name: "SYS", path: "/sys" },
  ];

  return (
    /* 1. Sticky: Keeps it at the top 
      2. z-50: Forces it above the retro starfield
      3. Backdrop blur: Makes it look like high-tech glass
    */
    <nav className="fixed top-0 left-0 z-50 w-full border-b-2 border-green-900/50 bg-black/90 backdrop-blur-sm">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between p-3">
        
        {/* LEFT: Navigation Links (Scrollable on mobile) */}
        <div className="flex gap-1 md:gap-4 overflow-x-auto no-scrollbar w-full md:w-auto pr-4">
          {items.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <Link key={item.path} to={item.path}>
                <button
                  className={`
                    relative font-arcade text-xs md:text-sm px-4 py-2 transition-all duration-200 whitespace-nowrap
                    border-2 
                    ${isActive 
                      ? "border-green-500 bg-green-900/20 text-green-400 shadow-[0_0_10px_rgba(0,255,0,0.4)]" 
                      : "border-transparent text-gray-500 hover:text-green-200 hover:border-green-800/50"
                    }
                  `}
                >
                  {/* The Blinking Cursor for Active State */}
                  {isActive && <span className="absolute left-1.5 animate-pulse">▶</span>}
                  
                  {item.name}
                </button>
              </Link>
            );
          })}
        </div>

        {/* RIGHT: Theme Toggle & Status Light */}
        <div className="flex items-center gap-4 shrink-0">
          
          {/* Decorative 'Online' Light (Hidden on small mobiles) */}
          <div className="hidden sm:flex items-center gap-2 font-tech text-xs text-green-600">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             NET:ON
          </div>

          <ThemeToggle />
        </div>
      </div>
      
      {/* Decorative Scanline at the bottom of nav */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
    </nav>
  );
}
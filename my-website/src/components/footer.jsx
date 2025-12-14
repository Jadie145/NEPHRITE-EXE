export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    /* FIXED POSITION: Glues it to the bottom of the viewport */
    <footer className="
      fixed bottom-0 left-0 z-40 w-full
      border-t-2 border-green-900/50 
      bg-neutral-100/90 dark:bg-black/90 backdrop-blur-md
      font-tech text-[10px] md:text-xs uppercase tracking-widest
      text-green-900 dark:text-green-600/70
      py-1 px-4
      select-none
    ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LEFT: Copyright & Identity */}
        <div className="flex items-center gap-4">
          <span className="font-bold">© {currentYear} NEPHRITE.EXE</span>
          <span className="hidden md:inline opacity-30">|</span>
          <span className="hidden md:inline">SYSTEM_READY</span>
        </div>

        {/* CENTER: Decorative Tech Stats (Hidden on small mobile) */}
        <div className="hidden sm:flex items-center gap-6 opacity-60">
           <div className="flex items-center gap-2">
              <span>MEM:</span>
              <span className="text-green-700 dark:text-green-400">64KB OK</span>
           </div>
           <div className="flex items-center gap-2">
              <span>BUILD:</span>
              <span>v.1.0.4-STABLE</span>
           </div>
        </div>

        {/* RIGHT: Status Indicator */}
        <div className="flex items-center gap-2">
           <span className="hidden sm:inline opacity-50">NET_STATUS:</span>
           <span className="text-green-700 dark:text-green-400 font-bold">ONLINE</span>
           {/* Blinking Square Cursor */}
           <span className="h-2 w-2 bg-green-600 dark:bg-green-500 animate-pulse"></span>
        </div>

      </div>
    </footer>
  );
}
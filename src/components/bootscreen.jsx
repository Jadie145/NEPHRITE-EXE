import { useEffect, useState, useRef } from "react";

// Helper function for random delays

export default function BootScreen({ onFinish }) {
  const [lines, setLines] = useState([
    "NEPHRITE SYSTEMS [Version 1.0.4]",
    "(c) 2025 JaydeN Corp. All rights reserved.",
    "",
    "BIOS Check ................. OK",
  ]);
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  
  // Ref to keep the terminal scrolled to the bottom
  const containerRef = useRef(null);

  useEffect(() => {
    // Helper to scroll to bottom
    const scrollToBottom = () => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    };

    const bootSequence = async () => {
      // Helper function to add a line with a delay
      const addLine = (text, delay = 100) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            setLines((prev) => [...prev, text]);
            scrollToBottom();
            resolve();
          }, delay);
        });
      };

      // --- PHASE 1: FAST MEMORY DUMP ---
      for (let i = 0; i < 6; i++) {
        const hex = Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase().padEnd(6, '0');
        await addLine(`LOADING MEMORY BLOCK [0x${hex}] ... OK`, 40); // Fast speed
      }

      await addLine("", 100);
      await addLine("Initializing graphics engine...", 300);
      await addLine("Mounting file system...", 200);

      // --- PHASE 2: PROGRESS BAR ---
      setShowProgress(true);
      
      // Simulate loading percentage
      for (let i = 0; i <= 100; i += 4) {
        await new Promise(r => setTimeout(r, 20)); // Fast progress tick
        setProgress(i);
      }

      await addLine("ACCESS GRANTED.", 400);
      await addLine("Launching NEPHRITE.EXE...", 600);
      
      // Small pause before disappearing
      setTimeout(onFinish, 800);
    };

    bootSequence();
  }, [onFinish]);

  return (
    <div 
      className="fixed inset-0 bg-black text-green-500 font-mono p-6 z-50 flex flex-col justify-end overflow-hidden cursor-wait"
      onClick={onFinish} // Allow user to click to skip
    >
      {/* Overlay Scanlines (Optional, if not already global) */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

      {/* Terminal Content */}
      <div ref={containerRef} className="w-full max-w-2xl h-full overflow-y-auto no-scrollbar flex flex-col justify-end pb-10">
        
        {/* Render Lines */}
        {lines.map((line, i) => (
          <div key={i} className="break-words leading-tight">
            <span className="text-gray-500 mr-2">{`>`}</span>
            <span className={line.includes("OK") ? "text-green-400" : "text-green-600"}>
              {line}
            </span>
          </div>
        ))}

        {/* Progress Bar Section */}
        {showProgress && (
          <div className="mt-4 border border-green-700 p-1 w-full max-w-md animate-pulse">
            <div 
              className="h-4 bg-green-500 transition-all duration-75 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        {/* Blinking Cursor */}
        <div className="mt-2">
          <span className="text-green-500 animate-pulse">_</span>
        </div>
      </div>

      {/* Skip Hint */}
      <div className="absolute bottom-4 right-6 text-xs text-gray-600 uppercase">
        Click to Skip Initialization
      </div>
    </div>
  );
}
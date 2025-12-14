import { useState, useEffect } from "react";
import { useSystemSettings } from "../hooks/usesystemsettings";

export default function System() {
  const { settings, updateSettings, reset } = useSystemSettings();
  const [uptime, setUptime] = useState(0);

  // Simple uptime counter simulation
  useEffect(() => {
    const timer = setInterval(() => setUptime((p) => p + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format uptime into HH:MM:SS
  const formatTime = (s) => {
    const hrs = Math.floor(s / 3600).toString().padStart(2, '0');
    const mins = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
    const secs = (s % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* === HEADER === */}
      {/* Border: Dark Green in Light Mode / Neon Green in Dark Mode */}
      <header className="flex items-center justify-between border-b-2 border-green-700/30 dark:border-green-900/50 pb-4">
        <div className="flex items-center gap-3">
            <div className="h-3 w-3 bg-green-600 dark:bg-green-500 animate-pulse shadow-[0_0_10px_rgba(22,163,74,0.5)] dark:shadow-[0_0_10px_#22c55e]"></div>
            
            {/* Title: Dark Green (Readability) / Neon Green (Glow) */}
            <h1 className="font-arcade text-2xl md:text-3xl tracking-widest text-green-800 dark:text-green-400">
                SYS::CONFIG
            </h1>
        </div>
        <div className="font-tech text-xs text-green-700 dark:text-green-600/70 font-bold">
            UPTIME: {formatTime(uptime)}
        </div>
      </header>

      {/* === GRID LAYOUT === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* PANEL 1: VISUAL SETTINGS */}
        <section className="space-y-4">
            <h2 className="font-arcade text-lg text-green-700 dark:text-green-300 flex items-center gap-2">
                <span className="text-green-600">▶</span> GRAPHICS_ENGINE
            </h2>
            
            {/* Card Background: White Glass / Black Glass */}
            <div className="border border-green-600/30 dark:border-green-900/30 bg-white/60 dark:bg-black/40 p-4 space-y-6 backdrop-blur-sm shadow-sm">
                
                {/* CRT TOGGLE */}
                <div className="flex items-center justify-between">
                    <span className="font-tech text-green-900 dark:text-green-400 font-bold">CRT_EMULATION</span>
                    <button 
                        onClick={() => updateSettings({ crt: !settings.crt })}
                        className={`font-arcade text-xs px-3 py-1 border transition-all ${
                            settings.crt 
                            ? "bg-green-600 text-white dark:text-black border-green-600 dark:border-green-400 shadow-md" 
                            : "bg-transparent text-gray-500 border-gray-400 dark:border-gray-700"
                        }`}
                    >
                        {settings.crt ? "ENABLED" : "DISABLED"}
                    </button>
                </div>

                {/* SCANLINE SLIDER */}
                <div className="space-y-2">
                    <div className="flex justify-between font-tech text-xs text-green-800 dark:text-green-400/80 font-bold">
                        <span>SCANLINE_OPACITY</span>
                        <span>{(settings.scanlines * 100).toFixed(0)}%</span>
                    </div>
                    <input 
                        type="range" 
                        min="0" max="0.5" step="0.05"
                        value={settings.scanlines || 0.15}
                        onChange={(e) => updateSettings({ scanlines: parseFloat(e.target.value) })}
                        className="w-full h-2 bg-gray-300 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-green-600 dark:accent-green-500"
                    />
                </div>

                {/* SOUND TOGGLE */}
                <div className="flex items-center justify-between">
                    <span className="font-tech text-green-900 dark:text-green-400 font-bold">AUDIO_HAPTICS</span>
                    <button 
                        onClick={() => updateSettings({ sound: !settings.sound })}
                        className={`font-arcade text-xs px-3 py-1 border transition-all ${
                            settings.sound 
                            ? "bg-green-600 text-white dark:text-black border-green-600 dark:border-green-400" 
                            : "bg-transparent text-gray-500 border-gray-400 dark:border-gray-700"
                        }`}
                    >
                        {settings.sound ? "ON" : "OFF"}
                    </button>
                </div>

            </div>
        </section>

        {/* PANEL 2: SYSTEM DIAGNOSTICS */}
        <section className="space-y-4">
            <h2 className="font-arcade text-lg text-green-700 dark:text-green-300 flex items-center gap-2">
                <span className="text-green-600">▶</span> DIAGNOSTICS
            </h2>

            <div className="border border-green-600/30 dark:border-green-900/30 bg-white/60 dark:bg-black/40 p-4 space-y-4 font-tech text-sm backdrop-blur-sm shadow-sm">
                
                <div className="flex justify-between border-b border-green-600/20 dark:border-green-900/30 pb-2">
                    <span className="text-gray-600 dark:text-gray-400 font-bold">KERNEL_VER</span>
                    <span className="text-green-700 dark:text-green-500 font-mono">NEPHRITE.EXE v1.0.4</span>
                </div>

                <div className="flex justify-between border-b border-green-600/20 dark:border-green-900/30 pb-2">
                    <span className="text-gray-600 dark:text-gray-400 font-bold">RENDERING</span>
                    <span className="text-green-700 dark:text-green-500 font-mono">REACT 18 + VITE</span>
                </div>

                <div className="flex justify-between border-b border-green-600/20 dark:border-green-900/30 pb-2">
                    <span className="text-gray-600 dark:text-gray-400 font-bold">STYLE_SHEET</span>
                    <span className="text-green-700 dark:text-green-500 font-mono">TAILWIND CSS</span>
                </div>

                {/* Fake Memory Graph */}
                <div className="space-y-1 pt-2">
                    <div className="flex justify-between text-xs text-gray-500 font-bold">
                        <span>MEMORY_ALLOC</span>
                        <span>64MB / 128MB</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-300 dark:bg-gray-800">
                        <div className="h-full bg-yellow-600 dark:bg-yellow-500 w-[50%] animate-pulse"></div>
                    </div>
                </div>

            </div>
        </section>
      </div>

      {/* === FOOTER: DANGER ZONE === */}
      <section className="mt-8 border-t-2 border-red-200 dark:border-red-900/50 pt-6">
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <div className="space-y-1">
                <h3 className="font-arcade text-red-600 dark:text-red-500 text-lg">⚠ DANGER ZONE</h3>
                <p className="font-tech text-red-800/80 dark:text-red-400/70 text-sm max-w-md font-bold">
                    Initiating factory reset will purge all session data, reset visual settings, and clear local cache. This action cannot be undone.
                </p>
            </div>

            <button
                onClick={reset}
                className="
                    group relative px-6 py-3 font-arcade text-sm text-red-600 dark:text-red-500 border border-red-600 
                    hover:bg-red-600 hover:text-white dark:hover:text-black transition-all duration-200
                    overflow-hidden
                "
            >
                {/* Hazard Stripes Background */}
                <div className="absolute inset-0 w-[200%] h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)] dark:bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <span className="relative z-10 flex items-center gap-2">
                    [ INITIATE RESET ]
                </span>
            </button>

        </div>
      </section>

    </div>
  );
}
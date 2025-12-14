import { useTheme } from "@/hooks/usetheme";

export default function ThemeToggle() {
  const { mode, cycleTheme } = useTheme();

  // Configuration for each state (Color, Icon, Glow)
  const themeConfig = {
    light: {
      label: "LGT", // Abbreviated for tech feel
      icon: "☀",
      color: "text-yellow-400",
      border: "border-yellow-600/50",
      glow: "hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]",
      bg: "hover:bg-yellow-900/20"
    },
    dark: {
      label: "DRK",
      icon: "🌙",
      color: "text-blue-400",
      border: "border-blue-600/50",
      glow: "hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]",
      bg: "hover:bg-blue-900/20"
    },
    system: {
      label: "SYS",
      icon: "💻",
      color: "text-green-400",
      border: "border-green-600/50",
      glow: "hover:shadow-[0_0_15px_rgba(74,222,128,0.4)]",
      bg: "hover:bg-green-900/20"
    }
  };

  // Fallback to 'system' if mode is undefined
  const active = themeConfig[mode] || themeConfig.system;

  return (
    <button
      onClick={cycleTheme}
      className={`
        group relative flex items-center gap-3 px-3 py-1.5
        bg-black/50 backdrop-blur-md border-2 
        font-tech text-xs tracking-widest
        transition-all duration-300 ease-out
        ${active.border} ${active.color} ${active.glow} ${active.bg}
        active:scale-95
      `}
      title={`Theme Mode: ${mode.toUpperCase()}`}
    >
      {/* 1. Status LED (Pulses with the active color) */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
      </span>

      {/* 2. Label & Icon */}
      <div className="flex items-center gap-2">
        <span className="opacity-80 group-hover:opacity-100 transition-opacity">
            {active.label}
        </span>
        <span className="text-[10px] opacity-60">
            {active.icon}
        </span>
      </div>

      {/* 3. Decorative Corner Accents (The "Tech" Look) */}
      <div className="absolute top-0 left-0 w-1 h-1 bg-current opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-1 h-1 bg-current opacity-50"></div>
    </button>
  );
}
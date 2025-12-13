import { useTheme } from "@/hooks/usetheme";

export default function ThemeToggle() {
  const { mode, cycleTheme } = useTheme();

  const label =
    mode === "light" ? "☀ LIGHT" :
    mode === "dark" ? "🌙 DARK" :
    "💻 SYSTEM";

  return (
    <button
      onClick={cycleTheme}
      className="pixel-border px-3 py-1 bg-neutral-800 text-white text-xs hover:translate-x-[2px] hover:translate-y-[2px]"
      title="Toggle theme"
    >
      {label}
    </button>
  );
}

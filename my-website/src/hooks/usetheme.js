import { useEffect, useState } from "react";

const MODES = ["light", "dark", "system"];

export function useTheme() {
  const [mode, setMode] = useState(
    localStorage.getItem("theme") || "system"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (mode === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", prefersDark);
    } else {
      root.classList.toggle("dark", mode === "dark");
    }

    localStorage.setItem("theme", mode);
  }, [mode]);

  const cycleTheme = () => {
    setMode((prev) => MODES[(MODES.indexOf(prev) + 1) % MODES.length]);
  };

  return { mode, cycleTheme };
}

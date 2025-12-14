import { useEffect, useState } from "react";

const DEFAULTS = {
  crt: false,       // CRT Curve & Vignette
  background: true, // Retro Starfield/Grid
  sound: true,      // UI Sounds
  debug: false,     // Debug Borders
  scanlines: 0.15,  // Intensity (0.0 to 0.5)
};

export function useSystemSettings() {
  // 1. Initialize State
  const [settings, setSettings] = useState(() => {
    // Check local storage for saved config
    const saved = localStorage.getItem("sys-settings");
    return saved ? JSON.parse(saved) : DEFAULTS;
  });

  // 2. Persist to LocalStorage whenever settings change
  useEffect(() => {
    localStorage.setItem("sys-settings", JSON.stringify(settings));
  }, [settings]);

  // 3. The "Update" function (This fixes your error)
  // Allows passing an object like { crt: true } or { scanlines: 0.5 }
  const updateSettings = (newValues) => {
    setSettings((prev) => ({ ...prev, ...newValues }));
  };

  // 4. Factory Reset
  const reset = () => {
    localStorage.removeItem("sys-settings");
    setSettings(DEFAULTS);
    sessionStorage.removeItem("booted"); // Clears boot screen state too
    window.location.reload(); // Force refresh to apply clean state
  };

  // Return everything the System page needs
  return { settings, updateSettings, reset };
}
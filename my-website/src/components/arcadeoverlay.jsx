import { useEffect, useState } from "react";

export default function ArcadeOverlay({ src, mode = "arcade", onClose }) {
  const [booting, setBooting] = useState(true);

  // Detect touch-based devices (phones, tablets, touch laptops)
  const isMobile = window.matchMedia("(pointer: coarse)").matches;

  // Resolve final mode
  const resolvedMode =
    mode === "adaptive"
      ? isMobile
        ? "interactive"
        : "arcade"
      : mode;

  // Boot screen delay
  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 700);
    return () => clearTimeout(timer);
  }, []);

  // ESC to exit
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-3 pixel-border bg-neutral-900">
        <span className="text-white">
          {resolvedMode === "arcade"
            ? "ARCADE MODE"
            : resolvedMode === "interactive"
            ? "INTERACTIVE MODE"
            : "ADAPTIVE MODE"}
        </span>

        <button
          onClick={onClose}
          className="pixel-border px-3 py-1 bg-red-600 text-white"
        >
          ✕ EXIT
        </button>
      </div>

      {/* Content */}
      {booting ? (
        /* BOOT SCREEN */
        <div className="flex-1 flex flex-col items-center justify-center bg-black text-white pixel-font">
          <p className="mb-4">INSERT COIN</p>
          <p className="animate-pulse">● ● ●</p>
        </div>
      ) : resolvedMode === "arcade" ? (
        /* ARCADE MODE */
        <div className="flex-1 flex items-center justify-center bg-black overflow-hidden">
          <div className="crt pixel-border arcade-screen">
            <iframe
              src={src}
              className="arcade-iframe"
              title="Arcade"
            />
          </div>
        </div>
      ) : (
        /* INTERACTIVE MODE */
        <div className="flex-1 bg-black">
          <iframe
            src={src}
            className="w-full h-full border-none"
            title="Interactive"
          />
        </div>
      )}
    </div>
  );
}

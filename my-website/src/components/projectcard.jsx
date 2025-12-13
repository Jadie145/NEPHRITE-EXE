import { useState } from "react";
import ArcadeOverlay from "./ArcadeOverlay";

export default function ProjectCard({ title, image, link, mode = "arcade" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="relative pixel-border pixel-hover bg-neutral-800 p-4 cursor-pointer"
      >
        {/* Mode Badge */}
        <div className="absolute top-3 right-3 pixel-border px-2 py-1 text-xs bg-black text-white">
          {mode === "arcade" && "🕹 ARCADE"}
          {mode === "interactive" && "📱 TOUCH"}
          {mode === "adaptive" && "🖥📱 ADAPTIVE"}
        </div>

        <img
          src={image}
          alt={title}
          className="mb-3 w-full h-40 object-cover pixel-border"
        />

        <h2 className="text-lg font-bold">{title}</h2>

        <p className="text-xs opacity-60 mt-1">
          ▶ CLICK TO PLAY
        </p>

        {/* Subtle mode hint */}
        <p className="text-[10px] opacity-50 mt-1">
          {mode === "arcade" && "Keyboard / Desktop"}
          {mode === "interactive" && "Touch / Mobile Friendly"}
          {mode === "adaptive" && "Auto adapts to device"}
        </p>
      </div>

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

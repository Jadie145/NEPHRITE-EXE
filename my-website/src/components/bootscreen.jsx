import { useEffect, useState } from "react";

export default function BootScreen({ onFinish }) {
  const [line, setLine] = useState(0);

  const lines = [
    "JAYDE SYSTEMS BIOS v1.0",
    "Checking memory...",
    "Loading assets...",
    "Mounting projects...",
    "READY."
  ];

  useEffect(() => {
    if (line < lines.length) {
      const timer = setTimeout(() => setLine(line + 1), 700);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onFinish, 600);
    }
  }, [line, onFinish]);

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono p-6 z-50">
      {lines.slice(0, line).map((text, i) => (
        <p key={i}>{"> "}{text}</p>
      ))}
      <span className="animate-pulse">█</span>
    </div>
  );
}

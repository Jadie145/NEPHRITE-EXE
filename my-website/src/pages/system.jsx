import ThemeToggle from "@/components/ThemeToggle";

export default function System() {
  const isTouch = window.matchMedia("(pointer: coarse)").matches;

  return (
    <div className="max-w-3xl mx-auto mt-10 pixel-border bg-neutral-900 p-6">
      <h1 className="text-xl mb-6">SYSTEM SETTINGS</h1>

      <div className="space-y-4 text-sm">
        <div>
          <span className="opacity-60">DEVICE:</span>{" "}
          {isTouch ? "TOUCH / MOBILE" : "DESKTOP / KEYBOARD"}
        </div>

        <div>
          <span className="opacity-60">THEME:</span>{" "}
          <ThemeToggle />
        </div>

        <div>
          <span className="opacity-60">CONTROLS:</span>
          <ul className="ml-4 list-disc">
            <li>ESC — Exit arcade</li>
            <li>CLICK — Select project</li>
            <li>ARROWS / WASD — Game input</li>
          </ul>
        </div>

        <div className="opacity-50 mt-6">
          JAYDE.EXE v1.0  
          <br />
          Built with React + Vite
        </div>
      </div>
    </div>
  );
}

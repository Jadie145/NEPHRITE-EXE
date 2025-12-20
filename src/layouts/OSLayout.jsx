import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar"; // Check your casing (navbar vs Navbar)
import Footer from "../components/footer"; // Check your casing
import { useSystemSettings } from "../hooks/usesystemsettings";

export default function OSLayout() {
  const { settings } = useSystemSettings();

  return (
    <>
      {/* === LAYER 1: FIXED BACKGROUND WALLPAPER (Only for OS Pages) === */}
      <div 
          className={`fixed inset-0 z-0 pointer-events-none ${
              settings.background ? "retro-bg" : "bg-neutral-900"
          }`}
      ></div>

      {/* === LAYER 2: OS UI (Navbar + Content + Footer) === */}
      <div className="relative z-10">
          <Navbar />

          <main className="pt-24 pb-24 px-4 max-w-7xl mx-auto min-h-screen flex flex-col">
            {/* <Outlet /> renders the child route (Home, About, etc.) */}
            <Outlet />
          </main>

          <Footer />
      </div>
    </>
  );
}
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import BootScreen from "./components/BootScreen";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/system";

export default function App() {
  const [booted, setBooted] = useState(
    sessionStorage.getItem("booted") === "true"
  );

  const finishBoot = () => {
    sessionStorage.setItem("booted", "true");
    setBooted(true);
  };

  if (!booted) {
    return <BootScreen onFinish={finishBoot} />;
  }

  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

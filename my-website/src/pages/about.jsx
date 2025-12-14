

export default function About() {
  // Profile Config (Pulled from your GitHub / README)
  const profile = {
    user: "Jadie145",
    name: "404 ERROR",
    role: "SEMI STACK OPERATIVE",
    level: "LVL. 25",
    location: "VOID (Remote)",
    status: "BUSY",
    github: "https://github.com/Jadie145",
    avatar: "https://github.com/Jadie145.png", // Auto-fetches your real GitHub picture
  };

  const skills = [
    { name: "React / Vite", level: 70, color: "bg-blue-600 dark:bg-blue-500" },
    { name: "Tailwind CSS", level: 60, color: "bg-cyan-600 dark:bg-cyan-400" },
    { name: "JavaScript (ES6+)", level: 85, color: "bg-yellow-600 dark:bg-yellow-400" },
    { name: "Node.js / API", level: 75, color: "bg-green-600 dark:bg-green-500" },
    { name: "UI / UX Design", level: 80, color: "bg-purple-600 dark:bg-purple-500" },
  ];

  const history = [
    { year: "2025", event: "INITIALIZED JAYDE.EXE PORTFOLIO SYSTEM" },
    { year: "2025", event: "CONTRIBUTED TO INTERNSHIP PROJECT" },
    { year: "2024", event: "JOINNED GITHUB" },
    { year: "2022", event: "SYSTEM BOOT // STARTED CODING JOURNEY" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* === HEADER: IDENTITY RECORD === */}
      {/* Light Mode: White Background with Dark Green Border | Dark Mode: Black Translucent with Neon Border */}
      <section className="relative p-6 border-2 border-green-700/50 dark:border-green-900/50 bg-white/70 dark:bg-black/40 backdrop-blur-md overflow-hidden group shadow-lg">
        
        {/* Decorative corner markers */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-green-700 dark:border-green-500"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-green-700 dark:border-green-500"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-green-700 dark:border-green-500"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-green-700 dark:border-green-500"></div>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            
            {/* AVATAR FRAME */}
            <div className="shrink-0 relative w-32 h-32 md:w-40 md:h-40 border-2 border-green-700/50 dark:border-green-600/50 bg-gray-200 dark:bg-black">
                {/* Real GitHub Avatar */}
                <img 
                    src={profile.avatar} 
                    alt="Avatar" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Scanline overlay on image */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none mix-blend-overlay"></div>
                <div className="absolute bottom-0 right-0 bg-green-700 dark:bg-green-600 text-white dark:text-black text-[10px] px-1 font-bold">IMG_01</div>
            </div>

            {/* IDENTITY STATS */}
            <div className="flex-1 space-y-4 text-center md:text-left w-full">
                <div>
                    <h1 className="font-arcade text-3xl md:text-5xl text-green-900 dark:text-green-400 mb-1 tracking-tight">
                      {profile.name}
                    </h1>
                    <div className="font-tech text-green-800/70 dark:text-green-600/80 text-sm tracking-widest border-b border-green-700/30 dark:border-green-900/50 pb-2 mb-4 font-bold">
                        {profile.role} // {profile.level}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-retro text-sm md:text-lg text-gray-800 dark:text-gray-300">
                    <div className="flex justify-between md:justify-start gap-4 border-b border-gray-300/50 dark:border-gray-800 pb-1 md:border-0">
                        <span className="font-bold opacity-50">LOC:</span>
                        <span>{profile.location}</span>
                    </div>
                    <div className="flex justify-between md:justify-start gap-4 border-b border-gray-300/50 dark:border-gray-800 pb-1 md:border-0">
                        <span className="font-bold opacity-50">STAT:</span>
                        <span className="text-green-700 dark:text-green-400 animate-pulse font-bold">{profile.status}</span>
                    </div>
                    <div className="flex justify-between md:justify-start gap-4">
                        <span className="font-bold opacity-50">OS:</span>
                        <span>HUMAN v1.0 (Average)</span>
                    </div>
                </div>

                {/* GitHub Button */}
                <div className="pt-2">
                   <a 
                     href={profile.github} 
                     target="_blank" 
                     rel="noreferrer"
                     className="inline-flex items-center gap-2 px-4 py-2 font-arcade text-xs bg-gray-900 text-white dark:bg-green-900/20 dark:text-green-400 border border-transparent dark:border-green-500 hover:scale-105 transition-transform"
                   >
                     <span>GITHUB_REPO</span>
                     <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   </a>
                </div>
            </div>
        </div>
      </section>

      {/* === TWO COLUMN DATA GRID === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* LEFT: BIO & LOGS */}
          <section className="space-y-6">
              <h2 className="font-arcade text-xl border-l-4 border-green-600 dark:border-green-500 pl-3 text-green-900 dark:text-green-400">
                  SYSTEM_LOG
              </h2>
              
              <div className="font-retro text-lg leading-relaxed text-gray-800 dark:text-green-100/80 space-y-4">
                  <p className="bg-white/50 dark:bg-transparent p-2 rounded">
                      <span className="text-green-700 dark:text-green-500 mr-2 font-bold">{">"}</span>
                      I enjoy crafting and understanding eye-catching interfaces and turning data into meaningful insights.
                      I work on small games, AI experiments, and workflow automation scripts.
                      Currently a student at Don Bosco College of Engineering, exploring new tools — especially when they make tasks simpler.
                  </p>
                  <p className="bg-white/50 dark:bg-transparent p-2 rounded">
                      <span className="text-green-700 dark:text-green-500 mr-2 font-bold">{">"}</span>
                      I enjoy being lazy, because that's that best time you are strucked with inovative ideas.😅
                  </p>
              </div>

              {/* CHRONOLOGY */}
              <div className="space-y-3 pt-4">
                  {history.map((item, i) => (
                      <div key={i} className="flex gap-4 font-tech text-xs md:text-sm text-gray-600 dark:text-green-300/70">
                          <span className="text-green-700 dark:text-green-500 font-bold min-w-[50px]">{item.year}</span>
                          <span className="border-l border-green-700/30 dark:border-green-900 pl-4">{item.event}</span>
                      </div>
                  ))}
              </div>
          </section>

          {/* RIGHT: SKILL MATRIX */}
          <section className="space-y-6">
              <h2 className="font-arcade text-xl border-l-4 border-purple-600 dark:border-purple-500 pl-3 text-purple-900 dark:text-purple-400">
                  SKILL_MATRIX
              </h2>

              <div className="space-y-4 bg-white/60 dark:bg-black/20 p-4 border border-gray-300 dark:border-white/5 rounded backdrop-blur-sm">
                  {skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                          <div className="flex justify-between font-tech text-xs text-gray-800 dark:text-gray-300 font-bold">
                              <span>{skill.name}</span>
                              <span>{skill.level}%</span>
                          </div>
                          {/* Progress Bar Container */}
                          <div className="h-2 w-full bg-gray-300 dark:bg-gray-800 rounded-sm overflow-hidden">
                              {/* Animated Fill */}
                              <div 
                                  className={`h-full ${skill.color} shadow-[0_0_5px_currentColor]`} 
                                  style={{ width: `${skill.level}%` }}
                              ></div>
                          </div>
                      </div>
                  ))}
              </div>

              {/* DECORATIVE TERMINAL FOOTER */}
              <div className="mt-8 p-4 border border-dashed border-gray-400 dark:border-gray-600/30 font-retro text-xs text-center text-gray-500 dark:text-gray-500">
                  END OF FILE. PRESS [ESC] TO RETURN TO ROOT.
              </div>
          </section>
      </div>

    </div>
  );
}
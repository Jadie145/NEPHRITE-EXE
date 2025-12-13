import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center mt-20 gap-10">
      {/* Title */}
      <div>
        <h1 className="text-4xl mb-4">▶ JAYDE.EXE</h1>
        <p className="opacity-70">
          Retro tools, experiments & playable projects
        </p>
        <p className="mt-4 text-xs opacity-50">
          PRESS ▶ PROJECTS TO START
        </p>
      </div>

      {/* Featured */}
      <div className="w-full max-w-5xl">
        <h2 className="text-lg mb-4 text-left">
          FEATURED PROJECTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

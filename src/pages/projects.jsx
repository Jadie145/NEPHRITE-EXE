import projects from "../projects/projects.json";
import ProjectCard from "../components/projectcard";


export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">SELECT A PROJECT</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}


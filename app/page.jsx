import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-10 text-sage-700">My Mini Projects Portfolio</h1>
      <section id="projects" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            proj={proj}
          />
        ))}
      </section>
    </main>
  );
}
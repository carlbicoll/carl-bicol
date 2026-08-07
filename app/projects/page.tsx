import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { ScrollFadeIn } from "../components/ScrollFadeIn";

const PROJECTS = [
  {
    title: "Project Alpha",
    description:
      "Placeholder: A web application that helps users manage their daily tasks with an intuitive interface and real-time syncing across devices.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/project-alpha",
    demoUrl: "https://project-alpha.vercel.app",
  },
  {
    title: "Project Beta",
    description:
      "Placeholder: A REST API service that processes and transforms data from multiple sources, providing a unified endpoint for downstream consumers.",
    techStack: ["Node.js", "Express", "MongoDB", "Docker"],
    githubUrl: "https://github.com/yourusername/project-beta",
    demoUrl: "https://project-beta.vercel.app",
  },
  {
    title: "Project Gamma",
    description:
      "Placeholder: A minimal portfolio template for developers, featuring dark mode, responsive design, and easy content management through config files.",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/project-gamma",
    demoUrl: "https://project-gamma.vercel.app",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollFadeIn>
            <h1 className="text-3xl font-bold mb-2">Projects</h1>
            <p className="text-sm mb-8" style={{ color: "var(--fg-muted)" }}>
              A selection of things I&apos;ve built. All projects below are placeholders.
            </p>
          </ScrollFadeIn>

          <div className="grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <ScrollFadeIn key={project.title} delay={`animate-delay-${(i + 1) * 100}`}>
                <ProjectCard {...project} />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

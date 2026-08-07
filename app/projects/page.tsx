import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { ScrollFadeIn } from "../components/ScrollFadeIn";
import { PROJECTS } from "../../data/projects";

const ACTIVE_PROJECTS = PROJECTS.filter((p) => p.status === "active");

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollFadeIn>
            <h1 className="text-3xl font-bold mb-2">Projects</h1>
            <p className="text-sm mb-8" style={{ color: "var(--fg-muted)" }}>
              A selection of things I&apos;ve built.
            </p>
          </ScrollFadeIn>

          <div className="grid gap-6 sm:grid-cols-2">
            {ACTIVE_PROJECTS.map((project, i) => (
              <ScrollFadeIn key={project.title} delay={`animate-delay-${(i + 1) * 100}`}>
                <ProjectCard {...project} />
              </ScrollFadeIn>
            ))}

            <ScrollFadeIn delay={`animate-delay-${(ACTIVE_PROJECTS.length + 1) * 100}`}>
              <div
                className="p-6 rounded-lg border border-dashed flex flex-col items-center justify-center text-center min-h-50"
                style={{ borderColor: "var(--border)" }}
              >
                <svg className="w-8 h-8 mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <p className="text-sm font-medium mb-1">Building more projects</p>
                <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
                  Stay tuned for what&apos;s next.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

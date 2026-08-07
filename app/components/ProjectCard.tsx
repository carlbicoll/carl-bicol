interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  demoUrl: string;
  status?: "active" | "pending";
}

export function ProjectCard({ title, description, techStack, demoUrl, status }: ProjectCardProps) {
  return (
    <a
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-hover block p-6 rounded-lg border transition-all duration-300 hover:border-(--border-hover)] group no-underline"
      style={{ background: "var(--card-bg)", borderColor: "var(--border)", color: "var(--fg)" }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold group-hover:opacity-80 transition-opacity">{title}</h3>
        {status && (
          <span
            className={`text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded ${
              status === "active"
                ? "bg-green-500/10 text-green-600 dark:text-green-400"
                : "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
            }`}
          >
            {status}
          </span>
        )}
      </div>
      <p className="text-sm mb-4" style={{ color: "var(--fg-muted)" }}>{description}</p>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded border"
            style={{ borderColor: "var(--border)" }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-1 text-xs opacity-50 group-hover:opacity-80 transition-opacity">
        <span>Visit demo</span>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </a>
  );
}

import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
}

export function ProjectCard({ title, description, techStack, githubUrl, demoUrl }: ProjectCardProps) {
  return (
    <div
      className="p-6 rounded-lg border transition-all duration-300 hover:border-[var(--border-hover)] group"
      style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
    >
      <h3 className="text-lg font-bold mb-2 group-hover:opacity-80 transition-opacity">{title}</h3>
      <p className="text-sm mb-4" style={{ color: "var(--fg-muted)" }}>{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
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

      <div className="flex items-center gap-4 text-sm">
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Code
        </Link>
        <Link
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Live Demo
        </Link>
      </div>
    </div>
  );
}

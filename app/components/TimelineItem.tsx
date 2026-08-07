interface TimelineItemProps {
  role: string;
  company: string;
  dates: string;
  description: string;
}

export function TimelineItem({ role, company, dates, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0 mb-8">
      <div
        className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2"
        style={{ borderColor: "var(--fg)", background: "var(--bg)" }}
      />
      <div
        className="absolute left-1.25 top-4 w-px h-full"
        style={{ background: "var(--border)" }}
      />
      <div>
        <p className="text-xs mb-1" style={{ color: "var(--fg-muted)" }}>{dates}</p>
        <h3 className="font-bold">{role}</h3>
        <p className="text-sm mb-2" style={{ color: "var(--fg-muted)" }}>{company}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

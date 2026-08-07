interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span
      className="btn-hover inline-block text-sm px-3 py-1.5 rounded border transition-colors hover:border-[var(--border-hover)]"
      style={{ borderColor: "var(--border)" }}
    >
      {name}
    </span>
  );
}

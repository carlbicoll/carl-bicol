import { Footer } from "../components/Footer";
import { SkillBadge } from "../components/SkillBadge";
import { ScrollFadeIn } from "../components/ScrollFadeIn";
import { SKILL_CATEGORIES } from "../../data/skills";

export default function Skills() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollFadeIn>
            <h1 className="text-3xl font-bold mb-2">Skills & Tech Stack</h1>
            <p className="text-sm mb-8" style={{ color: "var(--fg-muted)" }}>
              Technologies and tools I work with.
            </p>
          </ScrollFadeIn>

          <div className="space-y-10">
            {SKILL_CATEGORIES.map((cat, i) => (
              <ScrollFadeIn key={cat.category} delay={`animate-delay-${(i + 1) * 100}`}>
                <h2 className="text-lg font-bold mb-4">{cat.category}</h2>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

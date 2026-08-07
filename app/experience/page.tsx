import Link from "next/link";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { TimelineItem } from "../components/TimelineItem";
import { ScrollFadeIn } from "../components/ScrollFadeIn";
import { EXPERIENCES, BADGES_CERTS } from "../../data/experience";

export default function Experience() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <ScrollFadeIn>
            <h1 className="text-3xl font-bold mb-2">Experience</h1>
            <p className="text-sm mb-8" style={{ color: "var(--fg-muted)" }}>
              My journey so far — from building my first website in grade school to studying full-stack development in college.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay="animate-delay-100">
            <div className="mb-10">
              <Link
                href="#"
                className="btn-hover inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md border transition-colors hover:border-(--border-hover)]"
                style={{ borderColor: "var(--border)" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume (PDF)
              </Link>
            </div>
          </ScrollFadeIn>

          <div>
            {EXPERIENCES.map((exp, i) => (
              <ScrollFadeIn key={exp.role} delay={`animate-delay-${(i + 1) * 100}`}>
                <TimelineItem {...exp} />
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn delay="animate-delay-500">
            <div className="mt-16">
              <h2 className="text-xl font-bold mb-2">Badges & Certifications</h2>
              <p className="text-sm mb-6" style={{ color: "var(--fg-muted)" }}>
                Credentials earned during college.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {BADGES_CERTS.map((badge) => (
                  <div
                    key={badge.name}
                    className="btn-hover flex flex-col items-center p-4 rounded-lg border transition-colors hover:border-(--border-hover)]"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <Image
                      src={badge.image}
                      alt={badge.name}
                      width={64}
                      height={64}
                      className="mb-3 shrink-0 h-auto"
                    />
                    <p className="text-xs text-center font-medium leading-snug line-clamp-3" title={badge.name}>
                      {badge.name}
                    </p>
                    <p
                      className="text-xs mt-1.5 text-center leading-snug line-clamp-2"
                      style={{ color: "var(--fg-muted)" }}
                      title={badge.issuer}
                    >
                      {badge.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
      <Footer />
    </div>
  );
}

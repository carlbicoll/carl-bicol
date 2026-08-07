import Link from "next/link";
import { Footer } from "../components/Footer";
import { TimelineItem } from "../components/TimelineItem";
import { ScrollFadeIn } from "../components/ScrollFadeIn";

const EXPERIENCES = [
  {
    role: "BSIT Student — Web & Mobile Development",
    company: "University of Batangas",
    dates: "2023 — 2027",
    description:
      "Studying BSIT with focus on web development, databases, and mobile development. Learned C, C++, Java, HTML, CSS, JavaScript, React.js, React Native (Expo), Next.js, Node.js, Express.js, FastAPI, MySQL, PostgreSQL, and Supabase. Currently exploring blockchain for capstone project.",
  },
  {
    role: "Grade 8 Student",
    company: "Sta. Teresa College",
    dates: "2018",
    description:
      "Built my first local website using HTML and inline styling for a school subject — the beginning of my journey into web development.",
  },
];

const BADGES_CERTS = [
  { name: "Placeholder Certification 1", issuer: "Issuer Name", image: "/badges/cert-1.png" },
  { name: "Placeholder Certification 2", issuer: "Issuer Name", image: "/badges/cert-2.png" },
  { name: "Placeholder Badge 1", issuer: "Issuer Name", image: "/badges/badge-1.png" },
  { name: "Placeholder Badge 2", issuer: "Issuer Name", image: "/badges/badge-2.png" },
];

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
                className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md border transition-colors hover:border-[var(--border-hover)]"
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
                Credentials earned during college. Replace placeholder images in <code className="text-xs px-1 py-0.5 rounded border" style={{ borderColor: "var(--border)" }}>public/badges/</code>.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {BADGES_CERTS.map((badge) => (
                  <div
                    key={badge.name}
                    className="flex flex-col items-center p-4 rounded-lg border transition-colors hover:border-[var(--border-hover)]"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <div
                      className="w-16 h-16 mb-3 rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <svg className="w-8 h-8 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <p className="text-xs text-center font-medium leading-tight">{badge.name}</p>
                    <p className="text-xs mt-1" style={{ color: "var(--fg-muted)" }}>{badge.issuer}</p>
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

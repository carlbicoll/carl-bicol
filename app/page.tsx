import Link from "next/link";
import { Footer } from "./components/Footer";
import { ScrollFadeIn } from "./components/ScrollFadeIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl w-full">
          <ScrollFadeIn>
            <p className="text-sm mb-4" style={{ color: "var(--fg-muted)" }}>
              $ whoami
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay="animate-delay-100">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              Carl Aldouz D. Bicol
            </h1>
          </ScrollFadeIn>

          <ScrollFadeIn delay="animate-delay-200">
            <p className="text-lg mb-2" style={{ color: "var(--fg-muted)" }}>
              Aspiring Full-Stack Developer
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay="animate-delay-300">
            <p className="text-base mb-8 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Building simple, minimalist web solutions that solve daily problems.
              From a dad jokes website in HTML to full-stack apps — I never stopped being curious.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay="animate-delay-400">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="btn-hover inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md border transition-colors hover:border-(--border-hover)]"
                style={{ borderColor: "var(--border)" }}
              >
                View Projects
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/experience"
                className="btn-hover inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md border transition-colors hover:border-(--border-hover)]"
                style={{ borderColor: "var(--border)" }}
              >
                Contact Me
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
      <Footer />
    </div>
  );
}

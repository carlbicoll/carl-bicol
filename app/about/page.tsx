import Image from "next/image";
import { Footer } from "../components/Footer";
import { ScrollFadeIn } from "../components/ScrollFadeIn";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <ScrollFadeIn>
            <h1 className="text-3xl font-bold mb-8">About Me</h1>
          </ScrollFadeIn>

          <ScrollFadeIn delay="animate-delay-100">
            <div
              className="w-32 h-32 rounded-full border-2 mb-8 flex items-center justify-center"
              style={{ borderColor: "var(--border)" }}
            >
              <Image src="/profile1.jpg" alt="Profile Picture" width={130} height={130} className="rounded-full" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay="animate-delay-200">
            <p className="text-base leading-relaxed mb-6">
              I am an aspiring full-stack web developer dedicated to creating simple,
              minimalist solutions that can help solve daily problems whether small or big.
              I believe that creating daily solutions is a step toward innovation and an easier life.
              UI is important but UX is more important — and as much as possible, I like to make things simple-looking.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay="animate-delay-300">
            <h2 className="text-xl font-bold mb-4">How I Got Into Dev</h2>
            <p className="text-base leading-relaxed mb-4">
              My journey started with a small project — a dad jokes website built with pure HTML
              and inline styling. I never knew that experience would lead me here because I had no
              interest at first. But when I committed to studying BSIT at the University of Batangas,
              I immediately went to work, being curious and open to learning.
            </p>
            <p className="text-base leading-relaxed mb-4">
              At first, I thought creating software was my thing because of C++ and Python.
              But when we started learning web development in university, I got hooked.
              I focused on frontend with HTML and CSS, then backend with JavaScript,
              and eventually moved to frameworks like React.js, Node.js, Express.js, FastAPI, and Next.js.
            </p>
            <p className="text-base leading-relaxed">
              I also learned relational databases like MySQL and PostgreSQL, then moved on to
              Backend as a Service with Supabase. Currently, I am exploring blockchain —
              a topic I needed to study for our capstone project.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay="animate-delay-400">
            <h2 className="text-xl font-bold mb-4">Interests</h2>
            <p className="text-base leading-relaxed">
              Outside coding and developing projects, I play ball games like basketball and
              volleyball. I listen to music and I love watching documentary movies because of
              the vibes they give off. But that doesn&apos;t mean I don&apos;t love movies as well.
            </p>
          </ScrollFadeIn>
        </div>
      </section>
      <Footer />
    </div>
  );
}

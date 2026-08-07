"use client";

import { useState } from "react";
import { Footer } from "../components/Footer";
import { ScrollFadeIn } from "../components/ScrollFadeIn";
import { CONTACT_INFO, FAQ, type ContactInfo } from "../../data/contact";

function ContactIcon({ icon }: { icon: ContactInfo["icon"] }) {
  const cls = "w-5 h-5";

  switch (icon) {
    case "github":
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "facebook":
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
  }
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("your.email@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <ScrollFadeIn>
            <h1 className="text-3xl font-bold mb-2">Contact</h1>
            <p className="text-sm mb-8" style={{ color: "var(--fg-muted)" }}>
              Reach out via any of the channels below.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay="animate-delay-100">
            <div
              className="p-6 rounded-lg border mb-6"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
            >
              <h2 className="text-lg font-bold mb-2">Let&apos;s work together</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
                I&apos;m always interested in hearing about new projects,
                collaboration opportunities, or just connecting with fellow developers.
                Whether you have a question or just want to say hi, feel free to reach out.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span style={{ color: "var(--fg-muted)" }}>Available for opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span style={{ color: "var(--fg-muted)" }}>Batangas, Philippines (UTC+8)</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span style={{ color: "var(--fg-muted)" }}>Usually responds within 24 hours</span>
                </div>
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay="animate-delay-200">
            <div
              className="p-6 rounded-lg border mb-10"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
            >
              <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: "var(--fg-muted)" }}>
                Preferred Contact
              </p>
              <p className="text-sm mb-4" style={{ color: "var(--fg-muted)" }}>
                Email is the best way to reach me. Click below to copy my address.
              </p>
              <button
                onClick={copyEmail}
                className="btn-hover w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-md border transition-colors hover:border-(--border-hover)]"
                style={{ borderColor: "var(--border)" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {copied ? "Copied!" : "your.email@gmail.com"}
              </button>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay="animate-delay-300">
            <h2 className="text-xl font-bold mb-4">Find Me Online</h2>
            <div className="space-y-3 mb-12">
              {CONTACT_INFO.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hover flex items-center gap-3 p-3 rounded-md border transition-colors hover:border-(--border-hover)]"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="opacity-50"><ContactIcon icon={item.icon} /></span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs" style={{ color: "var(--fg-muted)" }}>{item.label}</p>
                    <p className="text-sm hover:opacity-70 transition-opacity">{item.value}</p>
                  </div>
                  <svg className="w-4 h-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay="animate-delay-400">
            <h2 className="text-xl font-bold mb-4">FAQ</h2>
            <div className="space-y-2">
              {FAQ.map((item, i) => (
                <div
                  key={i}
                  className="rounded-md border overflow-hidden"
                  style={{ borderColor: "var(--border)" }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm text-left font-medium hover:bg-(--bg-secondary)] transition-colors"
                  >
                    {item.q}
                    <svg
                      className={`w-4 h-4 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-3 text-sm" style={{ color: "var(--fg-muted)" }}>
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>
      <Footer />
    </div>
  );
}

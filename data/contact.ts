export interface ContactInfo {
  label: string;
  value: string;
  href: string;
  icon: "github" | "linkedin" | "facebook" | "instagram";
}

export interface FaqItem {
  q: string;
  a: string;
}

export const CONTACT_INFO: ContactInfo[] = [
  {
    label: "GitHub",
    value: "github.com/carlbicoll",
    href: "https://github.com/carlbicoll",
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/carlbicoll",
    href: "https://linkedin.com/in/carlbicoll",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    value: "facebook.com/carlbicol",
    href: "https://facebook.com/carlbicol",
    icon: "facebook",
  },
  {
    label: "Instagram",
    value: "instagram.com/carlbicol",
    href: "https://instagram.com/carlbicol",
    icon: "instagram",
  },
];

export const FAQ: FaqItem[] = [
  {
    q: "Are you available for freelance work?",
    a: "I'm open to select freelance projects, especially those involving web development. Reach out with the details and I'll get back to you.",
  },
  {
    q: "What's your preferred tech stack?",
    a: "I primarily work with React.js and Next.js for frontend, Node.js with Express.js for backend, and FastAPI for Python-based APIs. I use MySQL and PostgreSQL for databases, and Supabase for BaaS. I'm always open to learning new tools.",
  },
  {
    q: "What's your rate?",
    a: "Rates depend on project scope and complexity. As a college student, I keep things flexible. Contact me with your project details and we can work something out.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes, I'm fully comfortable working remotely and have experience collaborating with distributed teams across different time zones.",
  },
];

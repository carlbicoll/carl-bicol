export interface Project {
  title: string;
  description: string;
  techStack: string[];
  demoUrl: string;
  status: "active" | "pending";
}

export const PROJECTS: Project[] = [
  {
    title: "Ante-Dote",
    description:
      "A web application for a local laundry shop with a booking system and an admin dashboard.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    demoUrl: "https://ante-dote.vercel.app",
    status: "active",
  },
  {
    title: "Studia AI",
    description:
      "A web application that uses AI to generate summaries, flashcards, quizzes, exams, and an AI tutor for students by just uploading their files.",
    techStack: ["Node.js", "Express", "MongoDB", "Docker"],
    demoUrl: "#",
    status: "pending",
  },
  {
    title: "SK-Ledge",
    description:
      "A smart contract-driven blockchain framework for immutable fund tracking in the Sangguniang Kabataan of Batangas Province",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    status: "pending",
  },
];

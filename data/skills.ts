export interface SkillCategory {
  category: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C", "C++", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "React Native (Expo)", "Node.js", "Express.js", "FastAPI"],
  },
  {
    category: "Databases & BaaS",
    skills: ["MySQL", "PostgreSQL", "Supabase"],
  },
  {
    category: "Other",
    skills: ["Git", "Blockchain (Exploring)", "Web Development", "Mobile Development"],
  },
];

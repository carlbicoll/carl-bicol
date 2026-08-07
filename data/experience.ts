export interface Experience {
  role: string;
  company: string;
  dates: string;
  description: string;
}

export interface Badge {
  name: string;
  issuer: string;
  image: string;
}

export const EXPERIENCES: Experience[] = [
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

export const BADGES_CERTS: Badge[] = [
  {
    name: "Linux Unhatched",
    issuer: "Cisco",
    image: "/badges/linux_unhatched.png",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    image: "/badges/intro_cybersecurity.png",
  },
  {
    name: "Cloud Computing Fundamentals",
    issuer: "IBM-SkillsBuild",
    image: "/badges/cloud_computing.png",
  },
  {
    name: "AWS Cloud Quest: Cloud Practitioner - Training Badge",
    issuer: "Amazon Web Services Training and Certification",
    image: "/badges/cloud_practitioner_training.png",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    image: "/badges/certified_cloud_practitioner.png",
  },
  {
    name: "AWS Academy Graduate - Cloud Foundations - Training Badge",
    issuer: "Amazon Web Services Training and Certification",
    image: "/badges/cloud_foundations_training.png",
  },
];

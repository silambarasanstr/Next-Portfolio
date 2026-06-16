export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: any;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  category: "static" | "fullstack" | "admin";
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "design";
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

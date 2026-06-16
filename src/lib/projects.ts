import { Project } from "@/types/portfolio";
import Auro from "@/assert/auro.png";
import AuroAdmin from "@/assert/auro-admin.png";
import Portfolio from "@/assert/portfolio.png";

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "AURA-SHOP-APP [FrontEnd]",
    description:
      "Full-stack e-commerce solution with modern payment integration",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Stripe. Features include user authentication, product management, shopping cart, order processing, and admin dashboard. Implemented with TypeScript for type safety and deployed on Vercel with automatic deployments.",
    image: Auro,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node Js",
      "Monogo DB",
      "RestAPI",
    ],
    githubUrl: "https://github.com/silambarasanstr/AURA-SHOP-APP-BACKUP",
    liveUrl: "https://aura-shop-app-backup.vercel.app/",

    category: "fullstack",
  },
  {
    id: "FlipKart-platform",
    title: "AURA-SHOP-APP [Admin]",
    description:
      "Full-stack e-commerce solution with modern payment integration",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Stripe. Features include user authentication, product management, shopping cart, order processing, and admin dashboard. Implemented with TypeScript for type safety and deployed on Vercel with automatic deployments.",
    image: AuroAdmin,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node Js",
      "Monogo DB",
      "RestAPI",
    ],

    githubUrl: "https://github.com/silambarasanstr/AURA-SHOP-APP-BACKUP",
    liveUrl: "https://aura-shop-app-backup-8678.vercel.app/",
    featured: true,
    category: "admin",
  },
  {
    id: "e-commerce-platform",
    title: "FlipKart Clone E-Commerce",
    description:
      "Full-stack e-commerce solution with modern payment integration",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Stripe. Features include user authentication, product management, shopping cart, order processing, and admin dashboard. Implemented with TypeScript for type safety and deployed on Vercel with automatic deployments.",
    image: Auro,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node Js",
      "Monogo DB",
      "RestAPI",
    ],

    githubUrl: "https://github.com/silambarasanstr/E-CommerceManagementSystem",
    liveUrl: "http://poorvika.com/",
    featured: true,
    category: "fullstack",
  },

  {
    id: "portfolio-app",
    title: "Portfolio",
    description: "Collaborative task management with real-time updates",
    longDescription:
      "A modern task management application featuring real-time collaboration, drag-and-drop functionality, team workspaces, and advanced filtering. Built with React and Socket.io for real-time features, with a focus on user experience and performance.",
    image: Portfolio,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/silambarasanstr/Next-Portfolio",
    liveUrl: "https://next-portfolio-virid-eta.vercel.app/",
    featured: true,
    category: "static",
  },
];

export const skills = [
  { name: "React", level: 95, category: "frontend" as const },
  { name: "TypeScript", level: 90, category: "frontend" as const },
  { name: "Next.js", level: 88, category: "frontend" as const },
  { name: "Tailwind CSS", level: 92, category: "frontend" as const },

  { name: "Node.js", level: 85, category: "backend" as const },

  { name: "MongoDB", level: 75, category: "backend" as const },
  { name: "Git", level: 90, category: "tools" as const },
  { name: "Docker", level: 70, category: "tools" as const },
  { name: "Figma", level: 85, category: "design" as const },
];

export const experiences = [
  {
    id: "1",
    company: "Apexon",
    position: "Frontend Developer",
    duration: "2024 - 2024-AUG",
    description: [
      "Digital Technology Services.",
      "Focused on front-end development with attention to detail.",
      "Collaborated with the design team to create pixel-perfect user interfaces.",
    ],
    technologies: ["React.js", "TypeScript", "Next.js"],
  },
  {
    id: "2",
    company: "Poorvika Mobiles Pvt Ltd.",
    position: "Senior Frontend Developer",
    duration: "2019 - 2024",
    description: [
      "Built end-to-end web applications from concept to production.",
      "Focused on front-end development with attention to detail.",
      "Implemented modern CI/CD pipelines, reducing deployment time by 60%.",
      "Collaborated with the design team to create pixel-perfect user interfaces.",
      "Integrated third-party services and payment processing systems.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "REST API",
      "TypeScript",
      "MongoDB",
    ],
  },
  {
    id: "3",
    company: "GYSO ECOM Services (P) Ltd.",
    position: "Frontend Developer (OpenCart)",
    duration: "2018 - 2019",
    description: [
      "Enterprise application development.",
      "Developed dynamic web pages using WordPress HTML5 and CSS3.",
      "Updated existing website HTML and CSS to meet latest web standards.",
      "Focused on front-end development with attention to detail.",
      "Implemented mobile responsive web designs.",
    ],
    technologies: ["HTML", "Bootstrap", "PHP", "MySQL", "Laravel"],
  },
  {
    id: "4",
    company: "360degreeinfo Pvt Ltd.",
    position: "Junior Frontend Developer",
    duration: "2016 - 2018",
    description: [
      "Developed dynamic web pages using HTML5 and CSS3.",
      "Updated existing website layouts to meet modern web standards.",
      "Focused on front-end development and user experience.",
      "Implemented mobile responsive web designs.",
    ],
    technologies: ["HTML", "Bootstrap", "PHP", "MySQL"],
  },
];

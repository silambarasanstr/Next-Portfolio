import { Project } from "@/types/portfolio";
import Img from "@/assert/ntsc.png";
import PvkImg from "@/assert/poorvika.png";

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Poorvika E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with modern payment integration",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Stripe. Features include user authentication, product management, shopping cart, order processing, and admin dashboard. Implemented with TypeScript for type safety and deployed on Vercel with automatic deployments.",
    image: "PvkImg",
    technologies: ["Next.js", "TypeScript", "Node Js", "Monogo DB", "RestAPI"],
    // githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "http://poorvika.com/",
    featured: true,
    category: "fullstack",
  },
  {
    id: "FlipKart-platform",
    title: "Flipkart E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with modern payment integration",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Stripe. Features include user authentication, product management, shopping cart, order processing, and admin dashboard. Implemented with TypeScript for type safety and deployed on Vercel with automatic deployments.",
    image: "PvkImg",
    technologies: ["React.js", "TypeScript", "Node Js", "Monogo DB", "RestAPI"],

    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "http://poorvika.com/",
    featured: true,
    category: "fullstack",
  },
  {
    id: "Food-Delivery-platform",
    title: "Food Delivery E-Commerce",
    description:
      "Full-stack e-commerce solution with modern payment integration",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Stripe. Features include user authentication, product management, shopping cart, order processing, and admin dashboard. Implemented with TypeScript for type safety and deployed on Vercel with automatic deployments.",
    image: "PvkImg",
    technologies: ["Next.js", "TypeScript", "Node Js", "Monogo DB", "RestAPI"],

    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "http://poorvika.com/",
    featured: true,
    category: "fullstack",
  },

  {
    id: "task-management-app",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    longDescription:
      "A modern task management application featuring real-time collaboration, drag-and-drop functionality, team workspaces, and advanced filtering. Built with React and Socket.io for real-time features, with a focus on user experience and performance.",
    image: "Img",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    githubUrl: "https://github.com/example/taskapp",
    liveUrl: "https://taskapp-demo.netlify.app",
    featured: true,
    category: "web",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts",
    longDescription:
      "An elegant weather dashboard that provides detailed weather information, 7-day forecasts, and interactive maps. Features location-based weather detection, beautiful animations, and responsive design optimized for all devices.",
    image: "Img",
    technologies: ["Vue.js", "TypeScript", "OpenWeather API", "Chart.js"],
    githubUrl: "https://github.com/example/weather",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    featured: false,
    category: "web",
  },
  {
    id: "mobile-fitness-app",
    title: "Mobile Fitness Tracker",
    description: "Cross-platform fitness tracking with workout plans",
    longDescription:
      "A comprehensive fitness tracking application built with React Native. Features workout logging, progress tracking, social features, and personalized workout recommendations. Includes offline support and seamless synchronization across devices.",
    image: "Img",
    technologies: ["React Native", "Redux", "Firebase", "Expo"],
    githubUrl: "https://github.com/example/fitness",
    featured: false,
    category: "mobile",
  },
];

export const skills = [
  { name: "React", level: 95, category: "frontend" as const },
  { name: "TypeScript", level: 90, category: "frontend" as const },
  { name: "Next.js", level: 88, category: "frontend" as const },
  { name: "Tailwind CSS", level: 92, category: "frontend" as const },

  { name: "Node.js", level: 85, category: "backend" as const },
  { name: "PostgreSQL", level: 80, category: "backend" as const },
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

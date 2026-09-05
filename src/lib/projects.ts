import { Project } from "@/types/portfolio";
import Auro from "@/assert/auro.png";
import AuroAdmin from "@/assert/auro-admin.png";
import Portfolio from "@/assert/portfolio.png";
import FlipKart from "@/assert/flip.png";
import PayRoll from "@/assert/payroll.png";
import ChitFund from "@/assert/chit.png";
import Dine from "@/assert/dine.png";
import Biryani from "@/assert/biryani.png";
import Jewelry from "@/assert/jewelry.png";
import Clinic from "@/assert/clinic.png";
import Pharma from "@/assert/rindz.png";

export const projects: Project[] = [
  {
    id: "chit-fund-management-system",
    title: "Chit Fund Management System",
    description:
      "A comprehensive solution for managing chit fund operations with real-time tracking and reporting.",
    longDescription: "",
    image: ChitFund,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node Js",
      "Express.js",
      "Monogo DB",
      "RestAPI",
    ],
    githubUrl: "https://github.com/silambarasanstr/Chit-Fund-Management-System",
    liveUrl: "https://chit-fund-management-system.vercel.app",

    category: "admin",
  },
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
      "Express.js",
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
      "Express.js",
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
    image: FlipKart,
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node Js",
      "Express.js",
      "Monogo DB",
      "RestAPI",
    ],

    githubUrl: "https://github.com/silambarasanstr/E-CommerceManagementSystem",
    liveUrl: "https://e-commerce-management-system-gamma.vercel.app/",
    featured: true,
    category: "fullstack",
  },

  {
    id: "payroll-platform",
    title: "Payroll Management System",
    description: "Full-stack payroll solution with automated processing",
    longDescription:
      "A comprehensive payroll management platform built with Next.js and Stripe. Features include employee management, salary calculations, tax processing, and reporting. Implemented with TypeScript for type safety and deployed on Vercel with automatic deployments.",
    image: PayRoll,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node Js",
      "Express.js",
      "Monogo DB",
      "RestAPI",
    ],

    githubUrl: "https://github.com/silambarasanstr/payroll-management-system",
    liveUrl: "https://payroll-management-system-jet.vercel.app/employees",
    featured: true,
    category: "admin",
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
  {
    id: "Dineflow-Restaurant-POS",
    title: "Dineflow Restaurant POS",
    description: "Point-of-sale system for restaurant management",
    longDescription:
      "A comprehensive point-of-sale system designed for restaurants, featuring order management, inventory tracking, and reporting capabilities. Built with React and Node.js for a seamless user experience.",
    image: Dine,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/silambarasanstr/Dineflow-Restaurant-POS",
    liveUrl: "#",
    featured: true,
    category: "admin",
  },

  {
    id: "Restaurant-app",
    title: "SS Hyderabad Biryani ",
    description: "Order delicious chicken & mutton biryani",
    longDescription:
      "Enjoy authentic Hyderabadi biryani in Chennai. Order delicious chicken & mutton biryani from SS Hyderabad Biryani with fast delivery.",
    image: Biryani,
    technologies: ["HTML", "Bootstrap", "CSS", "Javascript"],
    liveUrl: "https://www.sshyderabadbiryani.com/",
    featured: true,
    category: "static",
  },
  {
    id: "Jaipur Gems",
    title: "Jaipur Gems",
    description: "Order beautiful jewelry",
    longDescription:
      "Discover exquisite jewelry at Jaipur Gems. Order beautiful pieces from our collection with fast delivery.",
    image: Jewelry,
    technologies: ["HTML", "Bootstrap", "CSS", "Javascript"],
    liveUrl: "https://jaipurgemsnjewel.in/",
    featured: true,
    category: "static",
  },
  {
    id: "kgsclinic",
    title: "KGS Clinic",
    description: "Healthcare services for your family",
    longDescription:
      "Providing quality healthcare services with a focus on patient care and satisfaction.",
    image: Clinic,
    technologies: ["HTML", "Bootstrap", "CSS", "Javascript"],
    liveUrl: "https://kgsclinic.com/",
    featured: true,
    category: "static",
  },
  {
    id: "rindz pharma",
    title: "Rindz Pharma",
    description: "Pharmaceutical services for your family",
    longDescription:
      "Providing quality pharmaceutical services with a focus on patient care and satisfaction.",
    image: Pharma,
    technologies: ["HTML", "Bootstrap", "CSS", "Javascript"],
    liveUrl: "https://rindz.co.in/",
    featured: true,
    category: "static",
  },
];

export const skills = [
  { name: "HTML", category: "frontend" },
  { name: "Css", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },

  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },

  { name: "Figma", category: "design" },
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
    technologies: ["React.js", "Tailwind CSS"],
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
    position: "Frontend Developer",
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
      "Developed static and dynamic web pages using HTML5 and CSS3.",
      "Updated existing website layouts to meet modern web standards.",
      "Focused on front-end development and user experience.",
      "Implemented mobile responsive web designs.",
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP", "MySQL"],
  },
];

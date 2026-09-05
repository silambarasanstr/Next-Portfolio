"use client";
import React, { useState } from "react";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { Eye, Github } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");

  const adminLength = projects.filter(
    (project) => project.category === "admin",
  ).length;

  const fullstackLength = projects.filter(
    (project) => project.category === "fullstack",
  ).length;

  const staticLength = projects.filter(
    (project) => project.category === "static",
  ).length;

  const categories = [
    { value: "all", label: "All Projects", count: projects.length },
    { value: "static", label: "Static Site", count: staticLength },
    { value: "fullstack", label: "MERN Stack", count: fullstackLength },
    { value: "admin", label: "Admin Dashboard ", count: adminLength },
  ];

  // ✅ Fix: return filtered array directly
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") {
      return true;
    }
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-10 bg-linear-to-br from-gray-900 via-gray-800 to-black text-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold  mb-2">
            Projects
          </h2>

          <p className="text-sm sm:text-base font-light leading-relaxed text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {categories.map((category) => (
            <button
              onClick={() => setFilter(category.value)}
              key={category.value}
              className={`px-3 py-1.5 text-sm rounded-md cursor-pointer transition ${
                filter === category.value
                  ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white shadow"
                  : "border border-gray-300  hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="group">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-40 sm:h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Project Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 items-center gap-1.5 rounded-md bg-violet-600 px-2.5 text-xs font-medium text-white shadow transition hover:bg-violet-700"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 items-center gap-1.5 rounded-md bg-gray-800 px-2.5 text-xs font-medium text-white shadow transition hover:bg-gray-900"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-full border px-2 py-0.5 text-[11px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

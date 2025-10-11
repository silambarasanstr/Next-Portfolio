"use client";
import React, { useState } from "react";
import { projects } from "@/lib/projects";
import Image from "next/image";
import Img from "@/assert/ntsc.png";
import { Eye, Github } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Static Site" },
    { value: "fullstack", label: "Full Stack" },
    { value: "mobile", label: "Own Project" },
  ];

  // ✅ Fix: return filtered array directly
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") {
      return true;
    }
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for
            development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <a
              onClick={() => setFilter(category.value)}
              key={category.value}
              className={`px-4 py-2 rounded cursor-pointer ${
                filter === category.value
                  ? `bg-blue-300 text-white shadow-lg default`
                  : "border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 outline"
              }`}
            >
              {category.label}
            </a>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-lg shadow bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className=" group overflow-hidden  bg-white border-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={Img}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover "
                  />

                  {/* Project Links Overlay */}
                  <div className="  absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      {project.liveUrl && (
                        <div className="flex items-center border border-gray-300  h-9 rounded-md px-3 bg-white text-gray-900 hover:bg-gray-100">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </div>
                      )}
                      {project.githubUrl && (
                        <div className="flex items-center border border-gray-300  h-9 rounded-md px-3 bg-white text-gray-900 hover:bg-gray-100">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div>
                      <p className="text-gray-600">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <div
                            key={tech}
                            className="bg-gray-100 text-gray-700 hover:bg-gray-200 items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
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

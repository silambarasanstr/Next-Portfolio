import React from "react";
import { experiences } from "@/lib/projects";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-10 bg-blue-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Experience
          </h2>

          <p className="text-sm sm:text-base font-light leading-relaxed text-gray-600 max-w-2xl mx-auto">
            Here&apos;s a summary of my professional experiences and the roles
            I&apos;ve held.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {experiences?.map((exp) => (
            <div
              key={exp.id}
              className="relative bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-sm
              hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Left Accent Border */}
              <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-xl" />

              {/* Top */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {exp.position}
                  </h3>

                  <div className="flex flex-wrap items-center text-gray-600 text-xs sm:text-sm mt-1.5 gap-x-4 gap-y-1.5">
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-blue-500" />
                      {exp.company}
                    </span>

                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      {exp.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <ul className="text-sm text-gray-600 space-y-1.5 mb-3 pl-1">
                {exp.description?.slice(0, 2).map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies?.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-medium
                    bg-linear-to-r from-indigo-500 to-purple-500
                    text-white px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

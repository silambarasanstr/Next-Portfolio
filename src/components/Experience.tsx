import React from "react";
import { experiences } from "@/lib/projects";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-blue-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>

          <p className="text-base sm:text-lg font-light leading-relaxed text-gray-600 max-w-2xl mx-auto">
            Here&apos;s a summary of my professional experiences and the roles
            I&apos;ve held.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {experiences?.map((exp) => (
            <div
              key={exp.id}
              className="relative bg-white p-6 rounded-2xl border border-gray-200 shadow-sm 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Left Accent Border */}
              <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-2xl"></div>

              {/* Top */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.position}
                  </h3>

                  <div className="flex flex-wrap items-center text-gray-600 text-sm mt-2 gap-4">
                    <span className="flex items-center gap-1">
                      <Building className="w-4 h-4 text-blue-500" />
                      {exp.company}
                    </span>

                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      {exp.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <ul className="text-sm text-gray-600 space-y-2 mb-4 pl-1">
                {exp.description?.slice(0, 2).map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies?.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-linear-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full hover:bg-blue-200 transition"
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

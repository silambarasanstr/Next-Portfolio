import React from "react";
import { experiences } from "@/lib/projects";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            Experience
          </h2>

          <p className="text-[18px] font-light leading-relaxed tracking-wide text-gray-500 max-w-2xl mx-auto">
            Here&apos;s a summary of my professional experiences and the roles I&apos;ve held.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-5">
          {experiences?.map((exp) => (
            <div
              key={exp.id}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200"
            >
              {/* Top */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {exp.position}
                  </h3>

                  <div className="flex items-center text-gray-500 text-sm mt-1 gap-3">
                    <span className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                {exp.description?.slice(0, 2).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies?.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
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
import React from "react";
import { experiences } from "@/lib/projects";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and the impact I've made at various
            organizations
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="border border-gray-200 rounded relative overflow-hidden hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-600"
            >
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600 mb-2">
                        <span className="text-sm font-medium flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          {experience.company}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {experience.position}
                      </h3>
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-2">
                    <ul className="space-y-3 text-gray-700 mb-6">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="bg-blue-50 border-transparent text-blue-700 hover:bg-blue-100 items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                        >
                          {tech}
                        </div>
                      ))}
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

export default Experience;

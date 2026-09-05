"use client";

import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Arunai College of Engineering, Tiruvannamalai",
      year: "2010 - 2013",
      description:
        "Focused on web development, data structures, and software engineering concepts.",
    },
    {
      degree: "Diploma in Computer Science",
      institution: "Shri Sitheeswarar Polytechnic College Vellore",
      year: "2009 - 2011",
      description:
        "Built strong foundation in programming, computer fundamentals, and web basics.",
    },
    {
      degree: "Higher Secondary (12th)",
      institution:
        "Rathinagiri Bageerathan Matriculation Higher Secondary School",
      year: "2007",
      description:
        "Specialized in Computer Science with strong foundation in programming.",
    },
    {
      degree: "SSLC (10th)",
      institution:
        "Rathinagiri Bageerathan Matriculation Higher Secondary School",
      year: "2005",
      description: "Completed with strong academic performance.",
    },
  ];

  return (
    <section
      id="education"
      className="py-10 bg-linear-to-br from-purple-50 via-white to-blue-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            My Education
          </h2>

          <p className="text-sm sm:text-base font-light leading-relaxed text-gray-600 max-w-2xl mx-auto">
            My academic journey that built the foundation for my development
            career.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-xl p-4
              shadow-sm hover:shadow-md transition-all duration-300
              hover:-translate-y-1"
            >
              

              {/* Year */}
              <div
                className="inline-block px-2.5 py-1 text-[11px] font-semibold
                text-white bg-linear-to-r from-indigo-500 to-purple-500
                rounded-full mb-2.5"
              >
                {edu.year}
              </div>

              {/* Degree */}
              <h3
                className="text-base font-semibold text-gray-900 leading-snug
                group-hover:text-purple-600 transition-colors"
              >
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="text-blue-600 font-medium mt-1 text-xs sm:text-sm leading-relaxed">
                {edu.institution}
              </p>

              {/* Description */}
              <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

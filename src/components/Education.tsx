"use client";
import dynamic from "next/dynamic";
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
      className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey that built the foundation for my development
            career.
          </p>
        </div>

        {/* Modern Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Top Border */}
              <div className="absolute inset-x-0 top-0 h-1 bg-blue-500 rounded-t-2xl"></div>

              {/* Year Badge */}
              <div className="inline-block px-3 py-1 text-xs font-semibold text-white bg-linear-to-r from-indigo-500 to-purple-500 rounded-full mb-3">
                {edu.year}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                {edu.degree}
              </h3>

              <p className="text-blue-600 font-medium mt-1 text-sm">
                {edu.institution}
              </p>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Education), { ssr: false });
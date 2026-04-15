"use client";
import dynamic from "next/dynamic";
import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Science",
      institution: "XYZ College of Engineering",
      year: "2019 - 2022",
      description:
        "Focused on web development, data structures, and software engineering concepts.",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "ABC Higher Secondary School",
      year: "2017 - 2019",
      description:
        "Specialized in Computer Science with strong foundation in programming.",
    },
    {
      degree: "SSLC (10th)",
      institution: "ABC High School",
      year: "2016 - 2017",
      description:
        "Completed with excellent academic performance.",
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey that built the foundation for my development career.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="shadow-lg rounded-xl p-6 bg-white hover:shadow-xl transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {edu.degree}
              </h3>

              <p className="text-blue-600 font-medium mt-1">
                {edu.institution}
              </p>

              <p className="text-sm text-gray-500 mt-1">{edu.year}</p>

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
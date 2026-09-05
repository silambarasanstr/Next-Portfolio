"use client";

import { Download, Sparkles } from "lucide-react";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Front-End Developer",
    "React & Next.js",
    "Problem Solver",
    "Always Exploring Tech",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 border-b border-gray-300"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply blur-xl opacity-50 animate-pulse" />

        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply blur-xl opacity-50 animate-pulse" />

        <div className="absolute top-32 left-32 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply blur-xl opacity-50 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-5">
          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Hi, I am{" "}
              <span className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Silambarasan
              </span>
            </h1>

            {/* Role */}
            <div className="h-10 flex items-center justify-center">
              <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium">
                <Sparkles className="inline h-5 w-5 mr-1.5 text-orange-500" />
                {roles[currentRole]}
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600">
            I specialize in building modern, responsive, and user-friendly
            applications. With a mix of creativity and problem-solving, I turn
            concepts into engaging digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-3">
            <button
              onClick={scrollToProjects}
              className="rounded-md cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View My Work
            </button>

            <a
              href="/Silambarasan_K_Frontend_Developer_Resume.pdf"
              download
              className="border flex items-center rounded-md border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600 hover:bg-green-50 px-6 py-2.5 text-sm sm:text-base font-medium transition-all duration-300"
            >
              <Download className="h-4 w-4 mr-1.5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

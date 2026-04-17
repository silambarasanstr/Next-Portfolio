"use client";
import { Download, Sparkles } from "lucide-react";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Front-End Developer",
    "React & Next.js Specialist",
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
              Hi, I am
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
               K. Silambarsan
              </span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium transition-all duration-500">
                <Sparkles className="inline h-6 w-6 mr-2 text-orange-500" />
                {roles[currentRole]}
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
            I specialize in building modern, responsive, and user-friendly
            applications. With a mix of creativity and problem-solving, I turn
            concepts into engaging digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              onClick={scrollToProjects}
              className="rounded cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a className="border-2 flex items-center border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600 hover:bg-green-50 px-8 py-3 text-lg font-medium transition-all duration-300">
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

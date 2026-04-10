"use client";

import { skills } from "@/lib/projects";

const About = () => {
  const skillCategories = {
    frontend: skills.filter((skill) => skill.category === "frontend"),
    backend: skills.filter((skill) => skill.category === "backend"),
    tools: skills.filter((skill) => skill.category === "tools"),
    design: skills.filter((skill) => skill.category === "design"),
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-[18px] font-light leading-relaxed tracking-wide text-gray-500 max-w-2xl mx-auto">
            I am a passionate developer with 6+ years of experience in building
            modern, scalable, and user-friendly applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="text-justify text-gray-600 space-y-3">
            <p>
              Hi, I am Silambarasan, a passionate Web Developer and Designer
              with experience in building responsive and user-friendly websites.
            </p>

            <p>
              I specialize in creating modern web applications using
              technologies like React, TypeScript, and Tailwind CSS. I enjoy
              transforming ideas into real-world digital solutions with clean,
              efficient, and maintainable code.
            </p>

            <p>
              I have hands-on experience working with both frontend and backend
              technologies, allowing me to build complete, scalable
              applications. I am always eager to learn new tools and stay
              updated with the latest trends in web development.
            </p>

            <p>
              I thrive in collaborative environments, enjoy solving complex
              problems, and aim to deliver impactful user experiences that align
              with business goals.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(skillCategories).map(
              ([category, categorySkills]) => (
                <div
                  key={category}
                  className="p-5 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-4 capitalize">
                    {category} Skills
                  </h3>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((ele) => (
                      <span
                        key={ele.name}
                        className="px-3 py-1.5 text-xs font-medium rounded-full 
                      bg-gradient-to-r from-indigo-500 to-purple-500 
                      text-white shadow-sm hover:scale-105 transition-transform duration-200"
                      >
                        {ele.name}
                      </span>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

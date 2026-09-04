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
    <section id="about" className=" py-10 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            About Me
          </h2>

          <p className="text-sm sm:text-base font-light leading-relaxed text-gray-500 max-w-2xl mx-auto">
            I am a passionate developer with 7 years of experience in building
            modern, scalable, and user-friendly applications.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-7 lg:gap-10 items-start">

          {/* About Text */}
          <div className="text-justify text-sm sm:text-base text-gray-600 space-y-2.5 leading-relaxed">
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
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(skillCategories).map(
              ([category, categorySkills]) => (
                <div
                  key={category}
                  className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                >
                  <h3 className="text-base font-semibold text-gray-800 mb-2.5 capitalize">
                    {category} Skills
                  </h3>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {categorySkills.map((ele) => (
                      <span
                        key={ele.name}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-full
                        bg-linear-to-r from-indigo-500 to-purple-500
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
"use client";

import { skills } from "@/lib/projects";

const About = () => {
  const skillCategories = {
    frontend: skills.filter((skill) => skill.category === "frontend"),
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto ">
            I am a passionate developer with 6+ years of experience in building
            modern, scalable, and user-friendly applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-justify text-gray-600 ">
              Hi, I am Silambarasan, a passionate Web Developer and Designer with
              experience in building responsive and user-friendly websites. I
              have hands-on experience working with modern frontend technologies
              and frameworks, and I enjoy creating efficient, clean, and
              visually appealing web solutions. I am proficient in HTML, CSS,
              Bootstrap, Tailwind CSS, JavaScript, TypeScript, React.js and
              Next.js (Basic), I thrive in collaborative environments, enjoy
              brainstorming ideas, and solving complex problems as part of a
              team. My goal is to deliver impactful web experiences that enhance
              user engagement and meet business objectives.
            </p>
          </div>
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category}>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                  {category} Skills
                </h3>
              </div>

              <div className="space-y-4">
                {categorySkills.map((ele) => (
                  <div key={ele.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {ele.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {ele.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${ele.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

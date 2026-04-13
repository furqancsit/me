
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Database", icon: <FaDatabase /> },
];

const TechStack = () => {
  return (
    <section className="px-6 md:px-12 py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Tech Stack
          </h2>
          <p className="mt-3 text-gray-400 text-sm md:text-base">
            Technologies I use to design and build scalable, modern applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/10"
            >
              {/* Icon */}
              <div className="text-3xl text-gray-300 transition duration-300 group-hover:text-amber-400">
                {skill.icon}
              </div>

              {/* Label */}
              <p className="mt-3 text-sm text-gray-400 group-hover:text-white transition">
                {skill.name}
              </p>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-amber-400/5 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
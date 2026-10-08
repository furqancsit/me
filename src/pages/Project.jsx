

import React from "react";
import ProjectCard from "../components/ProjectCard";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

const projects = [
  {
    title: "SupportPilot",
    image: p1,
    description:
      "An AI-powered customer support platform that enables businesses to create a personalized support agent using their business information. Built with a MERN stack and Gemini AI, it supports secure authentication, business and agent management, conversation history, and AI-powered customer responses.",
    tech_stack: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Gemini AI",
    ],
    github: "https://github.com/furqancsit/supportai",
    live: "https://custommersupportpilot.vercel.app/",
    category: "Full-Stack Application",
  },

  {
    title: "InterviewFlow",
    image: p2,
    description:
      "Developed an AI-powered mock interview platform with dynamic question generation, response analysis, and real-time feedback workflows.",
    tech_stack: ["React", "Node.js", "OpenAI"],
    github: "#",
    live: "#",
    category: "AI Web Platform",
  },

  {
    title: "CommerceHub",
    image: p3,
    description:
      "Created a modern e-commerce application with JWT authentication, cart management, Stripe payments, and optimized REST APIs.",
    tech_stack: ["MERN", "JWT", "Stripe"],
    github: "#",
    live: "#",
    category: "E-Commerce Platform",
  },

  {
    title: "LearnStack",
    image: p4,
    description:
      "Built a scalable learning platform with role-based authentication, course management, and interactive learning dashboards.",
    tech_stack: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    category: "Learning Platform",
  },
];

// const Project = () => {
//   return (
//     <section
//       id="projects"
//       className="bg-[#050505] text-white py-24 md:py-32 px-5"
//     >
//       <div className="max-w-6xl mx-auto md:px-4">
//         {/* heading */}
//         <div className="mb-14">
//           <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
//             Portfolio
//           </p>

//           <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
//             Selected Work
//           </h2>

//           <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
//             A selection of full-stack applications focused on modern UI,
//             scalable architecture, and real-world product development.
//           </p>
//         </div>

//         {/* projects */}
//         <div className="space-y-6 ">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;




const Project = () => {
  return (
  <section
  id="projects"
  className="bg-[#050505] px-4 py-10 text-white sm:px-6 md:py-20"
>
      <div className="mx-auto max-w-5xl md:px-4 px-2">

        {/* HEADER */}
        <div className="mb-10">
      
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Built & shipped
          </h2>

        
        </div>

        {/* DIVIDER */}
        <div className="mb-6 h-px bg-white/[0.08]" />

        {/* PROJECTS */}
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;

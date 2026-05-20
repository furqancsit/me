// import React from "react";
// import ProjectCard from "../components/ProjectCard";

// import p1 from "../assets/p1.jpg";
// import p2 from "../assets/p2.jpg";
// import p3 from "../assets/p3.jpg";
// import p4 from "../assets/p4.jpg";

// const projects = [
//   {
//     title: "SaaS AI Platform",
//     image: p1,
//     description:
//       "AI-powered SaaS platform with scalable architecture, authentication, and modern dashboard experience.",
//     tech_stack: ["Next.js", "TypeScript", "MongoDB"],
//     github: "#",
//     live: "#",
//   },

//   {
//     title: "AI Interviewer Agent",
//     image: p2,
//     description:
//       "Mock interview platform with AI-generated questions and real-time feedback system.",
//     tech_stack: ["React", "Node.js", "OpenAI"],
//     github: "#",
//     live: "#",
//   },

//   {
//     title: "E-Commerce Platform",
//     image: p3,
//     description:
//       "Modern commerce platform with authentication, cart flow, and optimized backend APIs.",
//     tech_stack: ["MERN", "JWT", "Stripe"],
//     github: "#",
//     live: "#",
//   },

//   {
//     title: "Learning Management System",
//     image: p4,
//     description:
//       "Scalable LMS with role-based access, course management, and interactive learning features.",
//     tech_stack: ["React", "Node", "MongoDB"],
//     github: "#",
//     live: "#",
//   },
// ];

// const Project = () => {
//   return (
//     <section className="bg-[#050505] text-white px-5 ">

//       <div className="max-w-6xl mx-auto  md:px-4">

//         {/* heading */}
//         <div className="mb-14">

//           <p className="text-sm text-zinc-500 tracking-widest uppercase">
//             Portfolio
//           </p>

//           <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
//             Selected Work
//           </h2>

//           <p className="mt-4 text-zinc-400 max-w-xl text-[15px] leading-relaxed">
//             A collection of full-stack products focused on performance,
//             scalability, and modern user experience.
//           </p>
//         </div>

//         {/* projects */}
//         <div className="space-y-6">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} {...project} index={index} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Project;


// Project.jsx

import React from "react";
import ProjectCard from "../components/ProjectCard";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

const projects = [
  {
    title: "Pulse Analytics",
    image: p1,
    description:
      "Built a full-stack AI dashboard with authentication, subscription flow, and real-time content generation using Next.js and OpenAI APIs.",
    tech_stack: ["Next.js", "TypeScript", "MongoDB"],
    github: "#",
    live: "#",
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

const Project = () => {
  return (
    <section
      id="projects"
      className="bg-[#050505] text-white py-24 md:py-32 px-5"
    >

      <div className="max-w-6xl mx-auto md:px-4">

        {/* heading */}
        <div className="mb-14">

          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
            Selected Work
          </h2>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
            A selection of full-stack applications focused on modern UI,
            scalable architecture, and real-world product development.
          </p>

        </div>

        {/* projects */}
        <div className="space-y-6">
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
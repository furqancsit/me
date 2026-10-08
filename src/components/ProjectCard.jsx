

// import {
//   FaArrowUpRightFromSquare,
//   FaGithub,
// } from "react-icons/fa6";

// const ProjectCard = ({
//   title,
//   description,
//   image,
//   tech_stack,
//   live,
//   github,
//   category,
// }) => {
//   return (
//     <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b]">

//       {/* IMAGE */}
//       <div className="relative h-[360px] sm:h-[500px] overflow-hidden">

//         <img
//           src={image}
//           alt={title}
//           className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
//         />

//         {/* overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

//         {/* category */}
//         <div className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">

//           <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-300">
//             {category}
//           </span>

//         </div>

//         {/* content */}
//         <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">

//           <div className="rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-2xl sm:p-6">

//             {/* top row */}
//             <div className="flex items-start justify-between gap-4">

//               <div>

//                 <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
//                   {title}
//                 </h3>

//                 <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
//                   {description}
//                 </p>

//               </div>

//               {/* live icon */}
//               <a
//                 href={live}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-black transition duration-300 group-hover:rotate-6"
//               >
//                 <FaArrowUpRightFromSquare size={15} />
//               </a>

//             </div>

//             {/* bottom row */}
//             <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

//               {/* tech stack */}
//               <div className="flex flex-wrap gap-2">

//                 {tech_stack.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-zinc-200"
//                   >
//                     {tech}
//                   </span>
//                 ))}

//               </div>

//               {/* actions */}
//               <div className="flex items-center gap-3">

//                 <a
//                   href={github}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
//                 >
//                   <FaGithub size={14} />
//                   GitHub
//                 </a>

//                 <a
//                   href={live}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex h-10 items-center rounded-xl bg-white px-4 text-sm font-medium text-black transition hover:bg-zinc-200"
//                 >
//                   Live Demo
//                 </a>

//               </div>

//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProjectCard;


import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const ProjectCard = ({
  title,
  description,
  image,
  tech_stack,
  live,
  github,
  category,
}) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a]">

      {/* IMAGE */}
      <div className="relative aspect-[16/8] overflow-hidden bg-[#111]">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-black/5" />

        {/* category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-md border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-sm">
            {category}
          </span>
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-5 sm:p-6">

        {/* TITLE + ACTION */}
        <div className="flex items-start justify-between gap-6">

          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {title}
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
              {description}
            </p>
          </div>

          {/* External link */}
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${title}`}
            className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] text-zinc-500 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white sm:flex"
          >
            <FaArrowUpRightFromSquare size={13} />
          </a>

        </div>

        {/* TECH */}
        <div className="mt-5 flex flex-wrap gap-2">

          {tech_stack.map((tech, index) => (
            <span
              key={index}
              className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-[11px] text-zinc-400"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* FOOTER */}
        <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">

          <span className="text-xs text-zinc-600">
            {category}
          </span>

          <div className="flex items-center gap-2">

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 items-center gap-2 rounded-lg border border-white/[0.08] px-3 text-xs font-medium text-zinc-400 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
            >
              <FaGithub size={13} />
              GitHub
            </a>

            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 items-center gap-2 rounded-lg bg-white px-3.5 text-xs font-medium text-black transition hover:bg-zinc-200"
            >
              Live Demo
              <FaArrowUpRightFromSquare size={11} />
            </a>

          </div>

        </div>

      </div>
    </article>
  );
};

export default ProjectCard;


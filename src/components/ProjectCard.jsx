// import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// const ProjectCard = ({
//   title,
//   description,
//   image,
//   tech_stack,
//   live,
//   index,
// }) => {
//   return (
//     <a
//       href={live}
//       target="_blank"
//       rel="noreferrer"
//       className="block group"
//     >
//       <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b]">

//         {/* IMAGE */}
//         <div className="relative h-[420px] sm:h-[520px] overflow-hidden">

//           <img
//             src={image}
//             alt={title}
//             className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition duration-700"
//           />

//           {/* cinematic overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

//           {/* top floating number */}
//           <div className="absolute top-4 left-4 backdrop-blur-xl bg-black/40 border border-white/10 px-4 py-2 rounded-full">

//             <span className="text-xs text-zinc-300 tracking-widest">
//               PROJECT 0{index + 1}
//             </span>

//           </div>

//           {/* floating bottom card */}
//           <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">

//             <div className="rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-2xl p-5 sm:p-6">

//               {/* title row */}
//               <div className="flex items-start justify-between gap-4">

//                 <div>

//                   <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-none">
//                     {title}
//                   </h3>

//                   <p className="mt-3 text-zinc-400 text-sm sm:text-[15px] leading-relaxed max-w-md">
//                     {description}
//                   </p>
//                 </div>

//                 <div className="shrink-0 w-11 h-11 rounded-2xl bg-white text-black flex items-center justify-center group-hover:rotate-12 transition duration-300">

//                   <FaArrowUpRightFromSquare />

//                 </div>
//               </div>

//               {/* tags */}
//               <div className="mt-6 flex flex-wrap gap-2">

//                 {tech_stack.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1.5 rounded-full bg-white/10 text-xs text-zinc-200 border border-white/10"
//                   >
//                     {tech}
//                   </span>
//                 ))}

//               </div>

//             </div>

//           </div>
//         </div>
//       </div>
//     </a>
//   );
// };

// export default ProjectCard;

// ProjectCard.jsx

import {
  FaArrowUpRightFromSquare,
  FaGithub,
} from "react-icons/fa6";

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
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b]">

      {/* IMAGE */}
      <div className="relative h-[360px] sm:h-[500px] overflow-hidden">

        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* category */}
        <div className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">

          <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-300">
            {category}
          </span>

        </div>

        {/* content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">

          <div className="rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-2xl sm:p-6">

            {/* top row */}
            <div className="flex items-start justify-between gap-4">

              <div>

                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  {title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                  {description}
                </p>

              </div>

              {/* live icon */}
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-black transition duration-300 group-hover:rotate-6"
              >
                <FaArrowUpRightFromSquare size={15} />
              </a>

            </div>

            {/* bottom row */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              {/* tech stack */}
              <div className="flex flex-wrap gap-2">

                {tech_stack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* actions */}
              <div className="flex items-center gap-3">

                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
                >
                  <FaGithub size={14} />
                  GitHub
                </a>

                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 items-center rounded-xl bg-white px-4 text-sm font-medium text-black transition hover:bg-zinc-200"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
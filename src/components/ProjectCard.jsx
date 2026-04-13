import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  image,
  highlights,
  github,
  live,
  tech_stack = [],
}) => {
  return (
    <div
      onClick={() => window.open(live, "_blank")}
      className="cursor-pointer group relative bg-neutral-900/60 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-amber-400/40"
    >
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
      </div>

      <div className="p-5 space-y-4">
        <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition">
          {title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech_stack.map((item, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
              {item}
            </span>
          ))}
        </div>

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            source code →
          </a>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
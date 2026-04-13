import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  image,
  liveLink,
  moreLink,
  tech = [],
}) => {
  return (
    <div className="group relative bg-neutral-900/60 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-amber-400/40">

      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          fill
          className="object-cover scale-100 group-hover:scale-105 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">

        {/* Title */}
        <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center pt-2 text-sm">
          {liveLink ? (
            <Link
              href={liveLink}
              target="_blank"
              className="flex items-center gap-1 text-gray-300 hover:text-amber-400 transition"
            >
              <FiExternalLink />
              Live
            </Link>
          ) : <div />}

          {moreLink && (
            <Link
              href={moreLink}
              className="text-amber-400 hover:underline"
            >
              Details →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
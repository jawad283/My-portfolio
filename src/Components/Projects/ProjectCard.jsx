import { useState } from "react";
import { motion } from "motion/react";

// Icons
const GithubIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ExternalLinkIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const StarIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 10.26 24 10.26 17.55 16.52 19.64 24.78 12 19.52 4.36 24.78 6.45 16.52 0 10.26 8.91 10.26 12 2" />
  </svg>
);

// ProjectCard Component
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full flex flex-col"
    >
      <div
        className="relative flex flex-col h-full rounded-2xl overflow-hidden
                   border border-gray-200/60 dark:border-white/10
                   bg-white/50 dark:bg-white/5 backdrop-blur-sm
                   transition-all duration-300
                   hover:border-indigo-200/60 dark:hover:border-indigo-500/30
                   hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20"
      >
        {/* Featured Badge */}
        {project.featured && (
          <div
            className="absolute top-4 right-4 z-10 flex items-center gap-1.5
                       px-3 py-1.5 rounded-full
                       bg-indigo-500/90 dark:bg-indigo-500/80
                       border border-indigo-400/50 dark:border-indigo-400/30
                       text-white text-xs font-semibold
                       backdrop-blur-sm"
          >
            <StarIcon size={14} />
            Featured
          </div>
        )}

        {/* Image Container */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML =
                '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800"><span class="text-gray-500 dark:text-gray-400 text-sm">Project Image</span></div>';
            }}
          />

          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
          >
            <span className="text-white text-sm font-medium border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">
              View Project
            </span>
          </motion.div>
        </div>

        {/* Content Container */}
        <div className="p-5 sm:p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-flex px-2.5 py-1 rounded-full
                           text-[10px] sm:text-xs font-medium
                           bg-indigo-100/60 dark:bg-indigo-500/20
                           text-indigo-700 dark:text-indigo-300
                           border border-indigo-200/50 dark:border-indigo-500/30
                           transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60 dark:border-white/10 mt-auto">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                         text-sm font-semibold
                         bg-gray-900 dark:bg-white
                         text-white dark:text-gray-900
                         hover:opacity-90
                         transition-all duration-300
                         group/link shadow-sm"
            >
              <span>Live Demo</span>
              <ExternalLinkIcon
                size={16}
                className="group-hover/link:translate-x-0.5 transition-transform"
              />
            </a>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="flex items-center justify-center p-2.5 rounded-xl
                         border border-gray-200 dark:border-white/10
                         text-gray-700 dark:text-gray-300
                         bg-white/50 dark:bg-white/5
                         hover:bg-indigo-50 dark:hover:bg-indigo-500/10
                         hover:border-indigo-200 dark:hover:border-indigo-500/30
                         hover:text-indigo-600 dark:hover:text-indigo-400
                         transition-all duration-300 shadow-sm"
            >
              <GithubIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

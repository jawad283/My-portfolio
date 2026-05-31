// ServiceCard.jsx

import { motion } from "motion/react";

// Reusable service card. Stateless and theme-aware.
// Hook in your own shared <Tag />, <Button />, or animation utilities here if needed.
const ServiceCard = ({ service, index = 0 }) => {
  const { icon: Icon, title, description, tags, cta } = service;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col h-full p-6 sm:p-7 rounded-2xl
                 border border-gray-200/60 dark:border-white/10
                 bg-white/50 dark:bg-white/5 backdrop-blur-sm
                 hover:border-indigo-300/70 dark:hover:border-indigo-500/40
                 hover:shadow-xl hover:shadow-indigo-500/10
                 transition-all duration-300"
    >
      {/* Icon */}
      <div
        className="inline-flex items-center justify-center w-12 h-12 rounded-xl
                   border border-indigo-200/50 dark:border-indigo-500/30
                   bg-indigo-50/60 dark:bg-indigo-500/10
                   text-indigo-600 dark:text-indigo-400
                   group-hover:scale-110 group-hover:rotate-[-4deg]
                   transition-transform duration-300"
      >
        {Icon ? <Icon size={22} strokeWidth={2} /> : null}
      </div>

      {/* Title */}
      <h3
        className="mt-5 text-lg sm:text-xl font-semibold tracking-tight
                   text-gray-900 dark:text-white
                   group-hover:text-indigo-600 dark:group-hover:text-indigo-400
                   transition-colors duration-300"
      >
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>

      {/* Tags (optional) */}
      {tags?.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-medium
                         border border-gray-200/60 dark:border-white/10
                         bg-white/60 dark:bg-white/5
                         text-gray-700 dark:text-gray-300
                         transition-colors duration-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {/* CTA (optional) */}
      {cta && (
        <div className="mt-6 pt-5 border-t border-gray-200/60 dark:border-white/10">
          <a
            href={cta.href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold
                       text-gray-900 dark:text-white
                       hover:text-indigo-600 dark:hover:text-indigo-400
                       transition-colors duration-300"
          >
            {cta.label}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      )}
    </motion.article>
  );
};

export default ServiceCard;

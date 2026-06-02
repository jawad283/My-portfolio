import { motion } from "motion/react";
import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const sortedProjects = [...projectsData].sort((a, b) => {
    if (a.featured === b.featured) return a.id - b.id;
    return a.featured ? -1 : 1;
  });

  return (
    <section id="Projects" className="relative py-8 sm:py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 sm:mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 flex flex-col items-center"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                          border border-indigo-200/50 dark:border-indigo-500/30
                          bg-indigo-50/50 dark:bg-indigo-500/10
                          transition-colors duration-300"
            >
              <span className="w-2 h-2 bg-indigo-500 rounded-full" />
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                My Work
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              My{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Projects
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore a selection of projects I've built, showcasing my
              expertise in web development, design, and problem-solving.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

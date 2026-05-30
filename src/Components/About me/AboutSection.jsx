import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <section className="relative py-6 sm:py-6 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-20 -left-40 w-80 h-80 bg-indigo-500/10 
                     rounded-full blur-3xl"
        />

        <div
          className="absolute bottom-40 -right-40 w-96 h-96 bg-blue-500/10 
                     rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="space-y-8 text-center">
          {/* Intro badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                       border border-indigo-200/50 dark:border-indigo-500/30
                       bg-indigo-50/50 dark:bg-indigo-500/10
                       transition-colors duration-300 mx-auto"
          >
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              About Me
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Building Digital Experiences That Matter
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            I create responsive, user-centric websites with HTML, CSS,
            JavaScript, React, Tailwind CSS, and Bootstrap. My focus is on
            performance, intuitive design, and strategic optimization—combining
            clean code with{" "}
            <span className="text-indigo-500 dark:text-indigo-400">SEO</span>{" "}
            and{" "}
            <span className="text-indigo-500 dark:text-indigo-400">
              Google Ads
            </span>{" "}
            expertise to build digital experiences that truly impact your
            business.
          </motion.p>

          {/* Status Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            {/* Availability Badge */}
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full 
                         border border-green-200/50 dark:border-green-500/30
                         bg-green-50/50 dark:bg-green-500/10
                         transition-colors duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                Available for Work
              </span>
            </div>

            {/* Location Badge */}
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full 
                         border border-blue-200/50 dark:border-blue-500/30
                         bg-blue-50/50 dark:bg-blue-500/10
                         transition-colors duration-300"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-700 dark:text-blue-300"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Kabul, Afghanistan
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

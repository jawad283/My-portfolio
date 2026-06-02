// Services.jsx

import { motion } from "motion/react";
import servicesData from "./servicesData";
import ServiceCard from "./ServiceCard";

// Wire in your existing section heading / shared animation utilities here if you have them.
const Services = () => {
  return (
    <section
      id="Services"
      className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       border border-indigo-200/50 dark:border-indigo-500/30
                       bg-indigo-50/50 dark:bg-indigo-500/10
                       transition-colors duration-300"
          >
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              What I do
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight
                       text-gray-900 dark:text-white leading-tight"
          >
            Services I{" "}
            <span className="text-indigo-500 dark:text-indigo-400">offer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            End-to-end product engineering — from clean interfaces and resilient
            APIs to performance tuning and discoverability.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div
          className="mt-14 sm:mt-16 grid gap-6 sm:gap-7
                     grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

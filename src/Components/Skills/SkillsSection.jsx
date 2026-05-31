import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const SkillsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillsData = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
    { name: "React", icon: FaReact, color: "text-cyan-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const duplicatedSkills = [...skillsData, ...skillsData, ...skillsData];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 overflow-hidden bg-white dark:bg-gray-950"
    >
      <div className="relative w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-hidden py-8"
          >
            <motion.div
              animate={{
                x: isPaused ? 0 : [0, -1200],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex gap-6 shrink-0"
            >
              {duplicatedSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isVisible
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: (index % skillsData.length) * 0.05,
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -8,
                    }}
                    className="relative group shrink-0 w-48"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-purple-500/20 
                                 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    <div
                      className="relative h-full px-6 py-8 rounded-2xl
                                 bg-white/50 dark:bg-white/5 backdrop-blur-xl
                                 shadow-md dark:shadow-lg shadow-black/10 dark:shadow-black/20
                                 transition-all duration-300
                                 group-hover:bg-white/70 dark:group-hover:bg-white/10 group-hover:shadow-xl dark:group-hover:shadow-2xl group-hover:shadow-indigo-500/20"
                    >
                      <div className="flex flex-col items-center justify-center h-full gap-4">
                        <IconComponent className={`text-5xl ${skill.color}`} />

                        <div className="text-center">
                          <h3 className="text-gray-900 dark:text-white font-semibold text-lg">
                            {skill.name}
                          </h3>
                        </div>
                      </div>

                      <motion.div
                        animate={{
                          y: [0, -4, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute top-2 right-2 w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <div className="flex justify-center mt-12 gap-2">
            {skillsData.map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.1,
                  repeat: Infinity,
                }}
                className="w-2 h-2 rounded-full bg-indigo-600/50 dark:bg-indigo-400/50 hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-colors cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

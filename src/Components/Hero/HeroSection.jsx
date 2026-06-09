import { useState } from "react";
import { motion } from "motion/react";
import heroData from "./heroData";

const ArrowRightIcon = ({ size = 20 }) => (
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
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const HeroSection = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <section
      id="Home"
      className="relative min-h-screen pt-32 pb-10 px-4 sm:px-6 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 lg:space-y-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                          border border-indigo-200/50 dark:border-indigo-500/30
                          bg-indigo-50/50 dark:bg-indigo-500/10
                          transition-colors duration-300"
            >
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                Welcome to my portfolio
              </span>
            </div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
              >
                Hi, I'm{" "}
                <span className="text-indigo-500 dark:text-indigo-400">
                  {heroData.name}
                </span>
              </motion.h1>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300"
              >
                {heroData.title}
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg"
            >
              {heroData.description}
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {heroData.buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  onMouseEnter={() => setHoveredButton(index)}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 
                             rounded-full text-sm sm:text-base font-semibold
                             transition-all duration-300 overflow-hidden
                             ${
                               button.primary
                                 ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:shadow-lg hover:shadow-indigo-500/30"
                                 : "border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10"
                             }`}
                >
                  <span className="flex items-center gap-2">
                    {button.text}
                    <ArrowRightIcon
                      size={18}
                      className={`transition-transform duration-300 ${
                        hoveredButton === index ? "translate-x-1" : ""
                      }`}
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div
            className="relative flex justify-center items-center"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 40,
                rotateX: 10,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                rotateY: -5,
                rotateX: 8,
              }}
              whileTap={{
                scale: 0.98,
                rotateY: 5,
                rotateX: -5,
              }}
              className="relative w-full max-w-md cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="absolute inset-0 bg-indigo-500/20 dark:bg-indigo-500/10
                           rounded-3xl blur-2xl"
              />

              <div
                className="relative rounded-3xl overflow-hidden
                           border border-white/20 dark:border-white/10
                           bg-white/10 dark:bg-white/5 backdrop-blur-xl
                           shadow-2xl shadow-black/20 dark:shadow-black/40
                           transition-all duration-300"
              >
                <div className="aspect-square w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <motion.img
                    src={heroData.imagePath}
                    alt={heroData.name}
                    className="w-full h-full object-cover"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center"><span class="text-gray-400 dark:text-gray-600">Profile Image</span></div>';
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

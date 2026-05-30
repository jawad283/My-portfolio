import React, { useRef, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ─── SVG Icons ─── */
const HtmlIcon = (
  <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
    <path
      fill="#E44D26"
      d="M19.037 113.876 9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
    />
    <path fill="#F16529" d="m64 116.8 36.378-10.086 8.559-95.878H64z" />
    <path
      fill="#EBEBEB"
      d="M64 52.455H49.81l-.98-10.978H64V30.756H36.84l.26 2.911 2.665 29.885H64zm0 28.426-.049.013-15.323-4.141-.979-10.973H36.61l1.927 21.602 25.404 7.05.059-.016z"
    />
    <path
      fill="#fff"
      d="M63.962 52.455v10.998h13.207l-1.245 13.89-11.962 3.227v11.442l25.424-7.044.187-2.096 2.915-32.659.303-3.758zm0-21.699v10.721h26.151l.217-2.43.494-5.38.259-2.911z"
    />
  </svg>
);

const CssIcon = (
  <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
    <path
      fill="#1572B6"
      d="M18.814 114.123 8.76 1.352h110.48l-10.064 112.754-45.243 12.543z"
    />
    <path
      fill="#33A9DC"
      d="m64.001 117.062 36.559-10.136 8.601-96.354h-45.16z"
    />
    <path
      fill="#fff"
      d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95z"
    />
    <path
      fill="#EBEBEB"
      d="m64.083 87.349-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018z"
    />
    <path
      fill="#fff"
      d="m81.127 64.675-1.666 18.522-15.426 4.164v14.18l28.354-7.858.208-2.337 1.766-19.793.183-2.038.205-2.293H64.018v13.831h17.109z"
    />
    <path
      fill="#EBEBEB"
      d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711zm-.047 27.994v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711z"
    />
  </svg>
);

const JsIcon = (
  <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
    <path
      fill="#323330"
      d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.266z"
    />
  </svg>
);

const ReactIcon = (
  <svg
    viewBox="-11.5 -10.232 23 20.463"
    className="h-full w-full"
    aria-hidden="true"
  >
    <circle r="2.05" fill="#61dafb" />
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const TailwindIcon = (
  <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
    <path
      fill="#38bdf8"
      d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.871 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
    />
  </svg>
);

const BootstrapIcon = (
  <svg viewBox="0 0 128 128" className="h-full w-full" aria-hidden="true">
    <path
      fill="#7952B3"
      d="M20.967 28.706C20.846 25.043 23.752 22 27.626 22h72.748c3.874 0 6.78 3.043 6.659 6.706-.117 3.52.042 8.078.197 13.36.42 14.158 1.225 39.873-7.398 50.61-3.85 4.793-9.527 7.32-16.93 8.494h-44.806c-7.403-1.175-13.08-3.701-16.93-8.495-8.623-10.736-7.818-36.451-7.398-50.609.155-5.282.314-9.84.197-13.36z"
    />
    <path
      fill="#fff"
      d="M53.018 90.798H37.106V37.13h15.912c7.65 0 12.658 4.41 12.658 11.187 0 4.757-3.595 9.011-8.181 9.755v.248c6.241.685 10.46 4.997 10.46 11.062 0 7.638-5.443 11.416-13.937 11.416zm-7.92-47.587v15.317h6.226c4.81 0 7.47-1.939 7.47-5.405 0-3.244-2.276-5.043-6.213-5.043h-7.483zm0 21.45v16.873h6.474c4.96 0 7.583-1.987 7.583-5.687 0-3.7-2.698-5.187-7.918-5.187h-6.139z"
    />
  </svg>
);

const skills = [
  { name: "HTML5", color: "#E44D26", icon: HtmlIcon },
  { name: "CSS3", color: "#1572B6", icon: CssIcon },
  { name: "JavaScript", color: "#F0DB4F", icon: JsIcon },
  { name: "React", color: "#61DAFB", icon: ReactIcon },
  { name: "Tailwind CSS", color: "#38BDF8", icon: TailwindIcon },
  { name: "Bootstrap", color: "#7952B3", icon: BootstrapIcon },
];

/* ─── Floating Particles ─── */
const Particles = ({ count = 28 }) => {
  const dots = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 6,
      drift: Math.random() * 40 - 20,
    }));
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-primary/60"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            filter: "blur(0.5px)",
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, d.drift, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* ─── Skill Card (Glassmorphism + 3D Tilt) ─── */
const SkillCard = ({ skill }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [12, -12]), {
    stiffness: 200,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-12, 12]), {
    stiffness: 200,
    damping: 18,
  });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    x.set(0.5);
    y.set(0.5);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      whileHover={{ scale: 1.05 }}
      className="group relative flex h-40 w-40 shrink-0 select-none flex-col items-center justify-center gap-3 rounded-3xl border border-border bg-card/40 p-6 backdrop-blur-xl transition-colors sm:h-44 sm:w-44"
    >
      {/* Neon glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
        }}
      />
      {/* Ring on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: `0 0 0 1px ${skill.color}55, 0 0 30px ${skill.color}33`,
        }}
      />

      <motion.div
        style={{ transform: "translateZ(40px)" }}
        animate={hovered ? { y: -4 } : { y: 0 }}
        className="relative h-14 w-14 drop-shadow-lg sm:h-16 sm:w-16"
      >
        {skill.icon}
      </motion.div>
      <span
        style={{ transform: "translateZ(30px)" }}
        className="relative text-sm font-medium text-foreground/90"
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

/* ─── Marquee (Infinite Carousel) ─── */
const Marquee = ({ reverse = false }) => {
  const loop = [...skills, ...skills];

  return (
    <div className="group/marquee relative flex overflow-hidden py-4">
      <motion.div
        className="flex shrink-0 gap-6 pr-6"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
        style={{ willChange: "transform" }}
      >
        {loop.map((skill, i) => (
          <SkillCard key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </motion.div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
};

/* ─── Main Section ─── */
const SkillsShowcase = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      {/* Background gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      <Particles />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px] shadow-primary" />
            Tech Stack
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            The tools I use to craft fast, modern, award-worthy web experiences.
          </p>
        </motion.div>

        {/* Carousels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-16 space-y-2"
        >
          <Marquee />
          <Marquee reverse />
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsShowcase;

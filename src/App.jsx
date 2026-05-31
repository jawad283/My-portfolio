import { useState, useEffect } from "react";
import Navbar from "./Components/Header/Header";
import HeroSection from "./Components/Hero/HeroSection";
import AboutSection from "./Components/About me/AboutSection";
import SkillsSection from "./Components/Skills/SkillsSection";
import ProjectsSection from "./Components/Projects/ProjectsSection";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950">
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

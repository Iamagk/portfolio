import React, { useEffect, useState } from 'react';
import { useScrollspy } from './hooks/useScrollspy';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const sections = ['home', 'projects', 'skills', 'about', 'contact'];
  const activeSection = useScrollspy(sections, 100);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Update page title
  useEffect(() => {
    document.title = "Allenn George Kannadickal | 3rd year B.Tech Student | Computer Science and Engineering | BMSIT";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header activeSection={activeSection} />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const text = textRef.current;
    const buttons = buttonsRef.current;

    if (heading && text && buttons) {
      heading.style.opacity = '0';
      text.style.opacity = '0';
      buttons.style.opacity = '0';
      
      heading.style.transform = 'translateY(20px)';
      text.style.transform = 'translateY(20px)';
      buttons.style.transform = 'translateY(20px)';

      setTimeout(() => {
        heading.style.transition = 'opacity 0.8s, transform 0.8s';
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
        
        setTimeout(() => {
          text.style.transition = 'opacity 0.8s, transform 0.8s';
          text.style.opacity = '1';
          text.style.transform = 'translateY(0)';
          
          setTimeout(() => {
            buttons.style.transition = 'opacity 0.8s, transform 0.8s';
            buttons.style.opacity = '1';
            buttons.style.transform = 'translateY(0)';
          }, 300);
        }, 300);
      }, 300);
    }
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Map icon names to Lucide components
  const iconMap: Record<string, React.ReactNode> = {
    Github: <Github size={20} />,
    Linkedin: <Linkedin size={20} />,
    Twitter: <Twitter size={20} />,
    Mail: <Mail size={20} />
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gold-50 to-gold-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span className="block">Hello, I'm </span>
            <span className="text-gold-600 dark:text-gold-400">Allenn George Kannadickal</span>
          </h1>
          
          <p 
            ref={textRef}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
          >
          A results-driven Computer Science Engineering student with expertise in software development, data analytics,
          and AI-driven solutions.          </p>
          
          <div ref={buttonsRef} className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center mb-12">
            <button 
              onClick={scrollToProjects}
              className="px-8 py-3 bg-gold-600 hover:bg-gold-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              View My Work
              <ArrowDown size={18} className="ml-2" />
            </button>
            
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border border-gold-600 text-gold-600 dark:text-gold-400 dark:border-gold-400 hover:bg-gold-50 dark:hover:bg-gold-900/20 font-medium rounded-lg transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map(link => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300"
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button
          onClick={scrollToProjects}
          aria-label="Scroll down"
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
<section className="py-20 bg-white dark:bg-black"></section>
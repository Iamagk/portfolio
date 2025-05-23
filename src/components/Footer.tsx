import React from 'react';
import { socialLinks } from '../data/socialLinks';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  // Map icon names to their corresponding components
  const iconComponents = {
    Github,
    Linkedin,
    Twitter,
    Mail
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-gold-100 text-black dark:bg-gold-900/30 dark:text-gold-400 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400 mb-4">Portfolio</h3>
            <p className="text-black dark:text-gold-400 mb-4">
              
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(link => {
                const IconComponent = iconComponents[link.icon as keyof typeof iconComponents];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-600 dark:text-gold-400 hover:text-gold-800 dark:hover:text-gold-200 transition-colors"
                    aria-label={link.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gold-600 dark:text-gold-400">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gold-600 dark:text-gold-400 hover:text-gold-800 dark:hover:text-gold-200 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
        
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gold-600 dark:text-gold-400">Contact</h3>
            <ul className="space-y-2 text-black dark:text-gold-400">
              <li>Benguluru, India</li>
              <li>allenngeorgek@gmail.com</li>
              <li>+91 9946317858</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold-600 dark:border-gold-400 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black dark:text-gold-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Allenn George. All rights reserved.
          </p>
          <p className="text-black dark:text-gold-400 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

<section className="py-20 bg-white dark:bg-black"></section>
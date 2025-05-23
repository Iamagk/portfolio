import React from 'react';
import { Download } from 'lucide-react';
import myPhoto from '../assets/myphoto.jpg';
import resumePDF from '../assets/resume.pdf';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Gold box for About Me */}
            <div className="bg-gold-100 dark:bg-gold-900/30 rounded-lg p-10 shadow-md">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I’m Allenn George Kannadickal, a curious and driven Computer Science Engineering student at BMS Institute of Technology, Bangalore (Batch of 2026). I thrive on solving complex problems with clean code and data-driven thinking.
                </p>
                <p>
                  With a solid foundation in data structures, algorithms, full-stack development, and machine learning, I enjoy building tools that blend intelligent automation with intuitive user experiences. I’m fluent in C, C++, Java, Python, and modern web technologies like React, JavaScript, and MongoDB.
                </p>
                <p>
                  My passion for AI applications, participation in open-source communities, and hands-on work with diverse tech stacks reflect my eagerness to keep learning and contributing. I’m also certified by Google (Data Analytics), MongoDB, and Cisco, further strengthening my technical foundation.
                </p>
                <p>
                  Whether it’s diving into a new tech stack or brainstorming product ideas, I bring strong problem-solving, communication, and team collaboration skills to the table. I’m currently exploring opportunities to intern in software engineering, aiming to grow alongside teams that value innovation, mentorship, and real-world impact.
                </p>
                <p>
                  <span className="font-semibold">Outside of Tech</span><br />
                  When I’m not coding or building something new, you’ll find me geeking out over watches, exploring photography, diving into financial market trends, or catching up on the latest breakthroughs in AI. I believe in continuous learning, staying curious, and enjoying the process just as much as the outcome.
                </p>
              </div>
              
              <div className="mt-8">
                <a
                  href={resumePDF}
                  download
                  className="inline-flex items-center px-6 py-3 bg-gold-600 text-white font-medium rounded-lg hover:bg-gold-700 transition-colors duration-300"
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
                <img 
                  src={myPhoto} 
                  alt="Allenn George Kannadickal" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute top-8 -left-8 w-full h-full bg-gold-200 dark:bg-gold-900/30 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              My Educational Journey
            </h3>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold-200 dark:bg-gold-900/50"></div>
              
              <div className="space-y-12">
                {/* B.E. Computer Science */}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className="w-8 h-8 bg-gold-600 dark:bg-gold-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-auto md:w-5/12 p-6 bg-gold-100 dark:bg-gold-900/30 shadow-md rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      B.E. Computer Science
                    </h4>
                    <p className="text-sm text-gold-600 dark:text-gold-400 mb-3">
                      BMS Institute of Technology, Bangalore &mdash; 2026
                    </p>
                    <p className="text-gray-700 dark:text-gold-100">
                      CGPA: 8.44
                    </p>
                  </div>
                </div>
                {/* 12th Grade */}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className="w-8 h-8 bg-gold-600 dark:bg-gold-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="mr-auto md:w-5/12 p-6 bg-gold-100 dark:bg-gold-900/30 shadow-md rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      12th Grade
                    </h4>
                    <p className="text-sm text-gold-600 dark:text-gold-400 mb-3">
                      Global Public School, Kochi &mdash; 2022
                    </p>
                    <p className="text-gray-700 dark:text-gold-100">
                      Percentage: 72.00%
                    </p>
                  </div>
                </div>
                {/* 10th Grade */}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className="w-8 h-8 bg-gold-600 dark:bg-gold-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-auto md:w-5/12 p-6 bg-gold-100 dark:bg-gold-900/30 shadow-md rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      10th Grade
                    </h4>
                    <p className="text-sm text-gold-600 dark:text-gold-400 mb-3">
                      Gulf Indian School, Kuwait &mdash; 2020
                    </p>
                    <p className="text-gray-700 dark:text-gold-100">
                      Percentage: 89.40%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
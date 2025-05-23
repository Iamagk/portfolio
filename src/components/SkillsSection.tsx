import React from 'react';
import { skills } from '../data/skills';

// Example certifications array, update as needed
const certifications = [
  {
    name: 'Data Analytics',
    issuer: 'Google',
    year: '2024'
  },
  {
    name: 'Introduction to MongoDB',
    issuer: 'MongoDB',
    year: '2024'
  },
  {
    name: 'PCAP - Cisco Networking Academy',
    issuer: 'Cisco',
    year: '2024'
  },
  {
    name: 'Business Fundamentals for Entrepreneurs',
    issuer: 'NPTEL',
    year: '2025'
  }
];

const categories = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'programming', label: 'Programming' },
  { id: 'database', label: 'Database' },
  { id: 'technology', label: 'Technologies' },
  { id: 'soft', label: 'Soft Skills' }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My technical skills, soft skills, and certifications.
          </p>
        </div>

        {/* All Skills in one big box, with smaller boxes for each subcategory */}
        <div className="bg-gold-200 dark:bg-gold-900/30 rounded-lg p-8 shadow-md mb-10">
          <h3 className="text-xl font-semibold text-gold-700 dark:text-gold-300 mb-6">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map(category => (
              <div
                key={category.id}
                className="bg-gold-50 dark:bg-gold-800/40 rounded-lg p-4 shadow border border-gold-200 dark:border-gold-800"
              >
                <h4 className="text-gold-600 dark:text-gold-400 font-medium mb-2">{category.label}</h4>
                <ul className="list-disc list-inside text-gray-800 dark:text-gold-100 mb-0">
                  {skills
                    .filter(skill => skill.category === category.id)
                    .map(skill => (
                      <li key={skill.name}>{skill.name}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Box */}
        <div className="bg-gold-50 dark:bg-gold-800/30 rounded-lg p-8 shadow-md">
          <h3 className="text-xl font-semibold text-gold-700 dark:text-gold-300 mb-4">Certifications</h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gold-100">
            {certifications.map(cert => (
              <li key={cert.name + cert.issuer} className="mb-2">
                <span className="font-medium">{cert.name}</span> &mdash; {cert.issuer} <span className="text-sm text-gray-500">({cert.year})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
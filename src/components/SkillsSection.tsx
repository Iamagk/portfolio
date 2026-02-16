import React from 'react';
// skills data rendered inline per requested structure

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

        {/* Skills content replaced with user's structured categories */}
        <div className="bg-gold-200 dark:bg-gold-900/30 rounded-lg p-8 shadow-md mb-10">
          <h3 className="text-xl font-semibold text-gold-700 dark:text-gold-300 mb-6">Skills</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🧠 Artificial Intelligence & Data Systems</h4>
              <ul className="list-disc list-inside text-gray-800 dark:text-gold-100">
                <li>Machine Learning</li>
                <li>Predictive Modeling &amp; Backtesting</li>
                <li>Feature Engineering</li>
                <li>Time Series Analysis</li>
                <li>Data Analytics</li>
                <li>ETL Pipeline Development</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">⚙️ Backend &amp; API Engineering</h4>
              <ul className="list-disc list-inside text-gray-800 dark:text-gold-100">
                <li>Python</li>
                <li>FastAPI</li>
                <li>RESTful API Development</li>
                <li>Authentication (JWT)</li>
                <li>API Architecture &amp; System Design</li>
                <li>Microservices Fundamentals</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🗄 Databases &amp; Data Infrastructure</h4>
              <ul className="list-disc list-inside text-gray-800 dark:text-gold-100">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>SQL</li>
                <li>Database Design &amp; Optimization</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🌐 Frontend &amp; Product Interface</h4>
              <ul className="list-disc list-inside text-gray-800 dark:text-gold-100">
                <li>React.js</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Responsive UI Development</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🧩 Core Engineering Foundations</h4>
              <ul className="list-disc list-inside text-gray-800 dark:text-gold-100">
                <li>Data Structures &amp; Algorithms</li>
                <li>Object-Oriented Programming (OOPS)</li>
                <li>DBMS</li>
                <li>Operating Systems (Fundamentals)</li>
                <li>Computer Networks (Fundamentals)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🚀 Product &amp; Startup Orientation</h4>
              <ul className="list-disc list-inside text-gray-800 dark:text-gold-100">
                <li>Product Thinking</li>
                <li>Business &amp; Market Awareness</li>
                <li>SaaS System Architecture (Foundational)</li>
                <li>Problem Decomposition &amp; Scalable Design</li>
              </ul>
            </div>
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
import React from 'react';
// skills data rendered inline per requested structure

// Certifications structured and ordered for boxed grid rendering
const certBoxes = [
  { id: 'gda', title: 'Google Data Analytics Professional Certificate', issuer: 'Google', year: '2024' },
  { id: 'pcap', title: 'PCAP – Programming Essentials in Python', issuer: 'Cisco Networking Academy', year: '2024' },
  { id: 'hci', title: 'Human Computer Interaction', issuer: 'NPTEL (Jan–Apr 2025)', year: '2025' },
  { id: 'dap', title: 'Data Analytics with Python', issuer: 'VTU (Elite Gold)', year: '2026' },
  { id: 'affective', title: 'Affective Computing', issuer: 'VTU (Elite Gold)', year: '2026' },
  { id: 'business', title: 'Business Fundamentals for Entrepreneurs', issuer: 'NPTEL (Jan–Apr 2025)', year: '2025' },
  { id: 'mongo', title: 'Introduction to MongoDB', issuer: 'MongoDB', year: '2024' },
  { id: 'joy', title: 'The Joy of Computing using Python', issuer: 'VTU (Elite Gold)', year: '2026' },
  { id: 'blockchain', title: 'Blockchain and its Applications', issuer: 'VTU (Elite Gold)', year: '2026' },
  { id: 'industry4', title: 'Introduction to Industry 4.0 and Industrial Internet of Things', issuer: 'VTU (Elite Gold)', year: '2026' },
  { id: 'social', title: 'Social Networks', issuer: 'VTU (Elite Gold)', year: '2026' }
];

// Define skill boxes to render in a grid of boxes (restores previous layout)
const skillBoxes = [
  {
    id: 'ai',
    label: 'Artificial Intelligence & Data Systems',
    items: [
      'Machine Learning',
      'Predictive Modeling & Backtesting',
      'Feature Engineering',
      'Time Series Analysis',
      'Data Analytics',
      'ETL Pipeline Development'
    ]
  },
  {
    id: 'backend',
    label: 'Backend & API Engineering',
    items: [
      'Python',
      'FastAPI',
      'RESTful API Development',
      'Authentication (JWT)',
      'API Architecture & System Design',
      'Microservices Fundamentals'
    ]
  },
  {
    id: 'db',
    label: 'Databases & Data Infrastructure',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'Database Design & Optimization']
  },
  {
    id: 'frontend',
    label: 'Frontend & Product Interface',
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI Development']
  },
  {
    id: 'core',
    label: 'Core Engineering Foundations',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOPS)',
      'DBMS',
      'Operating Systems (Fundamentals)',
      'Computer Networks (Fundamentals)'
    ]
  },
  {
    id: 'product',
    label: 'Product & Startup Orientation',
    items: [
      'Product Thinking',
      'Business & Market Awareness',
      'SaaS System Architecture (Foundational)',
      'Problem Decomposition & Scalable Design'
    ]
  }
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

        {/* Restore boxed grid layout for skills */}
        <div className="bg-gold-50 dark:bg-gold-800/30 rounded-lg p-8 shadow-md mb-10">
          <h3 className="text-xl font-semibold text-gold-700 dark:text-gold-300 mb-6">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillBoxes.map(box => (
              <div
                key={box.id}
                className="bg-white dark:bg-black rounded-lg p-4 shadow border border-gold-200 dark:border-gold-800"
              >
                <h4 className="text-gold-700 dark:text-gold-300 font-medium mb-2">{box.label}</h4>
                <ul className="list-disc list-inside text-gray-800 dark:text-gold-100 mb-0">
                  {box.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications rendered as boxed grid for readability */}
        <div className="bg-gold-50 dark:bg-gold-800/30 rounded-lg p-8 shadow-md">
          <h3 className="text-xl font-semibold text-gold-700 dark:text-gold-300 mb-6">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certBoxes.map(cert => (
              <div
                key={cert.id}
                className="bg-white dark:bg-black rounded-lg p-4 shadow border border-gold-200 dark:border-gold-800"
              >
                <h4 className="text-gold-700 dark:text-gold-300 font-medium mb-2">{cert.title}</h4>
                <p className="text-sm text-gray-700 dark:text-gold-100 mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
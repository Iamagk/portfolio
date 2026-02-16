import React from 'react';
// skills data rendered inline per requested structure

// Certifications list updated per request
const certifications = [
  // NPTEL (12-Week Courses)
  {
    name: 'Business Fundamentals for Entrepreneurs — NPTEL (Jan–Apr 2025)',
    issuer: 'NPTEL',
    year: '2025'
  },
  {
    name: 'Human Computer Interaction (In English) — NPTEL (Jan–Apr 2025)',
    issuer: 'NPTEL',
    year: '2025'
  },

  // VTU – Centre for Online Education (Elite Gold, 3 Credits Each)
  {
    name: 'Affective Computing',
    issuer: 'VTU - Centre for Online Education (Elite Gold)',
    year: '2026'
  },
  {
    name: 'Blockchain and its Applications',
    issuer: 'VTU - Centre for Online Education (Elite Gold)',
    year: '2026'
  },
  {
    name: 'Data Analytics with Python',
    issuer: 'VTU - Centre for Online Education (Elite Gold)',
    year: '2026'
  },
  {
    name: 'Introduction to Industry 4.0 and Industrial Internet of Things',
    issuer: 'VTU - Centre for Online Education (Elite Gold)',
    year: '2026'
  },
  {
    name: 'Social Networks',
    issuer: 'VTU - Centre for Online Education (Elite Gold)',
    year: '2026'
  },
  {
    name: 'The Joy of Computing using Python',
    issuer: 'VTU - Centre for Online Education (Elite Gold)',
    year: '2026'
  },

  // Professional Certifications
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    year: '2024'
  },
  {
    name: 'Introduction to MongoDB',
    issuer: 'MongoDB',
    year: '2024'
  },
  {
    name: 'PCAP – Programming Essentials in Python',
    issuer: 'Cisco Networking Academy',
    year: '2024'
  }
];

// Define skill boxes to render in a grid of boxes (restores previous layout)
const skillBoxes = [
  {
    id: 'ai',
    label: '🧠 Artificial Intelligence & Data Systems',
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
    label: '⚙️ Backend & API Engineering',
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
    label: '🗄 Databases & Data Infrastructure',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'Database Design & Optimization']
  },
  {
    id: 'frontend',
    label: '🌐 Frontend & Product Interface',
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI Development']
  },
  {
    id: 'core',
    label: '🧩 Core Engineering Foundations',
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
    label: '🚀 Product & Startup Orientation',
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
        <div className="bg-gold-200 dark:bg-gold-900/30 rounded-lg p-8 shadow-md mb-10">
          <h3 className="text-xl font-semibold text-gold-700 dark:text-gold-300 mb-6">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillBoxes.map(box => (
              <div
                key={box.id}
                className="bg-gold-50 dark:bg-gold-800/40 rounded-lg p-4 shadow border border-gold-200 dark:border-gold-800"
              >
                <h4 className="text-gold-600 dark:text-gold-400 font-medium mb-2">{box.label}</h4>
                <ul className="list-disc list-inside text-gray-800 dark:text-gold-100 mb-0">
                  {box.items.map(item => (
                    <li key={item}>{item}</li>
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
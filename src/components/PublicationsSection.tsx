import React from 'react';
import publications from '../data/publications';

const PublicationsSection: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Publications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Selected publications.
          </p>
        </div>

        <div className="bg-gold-50 dark:bg-gold-800/30 rounded-lg p-8 shadow-md">
          <div className="space-y-6">
            {publications.map(pub => (
              <div key={pub.id} className="bg-white dark:bg-black rounded-lg p-4 shadow border border-gold-200 dark:border-gold-800">
                <h4 className="text-gold-700 dark:text-gold-300 font-medium mb-2">{pub.title}</h4>
                <p className="text-sm text-gray-700 dark:text-gold-100 mb-1">Published by {pub.publisher}</p>
                <p className="text-sm text-gray-500">{pub.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;

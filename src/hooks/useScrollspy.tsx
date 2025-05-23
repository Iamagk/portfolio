import { useState, useEffect } from 'react';

export function useScrollspy(sectionIds: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections
      const sections = sectionIds.map(id => {
        const element = document.getElementById(id);
        if (!element) return { id, top: 0, bottom: 0 };
        
        const rect = element.getBoundingClientRect();
        return {
          id,
          top: rect.top,
          bottom: rect.bottom
        };
      });

      // Find the first section that is currently visible
      const visibleSection = sections.find(section => {
        return section.top <= offset && section.bottom > offset;
      });

      if (visibleSection) {
        setActiveId(visibleSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial active section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
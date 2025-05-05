
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  children, 
  className,
  titleClassName
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const sectionElement = sectionRef.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionElement) {
      const revealElements = sectionElement.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (sectionElement) {
        const revealElements = sectionElement.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);
  
  return (
    <section id={id} ref={sectionRef} className={cn("py-16", className)}>
      <div className="container">
        <h2 className={cn("text-3xl md:text-4xl font-bold mb-10 text-navy-dark reveal", titleClassName)}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;

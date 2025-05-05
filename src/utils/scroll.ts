
export const setupScrollAnimation = () => {
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const revealElements = entry.target.querySelectorAll('.reveal');
        revealElements.forEach((el, index) => {
          // Add staggered delay to elements
          setTimeout(() => {
            el.classList.add('active');
          }, index * 150);
        });
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  return () => {
    sections.forEach(section => observer.unobserve(section));
  };
};

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: 'smooth'
    });
  }
};

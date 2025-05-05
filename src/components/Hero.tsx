
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-blue-50 pt-24">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 leading-tight">
              Jose F. Brevil, Jr.
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Researcher • Educator • Community Leader
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed max-w-xl">
              Dedicated to advancing knowledge through innovative research and fostering positive change through community engagement. My work spans across multidisciplinary fields with a focus on creating meaningful impact.
            </p>
            <div className="flex space-x-4">
              <Button 
                onClick={scrollToContact}
                className="bg-navy hover:bg-navy-light transition-colors"
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-navy text-navy hover:bg-navy hover:text-white transition-colors"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                View Resume
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/lovable-uploads/75ac3d35-8304-42a0-b428-df51f6937966.png" 
                alt="Jose F. Brevil, Jr." 
                className="object-cover w-full h-full object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-highlight-blue to-highlight-purple opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div 
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

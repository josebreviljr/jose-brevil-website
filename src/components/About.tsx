
import React from 'react';
import Section from './Section';
import { Separator } from "@/components/ui/separator";

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-white">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="reveal">
          <h3 className="text-xl font-semibold mb-4 text-navy">Background & Expertise</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            I am a passionate researcher and educator with over a decade of experience in my field. My work focuses on bridging theoretical frameworks with practical applications to address real-world challenges.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            With a Ph.D. from [University Name], I've conducted extensive research in [research areas], contributing to numerous peer-reviewed publications and presentations at international conferences.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Currently, I serve as [Current Position] at [Current Institution], where I lead initiatives in [specific areas] and mentor the next generation of researchers and practitioners.
          </p>
        </div>
        
        <div className="reveal">
          <h3 className="text-xl font-semibold mb-4 text-navy">Education & Professional Journey</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-navy">Ph.D. in [Field]</h4>
              <p className="text-gray-600">University Name, 20XX-20XX</p>
              <p className="text-sm text-gray-700 mt-1">Dissertation: "[Title of Dissertation]"</p>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium text-navy">Master's in [Field]</h4>
              <p className="text-gray-600">University Name, 20XX-20XX</p>
              <p className="text-sm text-gray-700 mt-1">Thesis: "[Title of Thesis]"</p>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium text-navy">Bachelor's in [Field]</h4>
              <p className="text-gray-600">University Name, 20XX-20XX</p>
              <p className="text-sm text-gray-700 mt-1">Graduated with Honors</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 reveal">
        <h3 className="text-xl font-semibold mb-4 text-navy">Skills & Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Research Methodology', 'Data Analysis', 'Project Management', 'Academic Writing', 
            'Public Speaking', 'Leadership', 'Curriculum Development', 'Grant Writing'].map((skill, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-md border border-gray-100 text-center">
              <span className="text-navy font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;

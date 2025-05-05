
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
            Jose F. Brevil, Jr. is a Haitian-American scholar, civic leader, and aspiring public policy advocate committed to equity, service, and innovation.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            As a senior at the Mississippi School for Mathematics and Science and an incoming student at the University of Mississippi, Jose combines academic excellence with grassroots engagement and institutional leadership.
          </p>
          <p className="text-gray-700 leading-relaxed">
            He is known for blending technology with public service, leading youth initiatives, and fostering bipartisan civic dialogue.
          </p>
        </div>
        
        <div className="reveal">
          <h3 className="text-xl font-semibold mb-4 text-navy">Education</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-navy">University of Mississippi (Incoming, Fall 2025)</h4>
              <p className="text-gray-600">B.A. in Public Policy Leadership, Trent Lott Leadership Institute</p>
              <p className="text-sm text-gray-700 mt-1">Minor in Economics</p>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium text-navy">Mississippi School for Mathematics and Science</h4>
              <p className="text-gray-600">Diploma Expected May 2025</p>
              <p className="text-sm text-gray-700 mt-1">Advanced coursework in mathematics, policy, and STEM, paired with leadership roles in student government, legal education, and civic service.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 reveal">
        <h3 className="text-xl font-semibold mb-4 text-navy">Skills & Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Leadership', 'Program Development', 'Public Speaking', 'Civic Engagement', 
            'Academic Research & Writing', 'Event & Project Management', 'Technology Integration in Education', 'Artificial Intelligence', 'Bilingual Communication'].map((skill, index) => (
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

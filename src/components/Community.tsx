
import React from 'react';
import Section from './Section';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CommunityService {
  title: string;
  organization: string;
  description: string;
  period: string;
  icon: string;
}

const communityServices: CommunityService[] = [
  {
    title: "Volunteer Educator",
    organization: "Community Learning Initiative",
    description: "Conducted workshops on [specific topics] for underserved communities, reaching over 500 participants annually.",
    period: "2020 - Present",
    icon: "👨‍🏫"
  },
  {
    title: "Board Member",
    organization: "Local Non-Profit Organization",
    description: "Provided strategic guidance and oversight for programs serving [specific demographic], helping expand outreach by 35%.",
    period: "2019 - Present",
    icon: "🏢"
  },
  {
    title: "Mentor",
    organization: "Youth Empowerment Program",
    description: "Mentored 20+ young individuals, supporting their academic and professional development through regular coaching sessions.",
    period: "2018 - 2022",
    icon: "🤝"
  },
  {
    title: "Conference Organizer",
    organization: "Annual Academic Symposium",
    description: "Led a team of volunteers to organize an annual symposium that brings together researchers, practitioners, and community members.",
    period: "2017 - 2021",
    icon: "🎤"
  }
];

const Community: React.FC = () => {
  return (
    <Section id="community" title="Community Service" className="bg-white">
      <div className="grid md:grid-cols-2 gap-6">
        {communityServices.map((service, index) => (
          <Card key={index} className="reveal border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{service.icon}</div>
                <div>
                  <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
                  <p className="text-gray-600 font-medium">{service.organization}</p>
                  <p className="text-sm text-gray-500">{service.period}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 reveal">
        <h3 className="text-xl font-semibold mb-4 text-navy text-center">Impact & Recognition</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "1000+", label: "Students Mentored" },
            { value: "15+", label: "Community Programs" },
            { value: "25+", label: "Volunteer Events" },
            { value: "5+", label: "Service Awards" }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-highlight-purple mb-2">{item.value}</div>
              <div className="text-gray-700">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Community;

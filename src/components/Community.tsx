
import React from 'react';
import Section from './Section';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CommunityService {
  title: string;
  organization: string;
  description: string[];
  period: string;
  location?: string;
}

const communityServices: CommunityService[] = [
  {
    title: "Intern",
    organization: "District Attorney's Office – 16th Circuit Court District",
    description: [
      "Attended court proceedings and observed judicial processes",
      "Assisted in screening minor cases and intake",
      "Built professional relationships with staff and court officials"
    ],
    period: "March 2025 – Present",
    location: "Columbus, MS (On-Site)"
  },
  {
    title: "Mock Trial President",
    organization: "Mississippi School for Mathematics and Science",
    description: [
      "Led 30+ students in trial simulations, legal training, and competition preparation",
      "Integrated technology to improve legal argumentation and courtroom performance"
    ],
    period: "2023 – Present"
  },
  {
    title: "President, MSMS Residence Hall Council",
    organization: "",
    description: [
      "Organized fundraisers and events to foster student community",
      "Led the executive board and coordinated with student government"
    ],
    period: "2023 – 2024"
  },
  {
    title: "Senator, MSMS Student Government Association",
    organization: "",
    description: [
      "Drafted legislation to improve campus life",
      "Appointed Sergeant-at-Arms by Senate peers for leadership and integrity"
    ],
    period: "2023 – 2024"
  },
  {
    title: "Member, Columbus Mayor's Youth Council",
    organization: "",
    description: [
      "Partnered with Mayor Keith Gaskin on civic initiatives and community outreach",
      "Represented student voices in city-wide policy discussions"
    ],
    period: "2023 – Present"
    location: "Columbus, MS (On-Site)"
  },
  {
    title: "Secretary-Treasurer, MSMS Young Democrats",
    organization: "",
    description: [
      "Spearheaded bipartisan civic engagement with debate watch parties, voter registration drives, and political forums"
    ],
    period: "2024 – Present"
  }
];

const impacts = [
  { icon: "👨‍🏫", value: "300+", label: "Students and peers mentored through leadership in IT, residence life, and Mock Trial" },
  { icon: "🏛", value: "10+", label: "Community and campus initiatives organized, including bipartisan voter drives and fundraisers" },
  { icon: "🎤", value: "15+", label: "Public speaking and civic representation engagements" },
  { icon: "📜", value: "3", label: "Elected leadership positions across multiple organizations" },
  { icon: "🎖", value: "2", label: "Recognized for service and leadership through school and city appointments" }
];

const Community: React.FC = () => {
  return (
    <Section id="community" title="Community Service & Experience" className="bg-white">
      <div className="grid md:grid-cols-2 gap-6">
        {communityServices.map((service, index) => (
          <Card key={index} className="reveal border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-2">
              <div>
                <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
                {service.organization && (
                  <p className="text-gray-600 font-medium">{service.organization}</p>
                )}
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span>{service.period}</span>
                  {service.location && (
                    <>
                      <span className="mx-2">|</span>
                      <span>{service.location}</span>
                    </>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {service.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Separator className="my-10" />
      
      <div className="mt-2 reveal">
        <h3 className="text-xl font-semibold mb-6 text-navy text-center">Impact & Recognition</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impacts.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg flex items-center">
              <div className="text-4xl mr-4">{item.icon}</div>
              <div>
                <div className="text-2xl font-bold text-highlight-purple">{item.value}</div>
                <div className="text-gray-700 text-sm">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Community;

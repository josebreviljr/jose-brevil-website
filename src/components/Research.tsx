
import React from 'react';
import Section from './Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ResearchProject {
  title: string;
  description: string;
  year: string;
  tags: string[];
  url?: string;
}

const researchProjects: ResearchProject[] = [
  {
    title: "Innovative Approaches to [Research Area]",
    description: "This research explored novel methodologies in [specific area], resulting in significant findings that challenge existing paradigms.",
    year: "2023",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    url: "#"
  },
  {
    title: "The Impact of [Factor] on [Outcome]",
    description: "A longitudinal study examining the relationship between [variables] and their collective influence on [outcomes] across diverse contexts.",
    year: "2022",
    tags: ["Tag 2", "Tag 4"],
    url: "#"
  },
  {
    title: "Developing Frameworks for [Application]",
    description: "This project focused on creating comprehensive frameworks that facilitate [specific applications] in both academic and professional settings.",
    year: "2021",
    tags: ["Tag 1", "Tag 5"],
    url: "#"
  },
  {
    title: "Comparative Analysis of [Systems]",
    description: "An in-depth comparative study of [various systems], highlighting key differences, advantages, and potential areas for integration.",
    year: "2020",
    tags: ["Tag 3", "Tag 6"],
    url: "#"
  }
];

const Research: React.FC = () => {
  return (
    <Section id="research" title="Research & Publications" className="bg-gray-50">
      <div className="grid md:grid-cols-2 gap-6">
        {researchProjects.map((project, index) => (
          <Card key={index} className="reveal border-t-4 border-t-navy hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <Badge variant="outline" className="bg-navy text-white">{project.year}</Badge>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-gray-200 text-navy-dark">
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center reveal">
        <p className="text-gray-700 mb-4">
          For a complete list of my publications and research contributions, please visit my academic profiles:
        </p>
        <div className="flex justify-center space-x-4">
          {[
            { name: "Google Scholar", url: "https://scholar.google.com" },
            { name: "ResearchGate", url: "https://www.researchgate.net" },
            { name: "ORCID", url: "https://orcid.org" }
          ].map((profile, index) => (
            <a 
              key={index}
              href={profile.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-navy rounded-md text-navy hover:bg-navy hover:text-white transition-colors"
            >
              {profile.name}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Research;

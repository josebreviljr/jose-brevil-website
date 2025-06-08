import React from 'react';
import Section from './Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import githubRepos from '@/data/github-repos.json';

interface GitHubRepo {
  github_id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stars: number;
  forks: number;
  language: string | null;
  last_updated: string;
}

const GitHub: React.FC = () => {
  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-300',
      TypeScript: 'bg-blue-400',
      Python: 'bg-green-500',
      Java: 'bg-red-500',
      HTML: 'bg-orange-500',
      CSS: 'bg-purple-500',
      'C#': 'bg-green-600',
      Ruby: 'bg-red-600',
      Go: 'bg-blue-300',
      Rust: 'bg-orange-600',
      PHP: 'bg-indigo-400',
      Swift: 'bg-orange-400',
      Kotlin: 'bg-purple-400',
      R: 'bg-blue-500',
    };
    
    return language ? colors[language] || 'bg-gray-400' : 'bg-gray-300';
  };

  return (
    <Section id="github" title="GitHub Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {githubRepos.map((repo: GitHubRepo) => (
          <Card key={repo.github_id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                {repo.name}
              </CardTitle>
              <CardDescription>{repo.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.language && (
                  <Badge variant="secondary" className={`${getLanguageColor(repo.language)} text-black`}>
                    {repo.language}
                  </Badge>
                )}
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {repo.stars}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <GitFork className="h-3 w-3" />
                  {repo.forks}
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default GitHub;

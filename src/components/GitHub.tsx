
import React, { useEffect, useState } from 'react';
import Section from './Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

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
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        
        // Try to get repos from Supabase cache first
        const { data: cachedRepos, error: cacheError } = await supabase
          .from('github_repositories')
          .select('*')
          .order('stars', { ascending: false })
          .limit(6);
        
        if (cachedRepos && cachedRepos.length > 0) {
          setRepos(cachedRepos as GitHubRepo[]);
          setLoading(false);
        }
        
        // Always fetch fresh data from the edge function
        const response = await supabase.functions.invoke('github-repos', {
          body: { username: 'josebrevil' },
        });
        
        if (response.error) {
          throw new Error(response.error.message);
        }
        
        if (response.data && response.data.repos) {
          setRepos(response.data.repos);
        }
        
      } catch (err) {
        console.error('Error fetching GitHub repositories:', err);
        setError('Failed to load GitHub repositories. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Section id="github" title="GitHub Projects" className="bg-gray-50">
      {error && (
        <div className="text-center text-red-500 mb-6">{error}</div>
      )}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          // Show skeletons while loading
          Array(6).fill(0).map((_, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5 mt-2" />
              </CardHeader>
              <CardContent className="flex-grow">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-6 w-full" />
              </CardFooter>
            </Card>
          ))
        ) : (
          repos.map((repo) => (
            <Card key={repo.github_id} className="reveal border-t-4 border-t-navy hover:shadow-md transition-shadow flex flex-col h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl truncate">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-navy flex items-center">
                      {repo.name}
                      <Github className="ml-2 h-4 w-4" />
                    </a>
                  </CardTitle>
                </div>
                {repo.description && (
                  <CardDescription className="line-clamp-2">{repo.description}</CardDescription>
                )}
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center">
                      <GitFork className="h-4 w-4 mr-1 text-gray-500" />
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                  <div>
                    {repo.last_updated && (
                      <span className="text-xs text-gray-500">
                        Updated: {formatDate(repo.last_updated)}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-wrap gap-2 pt-2 border-t">
                {repo.language && (
                  <Badge variant="secondary" className={`${getLanguageColor(repo.language)} text-white`}>
                    {repo.language}
                  </Badge>
                )}
                {repo.homepage && (
                  <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="ml-auto">
                    <Badge variant="outline" className="flex items-center gap-1 hover:bg-gray-100">
                      <ExternalLink className="h-3 w-3" /> Demo
                    </Badge>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))
        )}
      </div>
      
      <div className="mt-12 text-center reveal">
        <p className="text-gray-700 mb-4">
          For more of my work and contributions, visit my GitHub profile:
        </p>
        <a 
          href="https://github.com/josebrevil" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-navy rounded-md text-navy hover:bg-navy hover:text-white transition-colors"
        >
          <Github className="mr-2 h-5 w-5" />
          View GitHub Profile
        </a>
      </div>
    </Section>
  );
};

export default GitHub;

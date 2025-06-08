import { writeFileSync } from 'fs';
import { join } from 'path';

async function fetchGitHubRepos() {
  try {
    const response = await fetch('https://api.github.com/users/josebreviljr/repos?sort=updated&per_page=100');
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repos = await response.json();
    
    // Process and filter repos
    const processedRepos = repos
      .filter((repo: any) => !repo.fork && !repo.private)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .map((repo: any) => ({
        github_id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        last_updated: repo.updated_at,
      }));

    // Save to a JSON file
    const outputPath = join(process.cwd(), 'src', 'data', 'github-repos.json');
    writeFileSync(outputPath, JSON.stringify(processedRepos, null, 2));
    console.log('GitHub data saved successfully!');
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    process.exit(1);
  }
}

fetchGitHubRepos(); 
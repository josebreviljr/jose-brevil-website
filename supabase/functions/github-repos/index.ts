
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') as string;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') as string;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get username from request - default to 'josebrevil' if not provided
    const { username = 'josebrevil' } = await req.json().catch(() => ({ username: 'josebrevil' }));
    
    console.log(`Fetching GitHub repos for user: ${username}`);

    // Check cache first
    const { data: cachedRepos, error: cacheError } = await supabase
      .from('github_repositories')
      .select('*')
      .order('stars', { ascending: false })
      .limit(6);
    
    // If we have cached repos and they're less than 1 hour old, return them
    const cacheTime = 60 * 60 * 1000; // 1 hour in milliseconds
    if (cachedRepos && cachedRepos.length > 0) {
      const latestCachedRepo = cachedRepos[0];
      const cachedAt = new Date(latestCachedRepo.cached_at).getTime();
      const now = new Date().getTime();
      
      if (now - cachedAt < cacheTime) {
        console.log('Returning cached GitHub repos');
        return new Response(JSON.stringify({ repos: cachedRepos }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    // Fetch fresh data from GitHub API
    console.log('Fetching fresh GitHub repos');
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    
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
        cached_at: new Date().toISOString()
      }));
    
    // Update the cache in the background
    if (processedRepos.length > 0) {
      const updatePromises = processedRepos.map(async (repo: any) => {
        const { error } = await supabase
          .from('github_repositories')
          .upsert(repo, { onConflict: 'github_id' });
          
        if (error) {
          console.error('Error updating cache:', error);
        }
      });
      
      Promise.all(updatePromises).catch(err => {
        console.error('Error updating GitHub cache:', err);
      });
    }
    
    return new Response(JSON.stringify({ repos: processedRepos }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in GitHub repos function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

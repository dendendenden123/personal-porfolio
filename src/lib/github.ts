export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
};

export async function fetchRepos(username: string): Promise<GithubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=12&sort=updated`,
  );
  if (!res.ok) throw new Error("Failed to fetch repos");
  const data = (await res.json()) as GithubRepo[];
  return data.filter((r) => !r.fork);
}

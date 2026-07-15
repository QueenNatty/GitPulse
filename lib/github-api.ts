import type { GitHubRepo, GitHubUser } from '@/types/github';

const GITHUB_API_URL = process.env.GITHUB_API_URL ?? 'https://api.github.com';
const REPOS_PER_PAGE = 100;
const MAX_REPO_PAGES = 5; // caps at 500 repos — generous for a portfolio dashboard

export class GitHubApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'GitHubApiError';
    this.status = status;
  }
}

function githubHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };

  // Optional: without a token GitHub allows 60 req/hour per IP.
  // With one (no scopes needed for public data) that jumps to 5,000/hour.
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

function handleErrorStatus(status: number, username: string): never {
  if (status === 404) {
    throw new GitHubApiError(`GitHub user "${username}" was not found`, 404);
  }
  if (status === 403) {
    throw new GitHubApiError(
      'GitHub API rate limit exceeded. Try again in a few minutes.',
      403
    );
  }
  throw new GitHubApiError('Something went wrong talking to GitHub', status);
}

export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const res = await fetch(`${GITHUB_API_URL}/users/${encodeURIComponent(username)}`, {
    headers: githubHeaders(),
    next: { revalidate: 300 }, // 5 min server-side cache
  });

  if (!res.ok) handleErrorStatus(res.status, username);

  return res.json();
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const repos: GitHubRepo[] = [];

  for (let page = 1; page <= MAX_REPO_PAGES; page += 1) {
    const res = await fetch(
      `${GITHUB_API_URL}/users/${encodeURIComponent(username)}/repos` +
        `?per_page=${REPOS_PER_PAGE}&page=${page}&sort=updated`,
      {
        headers: githubHeaders(),
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) handleErrorStatus(res.status, username);

    const batch: GitHubRepo[] = await res.json();
    repos.push(...batch);

    if (batch.length < REPOS_PER_PAGE) break; // last page reached
  }

  return repos;
}

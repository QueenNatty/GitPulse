import axios from 'axios';
import type { GitHubRepo, GitHubUser } from '@/types/github';

// Talks to our own /api/github/* route handlers — never GitHub directly.
// That's what keeps GITHUB_TOKEN server-side only.
const api = axios.create({ baseURL: '/api/github' });

export async function getGitHubUser(username: string): Promise<GitHubUser> {
  const { data } = await api.get<GitHubUser>(`/user/${encodeURIComponent(username)}`);
  return data;
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const { data } = await api.get<GitHubRepo[]>(`/repos/${encodeURIComponent(username)}`);
  return data;
}

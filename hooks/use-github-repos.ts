'use client';

import { useQuery } from '@tanstack/react-query';
import { getGitHubRepos } from '@/services/github-service';
import { getApiErrorStatus } from '@/utils/errors';

export function useGitHubRepos(username: string) {
  return useQuery({
    queryKey: ['github-repos', username],
    queryFn: () => getGitHubRepos(username),
    enabled: Boolean(username),
    staleTime: 5 * 60 * 1000,
    retry: (failureCount, error) => {
      if (getApiErrorStatus(error) === 404) return false;
      return failureCount < 2;
    },
  });
}

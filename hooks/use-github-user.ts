'use client';

import { useQuery } from '@tanstack/react-query';
import { getGitHubUser } from '@/services/github-service';
import { getApiErrorStatus } from '@/utils/errors';

export function useGitHubUser(username: string) {
  return useQuery({
    queryKey: ['github-user', username],
    queryFn: () => getGitHubUser(username),
    enabled: Boolean(username),
    staleTime: 5 * 60 * 1000,
    retry: (failureCount, error) => {
      // A 404 means the username doesn't exist — retrying won't help.
      if (getApiErrorStatus(error) === 404) return false;
      return failureCount < 2;
    },
  });
}

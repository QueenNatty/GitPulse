'use client';

import { useGitHubUser } from '@/hooks/use-github-user';
import { useGitHubRepos } from '@/hooks/use-github-repos';
import { getApiErrorMessage } from '@/utils/errors';
import { ProfileHeader } from './components/profile-header';
import { ProfileHeaderSkeleton } from './components/profile-header-skeleton';
import { ProfileError } from './components/profile-error';
import { RepoList } from './components/repo-list';
import { RepoListSkeleton } from './components/repo-list-skeleton';

export function ProfileDashboard({ username }: { username: string }) {
  const userQuery = useGitHubUser(username);
  const reposQuery = useGitHubRepos(username);

  if (userQuery.isPending) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-12">
        <ProfileHeaderSkeleton />
      </div>
    );
  }

  if (userQuery.isError) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-12">
        <ProfileError
          message={getApiErrorMessage(userQuery.error, `Couldn't load @${username}`)}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
      <ProfileHeader user={userQuery.data} />

      <section>
        <h2 className="font-display text-lg font-semibold tracking-tight">
          Repositories
        </h2>

        {reposQuery.isPending && <RepoListSkeleton />}

        {reposQuery.isError && (
          <ProfileError
            message={getApiErrorMessage(reposQuery.error, 'Could not load repositories')}
          />
        )}

        {reposQuery.data && <RepoList repos={reposQuery.data} />}
      </section>
    </div>
  );
}

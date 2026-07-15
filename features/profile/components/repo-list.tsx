import Link from 'next/link';
import { GitFork, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { GitHubRepo } from '@/types/github';
import { formatCompactNumber, formatRelativeTime } from '@/utils/format';

export function RepoList({ repos }: { repos: GitHubRepo[] }) {
  if (repos.length === 0) {
    return <p className="mt-4 text-sm text-muted">No public repositories yet.</p>;
  }

  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {repos.map((repo) => (
        <Card key={repo.id} className="transition-colors hover:border-pulse/40">
          <CardContent className="flex flex-col gap-2 p-4">
            <Link
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground hover:text-pulse"
            >
              {repo.name}
            </Link>

            {repo.description && (
              <p className="line-clamp-2 text-sm text-muted">{repo.description}</p>
            )}

            <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
              {repo.language && <span>{repo.language}</span>}
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3" aria-hidden />
                {formatCompactNumber(repo.stargazers_count)}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="h-3 w-3" aria-hidden />
                {formatCompactNumber(repo.forks_count)}
              </span>
              <span>Updated {formatRelativeTime(repo.updated_at)}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

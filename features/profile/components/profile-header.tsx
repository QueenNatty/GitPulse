import Image from 'next/image';
import Link from 'next/link';
import { Building2, CalendarClock, Link as LinkIcon, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { GitHubUser } from '@/types/github';
import { formatCompactNumber, formatRelativeTime, getAccountAge } from '@/utils/format';

export function ProfileHeader({ user }: { user: GitHubUser }) {
  const stats = [
    { label: 'Followers', value: user.followers },
    { label: 'Following', value: user.following },
    { label: 'Repositories', value: user.public_repos },
    { label: 'Gists', value: user.public_gists },
  ];

  const websiteHref = user.blog
    ? user.blog.startsWith('http')
      ? user.blog
      : `https://${user.blog}`
    : null;

  return (
    <Card>
      <CardContent className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <Image
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          width={96}
          height={96}
          className="h-24 w-24 shrink-0 rounded-2xl border border-border"
          priority
        />

        <div className="flex flex-1 flex-col gap-3">
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-tight">
              {user.name ?? user.login}
            </h1>
            <Link
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted hover:text-pulse"
            >
              @{user.login}
            </Link>
          </div>

          {user.bio && <p className="max-w-xl text-sm text-foreground">{user.bio}</p>}

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
            {user.company && (
              <span className="flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" aria-hidden />
                {user.company}
              </span>
            )}
            {user.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {user.location}
              </span>
            )}
            {websiteHref && (
              <Link
                href={websiteHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-pulse"
              >
                <LinkIcon className="h-3.5 w-3.5" aria-hidden />
                {user.blog}
              </Link>
            )}
            <span className="flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              On GitHub for {getAccountAge(user.created_at)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-surface-raised px-3 py-2">
                <p className="stat-figure text-lg font-semibold">
                  {formatCompactNumber(stat.value)}
                </p>
                <p className="text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted">
            Last active {formatRelativeTime(user.updated_at)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

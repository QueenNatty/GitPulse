interface UserDashboardPageProps {
  params: { username: string };
}

/**
 * Placeholder for the profile dashboard. Routing is wired up now;
 * GitHub API data, charts, and health score land in Phase 3 and 4.
 */
export default function UserDashboardPage({ params }: UserDashboardPageProps) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">Dashboard</p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">
        @{params.username}
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted">
        This route is live — profile data, repository analytics, and charts
        for this user arrive in the next phases.
      </p>
    </main>
  );
}

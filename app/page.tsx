import { SearchForm } from '@/features/search/search-form';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center gap-8 px-6 text-center">
      <div className="flex flex-col items-center gap-3">
        <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
          <span className="h-1.5 w-1.5 animate-pulse-line rounded-full bg-pulse" />
          GitHub analytics, instantly
        </span>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Git<span className="text-pulse">Pulse</span>
        </h1>
        <p className="max-w-md text-sm text-muted">
          Search any GitHub username to see stars, streaks, languages, and a
          repository health score — all in one dashboard.
        </p>
      </div>

      <SearchForm />
    </main>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col items-center justify-center gap-4 px-6 text-center">
      <span className="font-mono text-sm text-muted">404</span>
      <h1 className="font-display text-2xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="text-sm text-muted">
        That page doesn&apos;t exist. Try searching for a GitHub profile instead.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex h-10 items-center justify-center rounded-xl border border-border bg-surface-raised px-4 text-sm font-medium transition-colors hover:border-pulse/40"
      >
        Back to search
      </Link>
    </main>
  );
}

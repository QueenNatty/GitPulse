import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

/**
 * Phase 1 placeholder. The real search page lands in Phase 2 —
 * this just proves the layout, theme, and base UI components render.
 */
export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-8 px-6 py-24">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
          <span className="h-1.5 w-1.5 animate-pulse-line rounded-full bg-pulse" />
          Phase 1 scaffold
        </span>
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Git<span className="text-pulse">Pulse</span>
        </h1>
        <p className="max-w-md text-sm text-muted">
          Layout, theming, and base components are wired up. The search
          experience arrives in Phase 2.
        </p>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Repository health</CardTitle>
          <CardDescription>Preview of a base UI component</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <div className="flex gap-2 pt-2">
            <Button size="sm">Primary</Button>
            <Button size="sm" variant="secondary">
              Secondary
            </Button>
            <Button size="sm" variant="outline">
              Outline
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

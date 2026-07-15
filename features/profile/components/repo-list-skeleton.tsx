import { Skeleton } from '@/components/ui/skeleton';

export function RepoListSkeleton() {
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} className="h-24 w-full" />
      ))}
    </div>
  );
}

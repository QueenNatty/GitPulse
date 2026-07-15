import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function ProfileHeaderSkeleton() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <Skeleton className="h-24 w-24 shrink-0 rounded-2xl" />
        <div className="flex flex-1 flex-col gap-3">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-64" />
          <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-14 w-full" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import { cn } from '@/lib/utils';

/**
 * Base skeleton block. Uses a subtle pulse rather than a shimmer sweep —
 * cheaper to render and matches the GitPulse "pulse" motif.
 */
export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse-line rounded-xl bg-surface-raised', className)}
      {...props}
    />
  );
}

import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export function ProfileError({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-6 py-12 text-center">
      <AlertTriangle className="h-8 w-8 text-danger" aria-hidden />
      <p className="text-sm text-foreground">{message}</p>
      <Link href="/" className="text-sm text-pulse hover:underline">
        Back to search
      </Link>
    </div>
  );
}

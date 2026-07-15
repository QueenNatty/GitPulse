'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { searchSchema, type SearchFormValues } from './schema';

export function SearchForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = (values: SearchFormValues) => {
    router.push(ROUTES.user(values.username));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md" noValidate>
      <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 shadow-soft transition-colors focus-within:border-pulse/60">
        <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden />
        <input
          {...register('username')}
          type="text"
          placeholder="Enter a GitHub username…"
          aria-label="GitHub username"
          aria-invalid={!!errors.username}
          aria-describedby={errors.username ? 'username-error' : undefined}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
        />
      </div>

      {errors.username && (
        <p id="username-error" role="alert" className="mt-2 text-xs text-danger">
          {errors.username.message}
        </p>
      )}

      <Button type="submit" size="lg" className="mt-3 w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Searching…' : 'Analyze profile'}
      </Button>
    </form>
  );
}

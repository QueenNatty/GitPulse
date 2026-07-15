'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Toggles between light and dark. Waits for mount before reading the
 * resolved theme to avoid a hydration mismatch (server doesn't know the
 * user's system/stored preference yet).
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-10 w-10" aria-hidden />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      type="button"
      variant="ghost"
      size="md"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="h-10 w-10 p-0"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}

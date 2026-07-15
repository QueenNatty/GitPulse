export const ROUTES = {
  home: '/',
  compare: '/compare',
  user: (username: string) => `/u/${encodeURIComponent(username)}`,
} as const;

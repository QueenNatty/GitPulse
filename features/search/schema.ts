import { z } from 'zod';

// Mirrors GitHub's actual username rules: alphanumeric and single hyphens,
// no leading/trailing hyphen, 39 characters max.
export const searchSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, 'Enter a GitHub username')
    .max(39, 'GitHub usernames are 39 characters or fewer')
    .regex(
      /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/,
      'Only letters, numbers, and single hyphens — no leading or trailing hyphen'
    ),
});

export type SearchFormValues = z.infer<typeof searchSchema>;

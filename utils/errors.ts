import axios from 'axios';
import type { GitHubApiErrorBody } from '@/types/github';

export function getApiErrorMessage(error: unknown, fallback = 'Something went wrong'): string {
  if (axios.isAxiosError(error)) {
    const body = error.response?.data as GitHubApiErrorBody | undefined;
    return body?.message ?? fallback;
  }
  if (error instanceof Error) return error.message;
  return fallback;
}

export function getApiErrorStatus(error: unknown): number | undefined {
  if (axios.isAxiosError(error)) return error.response?.status;
  return undefined;
}

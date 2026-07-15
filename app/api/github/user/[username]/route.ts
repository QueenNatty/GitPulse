import { NextResponse } from 'next/server';
import { fetchGitHubUser, GitHubApiError } from '@/lib/github-api';

export async function GET(
  _request: Request,
  { params }: { params: { username: string } }
) {
  try {
    const user = await fetchGitHubUser(params.username);
    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof GitHubApiError) {
      return NextResponse.json({ message: error.message }, { status: error.status });
    }
    return NextResponse.json({ message: 'Unexpected server error' }, { status: 500 });
  }
}

import type { Metadata } from 'next';
import { ProfileDashboard } from '@/features/profile/profile-dashboard';

interface UserDashboardPageProps {
  params: { username: string };
}

export function generateMetadata({ params }: UserDashboardPageProps): Metadata {
  return {
    title: `@${params.username} — GitPulse`,
  };
}

export default function UserDashboardPage({ params }: UserDashboardPageProps) {
  return <ProfileDashboard username={params.username} />;
}

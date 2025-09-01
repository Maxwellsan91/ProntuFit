import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MVP Fitness Saúde',
  description: 'Acompanhamento de treinos e avaliações',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="min-h-screen bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}

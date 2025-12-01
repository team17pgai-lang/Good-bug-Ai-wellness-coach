import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-family',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Good Bug | AI Wellness Companion',
  description:
    'Premium gut health companion blending AI and behavioral science for modern Indian lifestyles.',
  applicationName: 'The Good Bug',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-cream text-primary`}>
        {children}
      </body>
    </html>
  );
}


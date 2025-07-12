import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: {
    default: 'Gastronomic Hub - Your Culinary Companion',
    template: '%s | Gastronomic Hub',
  },
  description: 'A comprehensive food recipe website for enthusiasts and home cooks, featuring recipes, cooking techniques, ingredient guides, and an AI recipe generator.',
  keywords: ['recipes', 'cooking', 'food', 'culinary', 'chef', 'ingredients', 'food blog'],
  verification: {
    // Add your Bing verification code here
    other: {
      'msvalidate.01': '055814B1CCB75DB7C73513A1F8D13B18',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

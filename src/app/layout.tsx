import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Header from '@/components/header/Header';
import { Toaster } from 'react-hot-toast';
import ContextsProvider from '@/components/shared/ContextsProvider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Goodspeed blog',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme accentColor="violet" appearance="dark">
          <ContextsProvider>
            <Toaster />
            <Header />
            <main className="container mx-auto p-4">{children}</main>
          </ContextsProvider>
        </Theme>
      </body>
    </html>
  );
}

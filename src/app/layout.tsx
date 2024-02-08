import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AMS - Control Center',
  description: 'Control Center for Attendees Monitoring System',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <header className="p-2 my-2 border-b">
      <h2 className="text-center text-xl">AMS - Control Center</h2>
    </header>
    {children}
    </body>
    </html>
  );
}

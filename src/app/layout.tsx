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
    <body className={`flex flex-col h-[100vh] ${inter.className}`}>
    <header className="p-2 my-2 border-b">
      <h2 className="text-center text-2xl">AMS - Control Center</h2>
    </header>
    <main className="grow">
      {children}
    </main>
    <footer className="p-2 my-2 border-t flex justify-between text-sm">
      <p>Copyright MIT</p>
      <p>UAE 2024</p>
    </footer>
    </body>
    </html>
  );
}

import './globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'kate code',
  description: 'A portfolio and blog website built with Next.js.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
        <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[#f4f0e4] flex flex-col">
        {/* Locomotive Scroll Container */}
        <div data-scroll-container>
          {/* Header */}
          <Header />
          {/* Main Content */}
          <main className="flex-grow">{children}</main>
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
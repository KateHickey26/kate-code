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
      <body className="min-h-screen bg-gray-100 flex flex-col">
        {/* Locomotive Scroll Container */}
        <div data-scroll-container>
          {/* Header */}
          <Header />
          {/* Main Content */}
          <main className="container mx-auto flex-grow p-4">{children}</main>
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
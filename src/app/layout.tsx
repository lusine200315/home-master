import { ReactNode } from 'react';
import "../styles/globals.scss";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'HomeMaster',
  description: 'Your home comfort is our job',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Header appears on all pages */}
        <Header />

        {/* Page content */}
        <main>{children}</main>

        {/* Footer appears on all pages */}
        <Footer />
      </body>
    </html>
  );
}
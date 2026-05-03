import { ReactNode } from 'react';
import "../../styles/globals.scss";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Lang } from '@/lib/getTranslations';

export const metadata = {
  title: 'HomeMaster',
  description: 'Your home comfort is our job',
};

type Props = {
  children: ReactNode;
  params: {
    lang: Lang;
  };
};

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.lang}>
      <body className="antialiased">
        <Header />

        <main>{children}</main>

        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
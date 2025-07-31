import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import ResponsiveNav from '@/components/Home/NavBar/ResponsiveNav';
import Provider from '@/components/Hoc/Provider';
import Footer from '@/components/Home/Footer/Footer';

const font = Roboto({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Job portal | Landing Page',
  description: 'Job portal landing page using with Next.js'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Provider>
          <ResponsiveNav />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

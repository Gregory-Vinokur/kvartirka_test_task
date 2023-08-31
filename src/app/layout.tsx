import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Passion_One } from 'next/font/google';
import MainLayout from '@/layouts/MainLayout/MainLayout';

const helvetica = localFont({
  src: [
    {
      path: '../assets/fonts/Helvetica.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Helvetica-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-primary',
});

const passionOne = Passion_One({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-secondary',
});

export const metadata: Metadata = {
  title: 'Kvartirka test app',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable} ${passionOne.variable}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

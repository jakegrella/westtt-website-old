import type { Metadata } from 'next';
import './globals.css';
import { ReactLenis } from './libs/lenis';

export const metadata: Metadata = {
  title: 'Westtt',
  description: 'Westtt is a Los Angeles-based web design, development and branding studio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ReactLenis root>
        <body className='overflow-x-hidden'>{children}</body>
      </ReactLenis>
    </html>
  );
}

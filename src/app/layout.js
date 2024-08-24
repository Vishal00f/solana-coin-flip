// app/layout.js
import './globals.css';
import '../styles/coinflip.css';  // Add this line
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Solana Coin Flip Game',
  description: 'A visually appealing coin flip game using Solana blockchain',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
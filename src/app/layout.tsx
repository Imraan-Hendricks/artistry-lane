import './globals.css';
import { PropsWithChildren } from 'react';

export const metadata = {
  authors: { name: 'Imraan-Hendricks', url: 'https://www.imraanhendricks.com' },
  title: 'Artistry Lane',
  description: `Artistry Lane is the perfect online hub for discovering and purchasing captivating artwork from some of the world's most creative and talented artists!`,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

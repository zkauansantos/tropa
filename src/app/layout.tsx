import { AuthProvider } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Tropa Digital - Teste',
  description: 'Teste de Frontend para a Tropa Digital',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body
        suppressHydrationWarning
        className={cn(
          roboto.variable,
          'antialiased !font-roboto overflow-x-hidden'
        )}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

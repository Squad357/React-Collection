import Header from '@/components/layout/Header';
import SideNavbar from '@/components/layout/SideNavbar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const montserrat = Montserrat({
  preload: false,
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'React Collection',
  description: 'react component collection',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={montserrat.className}>
        <Providers>
          <Header />
          <main className='flex h-full w-full pt-[74px]'>
            <SideNavbar />
            <section className='w-full h-full px-10 overflow-auto relative'>
              <SidebarTrigger className='absolute top-0 left-0 boxshadow' />
              {children}
            </section>
          </main>
        </Providers>
      </body>
    </html>
  );
}

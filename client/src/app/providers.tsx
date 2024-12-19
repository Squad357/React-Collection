'use client';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { SidebarProvider } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isDefaultOpen, setIsDefaultOpen] = useState(pathname === '/');

  useEffect(() => {
    if (pathname === '/') {
      setIsDefaultOpen(true);
    } else {
      setIsDefaultOpen(false);
    }
  }, [pathname]);

  return (
    <SidebarProvider open={isDefaultOpen}>
      <Provider store={store}>{children}</Provider>
    </SidebarProvider>
  );
}

'use client';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { SidebarProvider } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDefaultOpen = pathname === '/';
  return (
    <SidebarProvider defaultCollapsed={!isDefaultOpen}>
      <Provider store={store}>{children}</Provider>
    </SidebarProvider>
  );
}

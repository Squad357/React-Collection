'use client';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { SidebarProvider } from '@/components/ui/sidebar';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Provider store={store}>{children}</Provider>
    </SidebarProvider>
  );
}

import SidenNavbar from '@/components/layout/SideNavbar';
import { Card, CardContent } from '@/components/ui/card';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function HomePage() {
  return (
    <main className='flex h-full w-full pt-14'>
      <SidenNavbar />
      {/* 메인 내용*/}
      <div className='flex justfiy-center items-center w-full h-full p-10 overflow-auto relative'>
        <SidebarTrigger className='absolute top-0 left-0' />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full'>
          {Array.from({ length: 9 }).map((_, i) => (
            <Card key={i} className='w-full h-full overflow-hidden'>
              <div className='aspect-video bg-muted' />
              <CardContent className='p-4'>
                <p className='text-sm text-muted-foreground'>Title</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

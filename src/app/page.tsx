import SidenNavbar from '@/components/layout/SideNavbar';
import { Card, CardContent } from '@/components/ui/card';
import { SidebarTrigger } from '@/components/ui/sidebar';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='flex h-full w-full pt-[74px]'>
      <SidenNavbar />
      {/* 메인 내용*/}
      <section className='w-full h-full px-10 py-5 overflow-auto relative'>
        <SidebarTrigger className='absolute top-0 left-0' />
        <h1 className='pt-7 pb-16 text-4xl'>Category</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full h-full'>
          {Array.from({ length: 9 }).map((_, i) => (
            <Link key={i} href={'/' + i}>
              <Card key={i} className='w-full h-full overflow-hidden'>
                <div className='w-full h-60 aspect-video bg-muted rounded-sm' />
                <CardContent className='py-4'>
                  <p className='text-lg text-muted-foreground'>Title</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

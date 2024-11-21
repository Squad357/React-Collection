import SidenNavbar from '@/components/layout/SideNavbar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { CategoryComponents } from '@/lib/categoryComponents';

type Params = Promise<{ id: number }>;

export default async function Post({ params }: { params: Params }) {
  const { id } = await params;
  const Component = CategoryComponents[id];

  return (
    <main className='flex h-full w-full pt-[74px]'>
      <SidenNavbar />
      <section className='px-10 py-5 w-full h-full p-5 overflow-auto relative'>
        <SidebarTrigger className='absolute top-0 left-0' />
        <h1 className='pt-7 pb-16 text-4xl'>Title</h1>
        <div className='flex justify-between h-[540px]'>
          <div className='w-[calc(50%-5px)] h-full bg-muted rounded-md'>
            <Component />
          </div>
          <div className='w-[calc(50%-5px)] h-full border border-muted p-6 rounded-md'>
            {/* <p className='text-border'>1</p> */}
          </div>
        </div>
      </section>
    </main>
  );
}

import SidenNavbar from '@/components/layout/SideNavbar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { CategoryComponents } from '@/lib/categoryComponents';
import Code from '@/components/Code';
import { CodeStrings } from '@/lib/codeStrings';
import { Data } from '@/data/data';
import Options from '@/components/Options';

type Params = Promise<{ id: string }>;

export default async function Post({ params }: { params: Params }) {
  const { id } = await params;
  const title = Data.find(item => item.id === id)?.title;
  const Component = CategoryComponents[id];
  const codeString = CodeStrings[id] || '';

  return (
    <main className='max-w-[1400px] mx-auto flex h-full w-full pt-[74px] relative'>
      <SidenNavbar />
      <section className='px-10 py-5 w-full h-full p-5 relative'>
        <SidebarTrigger className='absolute top-0 left-0' />
        <h1 className='pt-7 pb-16 text-4xl'>{title}</h1>
        <div className='flex justify-between h-[540px]'>
          <div className='w-[calc(50%-5px)] h-full bg-muted rounded-md'>
            <Component />
          </div>

          <div className='w-[calc(50%-5px)] h-full border border-muted rounded-md overflow-auto'>
            <Code
              codeString={codeString}
              language='tsx'
              theme='material-theme'
            />
          </div>
        </div>

        <div className='w-[calc(100%-10px)] mt-10'>
          <Options />
        </div>
      </section>
    </main>
  );
}

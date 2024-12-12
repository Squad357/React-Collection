import Main from '@/components/Main';
import { Data } from '@/data/data';

type Params = Promise<{ id: number }>;

export default async function Post({ params }: { params: Params }) {
  const { id } = await params;
  const title = Data.find(item => item.id == id)?.title;

  return (
    <main className='max-w-[1400px] mx-auto h-full w-full pt-4 relative'>
      <h1 className='pt-7 pb-16 text-4xl'>{title}</h1>
      <Main id={id} />
    </main>
  );
}

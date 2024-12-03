import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Data } from '@/data/data';

type Params = Promise<{ category: string }>;

export default async function HomePage({ params }: { params: Params }) {
  const { category } = await params;
  const categoryTitle = category[0].toUpperCase() + category.slice(1);
  const contentData = Data.filter(item => item.type === category);

  return (
    <main className='flex h-full w-full pt-4 flex-col'>
      <h1 className='pt-7 pb-16 text-4xl'>{categoryTitle}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full h-full'>
        {[...contentData].reverse().map((data, i) => (
          <Link key={i} href={`/${data.id}`}>
            <Card key={i} className='w-full h-full overflow-hidden'>
              <div className='w-full h-60 aspect-video bg-muted rounded-sm' />
              <CardContent className='py-4'>
                <p className='text-lg text-muted-foreground'>{data.title}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}

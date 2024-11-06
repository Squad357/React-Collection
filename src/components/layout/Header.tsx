import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 h-14 border-b bg-background z-50 flex items-center justify-center py-9'>
      <div className='flex justify-between px-[5px] w-full max-w-[1400px]'>
        <Link href='/'>
          <h1 className='text-3xl'>React Collection</h1>
        </Link>
        <div className='flex items-center gap-4'>
          <Link href='#'>Button</Link>
          <Link href='#'>Button</Link>
          <Link href='#'>Button</Link>
        </div>
      </div>
    </header>
  );
}

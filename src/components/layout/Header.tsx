import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 h-14 border-b bg-background z-50 flex items-center justify-center'>
      <div className='flex justify-between px-[5px] w-full max-w-[1400px]'>
        <div className='flex items-center gap-2'>
          <h1 className='text-xl font-semibold'>React Collection</h1>
        </div>
        <div className='flex gap-2'>
          <Link href='#'>Button</Link>
          <Link href='#'>Button</Link>
          <Link href='#'>Button</Link>
        </div>
      </div>
    </header>
  );
}

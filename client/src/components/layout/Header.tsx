import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 h-14 border-b bg-background z-50 flex items-center justify-center py-9'>
      <div className='flex justify-between px-[5px] w-full max-w-[1400px]'>
        <div>
          <Link href='/'>
            <Image
              src='/logo/main-logo.svg'
              alt='홈페이지 로고'
              width={62}
              height={62}
              quality={100}
              priority
            />
          </Link>
        </div>
        <div className='flex items-center gap-4'>
          <Link href='#'>Button</Link>
          <Link href='/login'>로그인</Link>
          <Link href='/signup'>회원가입</Link>
        </div>
      </div>
    </header>
  );
}

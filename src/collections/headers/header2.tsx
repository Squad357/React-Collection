'use client';

import Link from 'next/link';
import { optionList } from './option';
import { useOptionList } from '@/hooks/useOptionList';
import { useEffect, useState } from 'react';

export default function Header2() {
  const [animate, setAnimate] = useState(false);
  const {
    optionList: { linkButton },
    isLoading,
  } = useOptionList(optionList);

  useEffect(() => {
    setAnimate(true);

    // 애니메이션 종료 후 상태 초기화
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 1000); // 애니메이션 지속 시간과 동일하게 설정

    return () => clearTimeout(timer);
  }, [linkButton?.defaultCount]);

  if (isLoading) {
    return (
      <header className='flex justify-between items-center border-2 border-black'>
        <div>
          <h1 className='text-2xl font-bold p-2'>Logo</h1>
        </div>
        <nav className='flex gap-2'>
          {/* 로딩 스켈레톤 UI */}
          {[1, 2, 3].map(item => (
            <div
              key={item}
              className='animate-pulse bg-gray-200 rounded-md m-2 p-2 w-20 h-10'
            />
          ))}
        </nav>
      </header>
    );
  }

  return (
    <header className='flex justify-between items-center border-2 border-black'>
      <div>
        <h1 className='text-2xl font-bold p-2'>Logo</h1>
      </div>
      <nav className='flex gap-2'>
        {linkButton?.items.slice(0, linkButton.defaultCount).map(item => (
          <Link
            key={item.id}
            href={item.link}
            className={`hover:scale-105 hover:bg-gray-300 rounded-md m-2 p-2 active:scale-95
              ${animate ? 'animate-highlight' : ''}`}>
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export const CodeString = `<header className='flex justify-between items-center border-2 border-black'>
	<div>
		<h1 className='text-2xl font-bold p-2'>Logo</h1>
	</div>
	<nav className='flex gap-2'>
		{linkButton?.filter(item => item.isOpen).map(item => (
		<Link
			key={item.id}
			href={item.link}
			className='hover:scale-105 hover:bg-gray-300 rounded-md m-2 p-2 active:scale-95'>
			{item.name}
		</Link>
		))}
	</nav>
</header>
`;

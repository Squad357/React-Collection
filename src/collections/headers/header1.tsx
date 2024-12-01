'use client';

import Link from 'next/link';
import { optionList } from './option';
import { useOptionList } from '@/hooks/useOptionList';
import { useAnimation } from '@/hooks/useAnimation';

export default function Header1() {
  const {
    optionList: { linkButton },
    isLoading,
  } = useOptionList(optionList);
  const animate = useAnimation(linkButton?.defaultCount);

  if (isLoading) {
    return (
      <header className='flex justify-between items-center border-2 border-black'>
        <div>
          <h1 className='text-2xl font-bold p-2'>Logo</h1>
        </div>
        <nav className='flex gap-2'>
          {[1, 2, 3].map(item => (
            <div
              key={item}
              className='animate-pulse bg-gray-200 rounded-md m-2 p-2 w-24 h-8'
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

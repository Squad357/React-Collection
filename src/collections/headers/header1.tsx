'use client';

import { useAnimation } from '@/hooks/useAnimation';
import { useOptionList } from '@/hooks/useOptionList';
import { Item } from '@/types/optionList';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { headerOptionList } from './option';

export default function Header1() {
  const { optionList, isLoading } = useOptionList(headerOptionList);
  const buttonAnimate = useAnimation(optionList[0]?.default);
  const gapAnimate = useAnimation(optionList[1]?.default);

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
    <header className='flex justify-between w-full items-center border-2 border-black'>
      <div>
        <h1 className='text-2xl font-bold p-2'>Logo</h1>
      </div>
      <motion.nav
        layoutId='nav'
        animate={{
          scale: gapAnimate ? 1.15 : 1,
        }}
        className={`flex m-2 ${optionList[1]?.default}
          ${gapAnimate ? 'bg-red-200' : 'bg-slate-200'} rounded-lg`}>
        {optionList[0]?.items
          .slice(0, optionList[0]?.default as number)
          .map((item: Item) => (
            <Link key={item.id} href='#'>
              <motion.div
                layoutId={`item-${item.id}`}
                className={`hover:scale-105 hover:bg-gray-300 rounded-md m-2 p-2 active:scale-95
								${buttonAnimate ? 'animate-highlight' : ''}
								`}
                transition={{
                  type: 'spring',
                  stiffness: 1000,
                  damping: 100,
                }}>
                {item.extra && item.extra.tag}
              </motion.div>
            </Link>
          ))}
      </motion.nav>
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

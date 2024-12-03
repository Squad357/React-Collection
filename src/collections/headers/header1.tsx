'use client';

import { useAnimation } from '@/hooks/useAnimation';
import { useOptionList } from '@/hooks/useOptionList';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { optionList } from './option';

export default function Header1() {
  const {
    optionList: { linkButton, linkButtonGap },
    isLoading,
  } = useOptionList(optionList);
  const buttonAnimate = useAnimation(linkButton?.default);
  const gapAnimate = useAnimation(linkButtonGap?.default);

  console.log(linkButtonGap);

  console.log(linkButtonGap?.default);
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
      <motion.nav
        layout
        className={`flex m-2 ${
          gapAnimate ? 'bg-red-200' : 'bg-slate-200'
        } gap-${linkButtonGap?.default}`}>
        {linkButton?.items.slice(0, linkButton.default).map((item, index) => (
          <Link key={item.id} href={item.link}>
            <motion.div
              className={`hover:scale-105 hover:bg-gray-300 rounded-md m-2 p-2 active:scale-95
								${buttonAnimate ? 'animate-highlight' : ''}
								`}
              transition={{
                type: 'spring',
                stiffness: 1000,
                damping: 50,
              }}>
              {item.name}
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

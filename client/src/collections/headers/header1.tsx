'use client';

import { PreviewProps } from '@/types/props/previewProps';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header1({ optionList, animate }: PreviewProps) {
  const buttonCount = Number(optionList['버튼 갯수']?.default) || 0;

  return (
    <header className='flex justify-between w-full items-center border-2 border-black'>
      <div>
        <h1 className='text-2xl font-bold p-2'>Logo</h1>
      </div>
      <motion.nav
        layoutId='nav'
        className={`flex m-2 ${optionList['버튼 간격']?.default}
          ${animate['버튼 간격'] ? 'bg-gray-200' : 'bg-slate-200'} rounded-lg`}>
        {optionList['버튼 갯수']?.items.slice(0, buttonCount).map(item => (
          <Link
            key={item.id}
            href='#'
            className='hover:scale-105 active:scale-95'>
            <motion.div
              layoutId={`item-${item.id}`}
              className={`${optionList['버튼 색상']?.default} ${
                optionList['버튼 크기']?.default
              } hover:bg-gray-300 rounded-md m-2 p-2 
                ${
                  animate['버튼 갯수'] ||
                  animate['버튼 간격'] ||
                  animate['버튼 크기']
                    ? 'animate-highlight'
                    : ''
                }
                `}
              transition={{
                type: 'spring',
                stiffness: 1000,
                damping: 100,
              }}>
              {item.extra?.tag}
            </motion.div>
          </Link>
        ))}
      </motion.nav>
    </header>
  );
}

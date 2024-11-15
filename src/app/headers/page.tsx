// Header.tsx
'use client';

import Code from '@/components/Code';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import headers from '../../../public/logo/http-logo.svg';

// 링크 리스트
const LinkButton = [
  { id: 1, name: '1번 버튼', link: '#', isOpen: true },
  { id: 2, name: '2번 버튼', link: '#', isOpen: true },
  { id: 3, name: '3번 버튼', link: '#', isOpen: true },
  { id: 4, name: '4번 버튼', link: '#', isOpen: false },
  { id: 5, name: '5번 버튼', link: '#', isOpen: false },
];

function Header() {
  const [gap, setGap] = useState<string>('gap-10');
  const [animate, setAnimate] = useState<boolean>(false);
  const [highlight, setHighlight] = useState<boolean>(false); // 강조 상태 추가

  const handleGapChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newGap = e.target.value;
    setAnimate(true); // 애니메이션 시작
    setGap(newGap);
    setHighlight(true); // 강조 효과 시작

    // 애니메이션 종료 후 상태 초기화
    setTimeout(() => {
      setAnimate(false);
      setHighlight(false); // 강조 효과 종료
    }, 300); // duration과 동일한 시간 설정
  };

  const codeString = `
	<div class="flex ${gap}">  ${LinkButton.filter(item => item.isOpen)
    .map(
      item => `
		<Link href="${item.link}" className="...">${item.name}</Link>  `,
    )
    .join('')}
	</div>
		`;

  return (
    <main className='border-4 border-black mt-20'>
      <h1 className='text-5xl p-10'>Header</h1>
      <div className='flex'>
        <div className='m-auto w-[654px] h-[504px] border-dashed border-red-500 border-8 relative'>
          <header className='absolute top-0 left-0 right-0 border-b-2 h-14 items-center m-auto flex p-2 justify-center w-full shadow-md border-4 border-black'>
            <div className='flex justify-between w-full items-center px-1 m-auto max-w-[800px]'>
              {/* 로고 이미지 */}
              <div>
                <Link href='#'>
                  <Image
                    src={headers}
                    alt='홈페이지 로고'
                    width={0}
                    height={0}
                    quality={100}
                    priority
                  />
                </Link>
              </div>
              {/* 링크 버튼 리스트 */}
              <div
                className={`flex ${gap} transition-all duration-300 ${
                  animate ? 'bg-orange-300 transform scale-105 opacity-75' : ''
                }`}>
                {LinkButton.filter(item => item.isOpen).map(item => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className='p-2 rounded transition-colors duration-300 hover:bg-gray-400 hover:scale-95'>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </header>
        </div>
        <div className='flex flex-col gap-10 p-5 border-red-400 border-4'>
          <Code
            codeString={codeString}
            language='tsx'
            theme='material-theme'
            highlight={highlight}
            gap={gap}
          />
        </div>
      </div>
      <Options>
        <HeaderOptional handleGapChange={handleGapChange} />
      </Options>
    </main>
  );
}

function HeaderOptional({
  handleGapChange,
}: {
  handleGapChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className='border-4 border-green-600 p-4 rounded-lg shadow-md w-2/12'>
      <label htmlFor='gap' className='block mb-2 text-lg font-semibold'>
        링크버튼 간격
      </label>
      <select
        id='gap'
        defaultValue='gap-10'
        onChange={handleGapChange}
        className='border rounded-md p-2 w-auto'>
        <option value='gap-2'>2</option>
        <option value='gap-4'>4</option>
        <option value='gap-6'>6</option>
        <option value='gap-8'>8</option>
        <option value='gap-10'>10</option>
      </select>
    </div>
  );
}

function Options({ children }: { children: React.ReactNode }) {
  return (
    <div className='p-4 bg-purple-300'>
      <h3 className='m-3 text-3xl'>Optional</h3>
      {children}
    </div>
  );
}

export default Header;

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import headers from '../../../public/logo/http-logo.svg';

// 링크 리스트
const LinkButton = [
  { id: 1, name: '1번 버튼', link: '#', isOpen: true },
  { id: 2, name: '2번 버튼', link: '#', isOpen: true },
  { id: 3, name: '3번 버튼', link: '#', isOpen: true },
  { id: 4, name: '4번 버튼', link: '#', isOpen: false },
  { id: 5, name: '5번 버튼', link: '#', isOpen: false },
];

interface HeaderOptionalProps {
  handleGapChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Header() {
  const [gap, setGap] = useState<string>('gap-10');
  const [codeSnippet, setCodeSnippet] = useState<string>(
    getCodeSnippet('gap-10'),
  );
  const [animate, setAnimate] = useState<boolean>(false);
  const [highlight, setHighlight] = useState<boolean>(false);

  const handleGapChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newGap = e.target.value;
    setAnimate(true); // 애니메이션 시작
    setGap(newGap);
    setHighlight(true); // 강조 효과 시작
    setCodeSnippet(getCodeSnippet(newGap));

    // 애니메이션 종료 후 상태 초기화
    setTimeout(() => {
      setAnimate(false);
      setHighlight(false); // 강조 효과 종료
    }, 300); // duration과 동일한 시간 설정
  };

  function getCodeSnippet(gapClass: string) {
    return `
		<div class="flex ${gapClass}">
		${LinkButton.filter(item => item.isOpen)
      .map(
        item => ` 
			<Link key={item.id} href="${item.link}">
				${item.name}
			</Link>`,
      )
      .join('')}
		</div>`;
  }

  return (
    <>
      <div className='m-auto w-[1300px] h-[800px] border-dashed border-red-500 border-8 relative'>
        <header className='absolute top-0 left-0 right-0 border-b-2 h-14 items-center m-auto flex p-2 justify-center w-full shadow-md border-4 border-black'>
          <div className='flex justify-between w-full items-center px-1 m-auto max-w-[800px] '>
            <div className=''>
              <Link href='#'>
                <Image
                  src={headers}
                  alt='홈페이지 로고'
                  width={0}
                  height={0}
                  layout='intrinsic'
                  objectFit='contain'
                  quality={100}
                  priority
                />
              </Link>
            </div>
            <div
              className={`flex ${gap} transition-all duration-300 ${
                animate ? 'bg-orange-300 transform scale-105 opacity-75' : ''
              }`}>
              {LinkButton.filter(item => item.isOpen).map(item => (
                <Link
                  key={item.id}
                  href={item.link}
                  className='p-2 rounded transition-colors duration-300 hover:bg-gray-400'>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </header>

        <div className='flex flex-col gap-10 mt-10 p-5'>
          <HeaderOptional handleGapChange={handleGapChange} />
          <CodeSnippet code={codeSnippet} highlight={highlight} />
        </div>
      </div>
    </>
  );
}

function HeaderOptional({ handleGapChange }: HeaderOptionalProps) {
  return (
    <div className='border-4 border-green-600 mt-16	 p-4 rounded-lg shadow-md w-2/12'>
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

interface CodeSnippetProps {
  code: string;
  highlight: boolean; // highlight props 추가
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, highlight }) => {
  return (
    <div
      className={`p-4 border rounded-lg w-1/2 ${
        highlight ? 'bg-orange-300 transition-all duration-300' : 'bg-gray-100'
      } shadow-md`}>
      <h2 className='text-xl font-bold mb-2'>코드 스니펫</h2>
      <pre className='bg-gray-800 text-white p-4 rounded-lg overflow-auto'>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default Header;

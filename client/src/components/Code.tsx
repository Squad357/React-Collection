'use client';

import { useState } from 'react';
import Modal from './layout/Modal';
import { CodeProps } from '@/types/props/codeProps';
import useShikiCode from '@/hooks/useShikiCode';
import { HiCheck } from 'react-icons/hi';
import useCopyCode from '@/hooks/useCopyCode';

/**
 * 코드 컴포넌트
 * @param {string} codeString - 보여줄 코드
 * @param {string} language - 원하는 언어 선택 / default - 'tsx'
 * @param {string} theme - 원하는 테마 / default -'github-dark'
 *
 * @example
 * <Code codeString={codeString} language='tsx' theme='material-theme' />
 */
export default function Code({ codeString, optionList, animate }: CodeProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const highlightedCode = useShikiCode({ codeString, animate, optionList });

  const { isCopied, handleCopyCode } = useCopyCode(highlightedCode);

  return (
    <>
      <div className='flex gap-2 absolute top-2 right-5 text-sm '>
        <button
          className={`w-16 h-8 bg-[#24292e] text-white font-bold border rounded-full transition-all hover:bg-[#606060] ${
            isCopied && 'bg-[#606060] cursor-default pointer-events-none'
          }`}
          onClick={handleCopyCode}>
          {isCopied ? <HiCheck className='mx-auto w-6 h-6' /> : 'COPY'}
        </button>
        <button
          className='w-16 h-8 bg-[#24292e] text-white font-bold border rounded-full transition-all hover:bg-[#606060]'
          onClick={() => setIsModalOpen(true)}>
          OPEN
        </button>
      </div>
      <div
        className='w-full h-full overflow-auto rounded-lg'
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        highlightedCode={highlightedCode}
      />
    </>
  );
}

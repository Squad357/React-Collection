'use client';

import { useState } from 'react';
import Modal from './layout/Modal';
import { CodeProps } from '@/types/props/codeProps';
import useShikiCode from '@/hooks/useShikiCode';

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

  return (
    <>
      <div
        className='w-full h-full overflow-auto rounded-lg pointer-events-auto cursor-pointer'
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
        onClick={() => setIsModalOpen(true)}
      />
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        highlightedCode={highlightedCode}
      />
    </>
  );
}

// Code.tsx
'use client';
import { useShikiCode } from '@/hooks/useShikiCode';
import { Option } from '@/types/optionList';

interface CodeProps {
  codeString: string;
  language?: string;
  theme?: string;
  optionList: Option[];
  gapAnimate?: boolean;
}

/**
 * 코드 컴포넌트
 * @param {string} codeString - 보여줄 코드
 * @param {string} language - 원하는 언어 선택 / default - 'tsx'
 * @param {string} theme - 원하는 테마 / default -'github-dark'
 *
 * @example
 * <Code codeString={codeString} language='tsx' theme='material-theme' />
 */
export default function Code({
  codeString,
  gapAnimate,
  optionList,
}: CodeProps) {
  const highlightedCode = useShikiCode(codeString, gapAnimate!, optionList);

  return (
    <div
      className='w-full h-full overflow-auto rounded-lg'
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
}

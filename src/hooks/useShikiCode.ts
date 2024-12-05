import { Option } from '@/types/optionList';
import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

export function useShikiCode(
  codeString: string,
  gapAnimate: boolean,
  optionList: Option[],
  language: string = 'tsx',
  theme: string = 'github-dark',
) {
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    // '버튼 간격'에 해당하는 옵션을 안전하게 찾기
    const gapOptionDefault = (optionList.find(
      option => option.label === '버튼 간격',
    )?.default || 'gap-2') as string;

    // LATER
    // 애니메이션 적용을 위한 decorations 생성 함수
    // const createDecoration = (animate: boolean, optionDefault: string) => {
    //   return animate ? [{
    //     start: codeString.indexOf(optionDefault),
    //     end: codeString.indexOf(optionDefault) + optionDefault.length,
    //     properties: { class: 'animate-shiki-highlight' },
    //   }] : [];
    // };

    // // decorations 배열 생성
    // const decorations = [
    //   ...createDecoration(gapAnimate, gapOptionDefault),
    //   ...createDecoration(paddingAnimate, paddingOptionDefault),
    // ];

    const decorations =
      gapAnimate && gapOptionDefault
        ? [
            {
              start: codeString.indexOf(gapOptionDefault),
              end:
                codeString.indexOf(gapOptionDefault) + gapOptionDefault.length,
              properties: { class: 'animate-shiki-highlight' },
            },
          ]
        : [];

    const loadHighlighter = async () => {
      const html = await codeToHtml(codeString, {
        lang: language, // 원하는 언어 선택 가능
        theme: theme, // 원하는 테마 변경 가능
        decorations,
      });
      setHighlightedCode(html);
    };

    loadHighlighter();
  }, [codeString, language, theme, gapAnimate, optionList]);

  return highlightedCode;
}

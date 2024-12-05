// useCodePreview.ts
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
    const decorations =
      gapAnimate && typeof optionList[1].default === 'string'
        ? [
            {
              start: codeString.indexOf(optionList[1].default as string),
              end:
                codeString.indexOf(optionList[1].default as string) +
                optionList[1].default.length,
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

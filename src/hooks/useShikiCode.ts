import { Option } from '@/types/optionList';
import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

interface Decoration {
  start: number;
  end: number;
  properties: { class: string };
}

export default function useShikiCode(
  codeString: string,
  animate: Record<string, boolean>,
  optionList: Option[],
  language: string = 'tsx',
  theme: string = 'github-dark',
): string {
  const [highlightedCode, setHighlightedCode] = useState<string>('');

  useEffect(() => {
    const decorations: Decoration[] = optionList.reduce(
      (decoration: Decoration[], option: Option) => {
        const optionDefault = option.default || '';
        const optionLabel = option.label;

        if (optionDefault && animate[optionLabel]) {
          const start = codeString.indexOf(optionDefault);
          const end = start + optionDefault.length;

          // 유효한 인덱스인지 확인
          if (start !== -1) {
            decoration.push({
              start,
              end,
              properties: { class: 'animate-shiki-highlight' },
            });
          }
        }

        return decoration;
      },
      [],
    );

    const loadHighlighter = async () => {
      const html = await codeToHtml(codeString, {
        lang: language, // 원하는 언어 선택 가능
        theme: theme, // 원하는 테마 변경 가능
        decorations,
      });
      setHighlightedCode(html);
    };

    loadHighlighter();
  }, [codeString, language, theme, animate, optionList]);

  return highlightedCode;
}

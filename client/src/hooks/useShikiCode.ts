import { Decoration, ShikiCodeProps } from '@/types/props/shikiCodeProps';
import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

export default function useShikiCode({
  codeString,
  animate,
  optionList,
  language = 'tsx',
  theme = 'github-dark',
}: ShikiCodeProps): string {
  const [highlightedCode, setHighlightedCode] = useState<string>('');

  useEffect(() => {
    const decorations: Decoration[] = Object.keys(optionList).reduce(
      (decoration: Decoration[], key: string) => {
        const option = optionList[key];
        const optionDefault = option.default || '';
        const optionLabel = option.label;
        const noAnimation = option.animate;

        if (noAnimation && optionDefault && animate[optionLabel]) {
          let match;
          const regex = new RegExp(`\\b${optionDefault}\\b`, 'g');

          while ((match = regex.exec(codeString)) !== null) {
            decoration.push({
              start: match.index,
              end: match.index + optionDefault.length,
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

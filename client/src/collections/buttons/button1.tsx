'use client';

import { PreviewProps } from '@/types/props/previewProps';
import { motion } from 'framer-motion';
import { OptionList } from '@/types/optionList';

export default function Button1({ optionList, animate }: PreviewProps) {
  return (
    <motion.div
      layoutId='button'
      animate={{
        scale: animate['variants'] ? 1.15 : 1,
      }}
      className={`${animate['variants'] ? 'bg-red-200' : ''} p-4 rounded-lg`}>
      <button
        className={`${optionList['variants']?.default} ${
          optionList['size']?.default
        } ${animate['size'] ? 'animate-highlight' : ''}`}>
        Button
      </button>
    </motion.div>
  );
}

export const CodeString = (optionList: OptionList) => {
  const defaultOption = (label: string) => optionList[label]?.default || '';

  const variantOptionDefault = defaultOption('variants');
  const sizeOptionDefault = defaultOption('size');

  return `import { Button } from '@/components/ui/button';

export default function Button1() {
  return (
    <button
      className="${variantOptionDefault} ${sizeOptionDefault}"
    >
      Button
    </button>
  );
}`;
};

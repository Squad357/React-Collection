'use client';

import { PreviewProps } from '@/types/props/previewProps';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/customButton';
import { useEffect, useState } from 'react';

export default function Button1({
  optionList,
  animate: buttonAnimate,
}: PreviewProps) {
  // 상태 관리
  const [variant, setVariant] = useState(optionList.variants.default);
  const [size, setSize] = useState(optionList.size.default);

  // optionList가 변경될 때 상태 업데이트
  useEffect(() => {
    setVariant(optionList.variants.default);
    setSize(optionList.size.default);
  }, [optionList]);

  return (
    <motion.div
      layoutId='button'
      animate={{
        scale: buttonAnimate ? 1.15 : 1,
      }}
      className={`${buttonAnimate ? 'bg-red-200' : ''} p-4 rounded-lg`}>
      <CustomButton
        variant={variant}
        size={size}
        className={buttonAnimate ? 'animate-highlight' : ''}>
        Button
      </CustomButton>
    </motion.div>
  );
}

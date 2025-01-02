import { useState } from 'react';

export default function useCopyCode(highlightedCode: string) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = async () => {
    // 줄바꿈 유지된 code 텍스트 가져오기
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = highlightedCode;
    const code = tempDiv.innerText;

    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      alert('복사 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return { isCopied, handleCopyCode };
}

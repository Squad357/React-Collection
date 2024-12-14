import { Option } from '@/types/optionList';
import { useState, useEffect, useRef } from 'react';

export default function useAnimation(optionList: Option[]) {
  // 초기 상태 설정
  const initialAnimate = optionList.reduce(
    (acc: Record<string, boolean>, option) => {
      acc[option.label] = false;
      return acc;
    },
    {},
  );

  const [animate, setAnimate] =
    useState<Record<string, boolean>>(initialAnimate);
  const prevValuesRef = useRef(optionList.map(option => option.default));

  useEffect(() => {
    const currentValues = optionList.map(option => option.default);
    const newAnimate: Record<string, boolean> = { ...animate };

    let hasChanged = false; // 변경 여부 플래그

    // 각 option의 이전 값과 현재 값을 비교
    currentValues.forEach((value, index) => {
      const label = optionList[index].label; // label을 통해 접근
      if (prevValuesRef.current[index] !== value) {
        newAnimate[label] = true; // 값이 변경되면 true로 설정
        hasChanged = true; // 변경 여부 플래그를 true로 설정
      }
    });

    // 애니메이션 상태가 변경된 경우에만 업데이트
    if (hasChanged) {
      setAnimate(newAnimate);
      prevValuesRef.current = currentValues; // 이전 값을 업데이트
    }

    // 애니메이션 상태를 800ms 후에 false로 설정
    const timer = setTimeout(() => {
      setAnimate(prevAnimate => {
        const resetAnimate: Record<string, boolean> = { ...prevAnimate };
        Object.keys(resetAnimate).forEach(key => {
          resetAnimate[key] = false;
        });
        return resetAnimate;
      });
    }, 800);

    // 클린업 함수: 타이머 해제
    return () => clearTimeout(timer);
  }, [optionList]);

  return animate;
}

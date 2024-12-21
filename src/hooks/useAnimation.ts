import { OptionList } from '@/types/optionList';
import { useEffect, useRef, useState } from 'react';

export default function useAnimation(optionList: OptionList) {
  // 초기 상태 설정
  const initialAnimate = Object.keys(optionList).reduce(
    (animate: Record<string, boolean>, key) => {
      animate[optionList[key].label] = false;
      return animate;
    },
    {} as Record<string, boolean>, // 타입 명시
  );

  const [animate, setAnimate] =
    useState<Record<string, boolean>>(initialAnimate);

  const prevValuesRef = useRef<Record<string, string>>(
    Object.keys(optionList).reduce((acc, key) => {
      acc[optionList[key].label] = optionList[key].default;
      return acc;
    }, {} as Record<string, string>),
  );

  useEffect(() => {
    // 현재 값 설정
    const currentValues: Record<string, string> = Object.keys(
      optionList,
    ).reduce((acc, key) => {
      acc[optionList[key].label] = optionList[key].default;
      return acc;
    }, {} as Record<string, string>);

    const newAnimate: Record<string, boolean> = { ...animate };
    let hasChanged = false; // 변경 여부 플래그

    // 각 option의 이전 값과 현재 값을 비교
    Object.keys(optionList).forEach(key => {
      const label = optionList[key].label;
      if (prevValuesRef.current[label] !== currentValues[label]) {
        newAnimate[label] = true;
        hasChanged = true;
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

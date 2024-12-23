'use client';

import { setOptionList } from '@/redux/option';
import { RootState } from '@/redux/store';
import { OptionList } from '@/types/optionList'; // OptionList 타입을 사용
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function useOptionList<T extends OptionList>(initialState?: T) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  // 초기값이 있을 때만 설정
  useEffect(() => {
    if (initialState === null) return;

    if (!initialState) return;

    const initializeState = async () => {
      try {
        setIsLoading(true);
        await dispatch(setOptionList(initialState));
      } finally {
        setIsLoading(false);
      }
    };

    initializeState();
  }, [dispatch, initialState]);

  const optionList = useSelector(
    (state: RootState): OptionList => state.option,
  );

  // LATER
  // 로딩 스켈레톤에 관한 처리 (isLoading을 Main 컴포넌트에서 가져감으로써 스켈레톤 UI를 불러와야함)
  return { optionList, isLoading };
}

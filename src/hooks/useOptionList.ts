'use client';

import { setOptionList } from '@/redux/option';
import { RootState } from '@/redux/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function useOptionList<T>(initialState?: T) {
  const dispatch = useDispatch();
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 초기값 설정
  useEffect(() => {
    const initializeState = async () => {
      try {
        setIsLoading(true);
        if (!isInitialized) {
          await dispatch(setOptionList(initialState));
          setIsInitialized(true);
        }
      } catch (error) {
        console.error('상태 초기화 중 오류 발생:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (initialState) {
      initializeState();
    }
  }, [dispatch, initialState, isInitialized]);

  // Redux 상태 가져오기
  const optionList = useSelector(
    (state: RootState) => state.option.optionList ?? initialState,
  );

  return { optionList, isLoading };
}

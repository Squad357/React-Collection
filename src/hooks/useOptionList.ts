'use client';

import { setOptionList } from '@/redux/option';
import { RootState } from '@/redux/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function useOptionList<T>(initialState?: T) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  // 초기값이 있을 때만 설정
  useEffect(() => {
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

  // Redux 상태 가져오기
  const optionList = useSelector((state: RootState) => state.option);

  return { optionList, isLoading };
}

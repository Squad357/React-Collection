'use client';

import { headerOptionList } from '@/collections/headers/option';
import { useAnimation } from '@/hooks/useAnimation';
import { useOptionList } from '@/hooks/useOptionList';
import { CategoryComponents } from '@/lib/categoryComponents';
import { CodeStrings } from '@/lib/codeStrings';
import Code from './Code';
import Options from './Options';

export default function Main({ id }: { id: number }) {
  const Component = CategoryComponents[id];
  const { optionList, isLoading } = useOptionList(headerOptionList);
  const buttonAnimate = useAnimation(optionList[0]?.default);
  const gapAnimate = useAnimation(optionList[1]?.default);

  const codeString =
    typeof CodeStrings[id] === 'function'
      ? CodeStrings[id](optionList, gapAnimate) // 함수를 호출하여 문자열 생성
      : CodeStrings[id]; // 문자열인 경우 그대로 사용

  return (
    <>
      <div className='flex justify-between h-[540px]'>
        <div className='flex items-center justify-center w-[calc(50%-5px)] h-full bg-muted rounded-md'>
          <Component
            optionList={optionList}
            isLoading={isLoading}
            buttonAnimate={buttonAnimate}
            gapAnimate={gapAnimate}
          />
        </div>

        <div className='w-[calc(50%-5px)] h-full border border-muted rounded-md overflow-auto'>
          <Code
            codeString={codeString}
            gapAnimate={gapAnimate}
            optionList={optionList}
          />
        </div>
      </div>
      <div className='mt-10'>
        <Options optionList={optionList} />
      </div>
    </>
  );
}

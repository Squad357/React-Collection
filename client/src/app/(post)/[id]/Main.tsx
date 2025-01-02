'use client';

import { useOptionList } from '@/hooks/useOptionList';
import { CategoryComponents } from '@/lib/categoryComponents';
import { CodeStrings } from '@/lib/codeStrings';
import Code from '../../../components/Code';
import Options from '../../../components/Options';
import useAnimation from '@/hooks/useAnimation';
import { tabOptionList } from '@/collections/tabs/option';
// import { usePathname } from 'next/navigation';

export default function Main({ id }: { id: number }) {
  //# pathname을 바꿔서 사용하면 될꺼같음.
  // const pathname = usePathname();
  // const { optionList } = useOptionList(pathname.includes('header') ? headerOptionList : tabOptionList);
  const Component = CategoryComponents[id];
  const { optionList } = useOptionList(tabOptionList);
  const animate = useAnimation(optionList);

  const codeString =
    typeof CodeStrings[id] === 'function'
      ? CodeStrings[id](optionList) // 함수를 호출하여 문자열 생성
      : CodeStrings[id]; // 문자열인 경우 그대로 사용

  return (
    <>
      <div className='flex justify-between h-[540px]'>
        <div className='flex items-center justify-center w-[calc(50%-5px)] h-full bg-muted rounded-md'>
          <Component optionList={optionList} animate={animate} />
        </div>

        <div className='w-[calc(50%-5px)] h-full border border-muted rounded-md overflow-auto'>
          <Code
            codeString={codeString}
            animate={animate}
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

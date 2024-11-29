'use client';

import { setOptionList } from '@/redux/redux';
import { RootState } from '@/redux/store';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Header2() {
  const linkButton = useSelector(
    (state: RootState) => state.option.optionList.linkButton,
  );
  const dispatch = useDispatch();
  console.log('LinkButton:', linkButton);

  useEffect(() => {
    const initialOptions = {
      linkButton: linkButton,
    };

    dispatch(setOptionList(linkButton));
  }, []);

  return (
    <header className='flex justify-between items-center border-2 border-black'>
      <div>
        <h1 className='text-2xl font-bold p-2'>Logo</h1>
      </div>
      <nav className='flex gap-2'>
        {linkButton
          .filter(item => item.isOpen)
          .map(item => (
            <Link
              key={item.id}
              href={item.link}
              className='hover:scale-105 hover:bg-gray-300 rounded-md m-2 p-2 active:scale-95'>
              {item.name}
            </Link>
          ))}
      </nav>
    </header>
  );
}

export const CodeString = `
export default function Header2() {

  return (
    <header className='flex justify-between items-center border-2 border-black'>
      <div>
        <h1 className='text-2xl font-bold p-2'>Logo</h1>
      </div>
      <nav className='flex gap-2'>
        {LinkButton.filter(item => item.isOpen).map(item => (
          <Link
            key={item.id}
            href={item.link}
            className='hover:scale-105 hover:bg-gray-300 rounded-md m-2 p-2 active:scale-95'>
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
`;

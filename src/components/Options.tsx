'use client';

import { setOptionDefault } from '@/redux/option';
import { Item, Option } from '@/types/optionList';
import { useDispatch } from 'react-redux';

export default function Options({ optionList }: { optionList: Option[] }) {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name: optionType, value: defaultValue } = e.target;

    dispatch(
      setOptionDefault({ optionType: optionType, defaultValue: defaultValue }),
    );
  };

  return (
    <div>
      <h1 className='text-2xl font-semibold'>Options</h1>
      <div className='grid grid-cols-4 gap-4 mt-4 p-4 rounded-lg bg-stone-200'>
        {optionList.map((option: Option) => (
          <div
            key={option.label}
            className='flex flex-col gap-2 p-4 bg-slate-100 rounded-lg'>
            <label htmlFor={option.label} className='font-medium'>
              {option.label}
            </label>
            <select
              id={option.label}
              name={option.label}
              className='p-2 border rounded-md bg-white'
              value={option.default}
              onChange={handleChange}>
              {option.items.map((item: Item) => (
                <option key={item.id} value={item.name}>
                  {item.optionValue}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

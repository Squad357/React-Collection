'use client';

import { setOptionDefault } from '@/redux/option';
import { OptionItem, OptionList } from '@/types/optionList';
import { useDispatch } from 'react-redux';

export default function Options({ optionList }: { optionList: OptionList }) {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name: optionType, value: defaultValue } = e.target;

    dispatch(setOptionDefault({ optionType, defaultValue }));
  };

  return (
    <div>
      <h1 className='text-2xl font-medium'>Options</h1>
      <div className='grid grid-cols-4 gap-4 mt-4 p-4 rounded-lg border'>
        {Object.keys(optionList).map(key => {
          const option = optionList[key];

          return (
            <div
              key={option.label}
              className='flex flex-col gap-2 p-4 rounded-lg'>
              <label htmlFor={option.label} className='font-medium'>
                {option.label}
              </label>
              <select
                id={option.label}
                name={option.label}
                className='p-2 border rounded-md bg-white'
                value={option.default}
                onChange={handleChange}>
                {option.items.map((item: OptionItem) => (
                  <option key={item.id} value={item.name}>
                    {item.optionValue}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
}

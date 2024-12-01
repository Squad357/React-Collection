'use client';

import { useOptionList } from '@/hooks/useOptionList';
import { setDefaultCount } from '@/redux/option';
import { useDispatch } from 'react-redux';

export default function Options() {
  const { optionList } = useOptionList();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDefaultCount(Number(e.target.value)));
  };

  return (
    <div>
      <h1 className='text-2xl font-semibold'>Options</h1>
      <div className='grid grid-cols-4 gap-4 mt-4 p-4 rounded-lg bg-stone-200'>
        {optionList &&
          Object.entries(optionList).map(([key, value]) => (
            <div
              key={key}
              className='flex flex-col gap-2 p-4 bg-slate-100 rounded-lg'>
              <label htmlFor={key} className='font-medium'>
                {value.name}
              </label>
              <select
                name={key}
                id={key}
                className='p-2 border rounded-md bg-white'
                value={value.defaultCount}
                onChange={handleChange}>
                {value.items.map((item, index) => (
                  <option key={item.id} value={item.id}>
                    {item.id} 개
                  </option>
                ))}
              </select>
            </div>
          ))}
      </div>
    </div>
  );
}

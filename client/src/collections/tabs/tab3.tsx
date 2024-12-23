'use client';

import { useState } from 'react';

export interface Tab {
  title?: string;
  content?: string;
  isOpen?: boolean;
}

/**
 *
 * @returns
 */

export default function Tab3() {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs: Tab[] = [
    {
      title: 'Tab1',
      content: 'Hello, Tab1',
      isOpen: true,
    },
    {
      title: 'Tab2',
      content: 'Hello, Tab2',
      isOpen: true,
    },
    {
      title: 'Tab3',
      content: 'Hello, Tab3',
      isOpen: true,
    },
  ];

  const handleSelectTab = (i: number) => {
    setCurrentTab(i);
  };

  return (
    <div className='mx-auto w-11/12 translate-y-full'>
      <ul className='flex w-full justify-items-center text-lg font-semibold text-muted-foreground bg-[#e2fa45] border-t-4 border-x-4 border-[#e2fa45] rounded-t-sm'>
        {tabs.map((tab, i) => (
          <li key={i} className='w-full'>
            <button
              className={`w-full h-full ${
                currentTab === i ? ' bg-white rounded-t-sm' : 'py-2'
              }`}
              onClick={() => handleSelectTab(i)}>
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className='px-5 py-8 bg-white border-x-4 border-b-4 border-[#ffd4f6]'>
        <p>{tabs[currentTab].content}</p>
      </div>
    </div>
  );
}

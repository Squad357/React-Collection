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

export default function Tab2() {
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
    {
      title: 'Tab4',
      content: 'Hello, Tab4',
      isOpen: true,
    },
  ];

  const handleSelectTab = (i: number) => {
    setCurrentTab(i);
  };

  return (
    <div className='w-full h-[50vh] bg-muted rounded-md'>
      <div className='flex gap-1 mx-auto py-10 w-11/12 translate-y-1/4 bg-white'>
        <ul className='flex flex-col justify-items-center w-1/4'>
          {tabs.map((tab, i) => (
            <li key={i} className='w-full'>
              <button
                className={`w-full px-10 py-3 text-center ${
                  currentTab === i
                    ? 'border-r-4 border-purple-400 text-purple-500'
                    : 'border-r-4 border-transparent text-gray-400'
                }`}
                onClick={() => handleSelectTab(i)}>
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        <div className='w-full px-5 py-8 text-center'>
          <p>{tabs[currentTab].content}</p>
        </div>
      </div>
    </div>
  );
}

export const CodeString = `import { useState } from 'react';

export default function Tab1() {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
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
    {
      title: 'Tab4',
      content: 'Hello, Tab4',
      isOpen: true,
    },
  ];

  const handleSelectTab = (i: number) => {
    setCurrentTab(i);
  };

  return (
    <div className='w-full h-[50vh] bg-muted rounded-md'>
      <div className='flex gap-1 mx-auto py-10 w-11/12 translate-y-1/4 bg-white'>
        <ul className='flex flex-col justify-items-center w-1/4'>
          {tabs.map((tab, i) => (
            <li key={i} className='w-full'>
              <button
                className={\`w-full px-10 py-3 text-center \${
                  currentTab === i
                    ? 'border-r-4 border-purple-400 text-purple-500'
                    : 'border-r-4 border-transparent text-gray-400'
                }\`}
                onClick={() => handleSelectTab(i)}>
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        <div className='w-full px-5 py-8 text-center'>
          <p>{tabs[currentTab].content}</p>
        </div>
      </div>
    </div>
  );
}
`;

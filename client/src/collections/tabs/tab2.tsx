'use client';

import { OptionList } from '@/types/optionList';
import { PreviewProps } from '@/types/props/previewProps';
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

export default function Tab2({ optionList, animate }: PreviewProps) {
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

  const activeTextColor = optionList['버튼 색상']?.items.find(
    item => item.optionValue === optionList['버튼 색상']?.default,
  )?.extra?.tag;

  return (
    <div
      className={`flex gap-1 mx-auto py-10 w-11/12 bg-white ${
        optionList['Shadow']?.default
      } ${animate['Shadow'] ? 'shadow-[#ffb6474d]' : ''} rounded${
        optionList['Border Radius']?.default
      } ${animate['Border Radius'] ? 'animate-border-highlight' : ''}`}>
      <ul className='flex flex-col justify-items-center w-1/4'>
        {tabs.map((tab, i) => (
          <li key={i} className='w-full'>
            <button
              className={`w-full px-10 py-3 text-center ${
                currentTab === i
                  ? `border-r-4 border-${optionList['버튼 색상']?.default} text-${activeTextColor}`
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
  );
}

export const CodeString = (optionList: OptionList) => {
  const defaultOption = (label: string) => optionList[label]?.default || '';

  const btnColorOption = defaultOption('버튼 색상');
  const textColorOption = optionList['버튼 색상']?.items.find(
    item => item.optionValue === optionList['버튼 색상']?.default,
  )?.extra?.tag;
  const radiusOptionDefault = defaultOption('Border Radius');
  const shadowOptionDefault = defaultOption('Shadow');

  return `import { useState } from 'react';

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
      <div className='flex gap-1 mx-auto py-10 w-11/12 translate-y-1/4 bg-white ${shadowOptionDefault} rounded${radiusOptionDefault}'>
        <ul className='flex flex-col justify-items-center w-1/4'>
          {tabs.map((tab, i) => (
            <li key={i} className='w-full'>
              <button
                className={\`w-full px-10 py-3 text-center \${
                  currentTab === i
                    ? 'border-r-4 border-${btnColorOption} text-${textColorOption}'
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
  );
}
`;
};

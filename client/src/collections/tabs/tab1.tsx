'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Option } from '@/types/optionList';
import { PreviewProps } from '@/types/props/previewProps';

export interface Tab {
  title?: string;
  content?: string;
  isOpen?: boolean;
}

export default function Tab1({ optionList, animate }: PreviewProps) {
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
      isOpen: false,
    },
  ];

  const handleSelectTab = (i: number) => {
    setCurrentTab(i);
  };

  return (
    <div
      className={`mx-auto w-11/12 ${optionList[2]?.default} ${
        animate['Shadow'] ? 'shadow-[#ffb6474d]' : ''
      }`}>
      <motion.ul
        className={`flex w-full justify-items-center text-lg font-semibold text-muted-foreground bg-${
          optionList[0]?.default
        } border-t-4 border-x-4 border-${optionList[0]?.default} ${
          animate['Border Radius'] ? 'animate-border-highlight' : ''
        } rounded-t${optionList[1]?.default}`}>
        {tabs
          .filter(item => item.isOpen)
          .map((tab, i) => (
            <li key={i} className='w-full'>
              <button
                className={`w-full h-full ${
                  currentTab === i
                    ? `bg-white rounded-t${optionList[1]?.default}`
                    : 'py-2'
                }`}
                onClick={() => handleSelectTab(i)}>
                {tab.title}
              </button>
            </li>
          ))}
      </motion.ul>
      <motion.div
        className={`px-5 py-8 bg-white border-x-4 border-b-4 border-${optionList[0]?.default}`}>
        <p>{tabs[currentTab].content}</p>
      </motion.div>
    </div>
  );
}

export const CodeString = (optionList: Option[]) => {
  const defaultOption = (label: string) =>
    optionList.find(option => option.label === label)?.default || '';

  const btnColorOptionDefault = defaultOption('버튼 색상');
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
      isOpen: false,
    },
  ];

  const handleSelectTab = (i: number) => {
    setCurrentTab(i);
  };

  return (
    <div className='${shadowOptionDefault}'>
      <ul
        className='flex w-full justify-items-center text-lg font-semibold text-muted-foreground bg-${btnColorOptionDefault} border-t-4 border-x-4 border-${btnColorOptionDefault} rounded-t${radiusOptionDefault}'>
        {tabs
          .filter(item => item.isOpen)
          .map((tab, i) => (
            <li key={i} className='w-full'>
              <button
                className={\`w-full h-full \${
                  currentTab === i
                    ? 'bg-white rounded-t${radiusOptionDefault}'
                    : 'py-2'
                }\`}
                onClick={() => handleSelectTab(i)}>
                {tab.title}
              </button>
            </li>
          ))}
      </ul>
      <div
        className='px-5 py-8 bg-white border-x-4 border-b-4 border-${btnColorOptionDefault}'>
        <p>{tabs[currentTab].content}</p>
      </div>
    </div>
  );
}
`;
};

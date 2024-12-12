'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useOptionList } from '@/hooks/useOptionList';
import { tabOptionList } from './option';

export interface Tab {
  title?: string;
  content?: string;
  isOpen?: boolean;
}

export default function Tab1() {
  const { optionList } = useOptionList(tabOptionList);

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
    <div className='mx-auto w-11/12'>
      <motion.ul
        className={`flex w-full justify-items-center text-lg font-semibold text-muted-foreground bg-${optionList[0]?.default} border-t-4 border-x-4 border-${optionList[0]?.default} rounded-t${optionList[1]?.default}`}>
        {tabs
          .filter(item => item.isOpen)
          .map((tab, i) => (
            <li key={i} className='w-full'>
              <button
                className={`w-full h-full ${
                  currentTab === i
                    ? ` bg-white rounded-t${optionList[1]?.default}`
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

export const CodeOption = [
  {
    key: 'border',
    label: 'Border Width',
    value: '-4',
    options: [
      { value: '-2', label: 'Small' },
      { value: '-4', label: 'Medium' },
      { value: '-8', label: 'Large' },
    ],
  },
  {
    key: 'rounded',
    label: 'Border Radius',
    value: '-sm',
    options: [
      { value: '-none', label: 'None' },
      { value: '-sm', label: 'Small' },
      { value: '', label: 'Medium' },
      { value: '-lg', label: 'Large' },
      { value: '-xl', label: 'Extra Large' },
      { value: '-2xl', label: 'Double Extra Large' },
      { value: '-full', label: 'Full' },
    ],
  },
  {
    key: 'bgColor',
    label: 'Background Color',
    value: 'sky-200',
    options: [
      { value: 'sky-100', label: 'Sky 100' },
      { value: 'sky-200', label: 'Sky 200' },
      { value: 'sky-300', label: 'Sky 300' },
      { value: 'pink-100', label: 'Pink 100' },
      { value: 'pink-200', label: 'Pink 200' },
      { value: 'pink-300', label: 'Pink 300' },
      { value: 'purple-200', label: 'Purple 200' },
      { value: 'purple-300', label: 'Purple 300' },
      { value: 'purple-400', label: 'Purple 400' },
    ],
  },
  {
    key: 'shadow',
    label: 'Shadow',
    value: 'shadow-none',
    options: [
      { value: 'shadow-none', label: 'None' },
      { value: 'shadow-sm', label: 'Small' },
      { value: 'shadow', label: 'Medium' },
      { value: 'shadow-md', label: 'Large' },
      { value: 'shadow-lg', label: 'Extra Large' },
      { value: 'shadow-xl', label: 'Double Extra Large' },
    ],
  },
];

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
      isOpen: false,
    },
  ];

  const handleSelectTab = (i: number) => {
    setCurrentTab(i);
  };

  return (
    <div>
      <ul
        className='flex w-full justify-items-center text-lg font-semibold text-muted-foreground bg-[#D4F6FF] border-t-4 border-x-4 border-[#D4F6FF] rounded-t-sm'>
        {tabs
          .filter(item => item.isOpen)
          .map((tab, i) => (
            <li key={i} className='w-full'>
              <button
                className={\`w-full h-full \${
                  currentTab === i
                    ? 'bg-white rounded-t-sm'
                    : 'py-2'
                }\`}
                onClick={() => handleSelectTab(i)}>
                {tab.title}
              </button>
            </li>
          ))}
      </ul>
      <div
        className='px-5 py-8 bg-white border-x-4 border-b-4 border-[#D4F6FF]'>
        <p>{tabs[currentTab].content}</p>
      </div>
    </div>
  );
}
`;

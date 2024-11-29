'use client';

import CodePreview from '@/components/CodePreview';
import Image from 'next/image';
import Link from 'next/link';

function HeaderDemo() {
  const HeaderComponent = ({
    options,
  }: {
    options: Record<string, string>;
  }) => (
    <header
      className={`
      flex justify-between items-center 
      ${options.padding} ${options.rounded} ${options.bgColor} ${options.shadow}
    `}>
      <div className='font-bold text-xl'>Logo</div>
      <nav
        className={`
        flex ${options.gap} ${options.justify} 
        p-2 rounded-md w-[500px] bg-white/50 backdrop-blur-sm
        transition-all duration-500 ease-in-out
      `}>
        <div className='transition-all duration-500 ease-in-out transform'>
          <Link
            href='#'
            className='px-3 py-2 rounded bg-white hover:bg-gray-200 block'>
            Home
          </Link>
        </div>
        <div className='transition-all duration-500 ease-in-out transform'>
          <Link
            href='#'
            className='px-3 py-2 rounded bg-white hover:bg-gray-200 block'>
            About
          </Link>
        </div>
        <div className='transition-all duration-500 ease-in-out transform'>
          <Link
            href='#'
            className='px-3 py-2 rounded bg-white hover:bg-gray-200 block'>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );

  const generateCode = (options: Record<string, string>) =>
    `
  <header class="flex justify-between items-center 
    ${options.padding} ${options.rounded} 
    ${options.bgColor} ${options.shadow}">
    <div class="font-bold text-xl">
      Logo
    </div>
    <nav class="flex ${options.gap} ${options.justify} 
      p-2 rounded-md w-[500px] bg-white/50">
      <Link href="#" class="px-3 py-2 rounded bg-white hover:bg-gray-200">
        Home
      </Link>
      <Link href="#" class="px-3 py-2 rounded bg-white hover:bg-gray-200">
        About
      </Link>
      <Link href="#" class="px-3 py-2 rounded bg-white hover:bg-gray-200">
        Contact
      </Link>
    </nav>
  </header>`.trim();

  const codeOptions = [
    {
      key: 'gap',
      label: 'Nav Gap',
      value: 'gap-4',
      options: [
        { value: 'gap-1', label: 'Tiny (0.25rem)' },
        {
          value: 'gap-2',
          label: 'Extra Small (0.5rem)',
        },
        { value: 'gap-3', label: 'Small (0.75rem)' },
        { value: 'gap-4', label: 'Medium (1rem)' },
        { value: 'gap-5', label: 'Large (1.25rem)' },
        {
          value: 'gap-6',
          label: 'Extra Large (1.5rem)',
        },
        { value: 'gap-8', label: 'Double (2rem)' },
        { value: 'gap-10', label: 'Triple (2.5rem)' },
      ],
    },
    {
      key: 'justify',
      label: 'Nav Justify',
      value: 'justify-start',
      options: [
        { value: 'justify-start', label: 'Start' },
        { value: 'justify-center', label: 'Center' },
        { value: 'justify-end', label: 'End' },
        {
          value: 'justify-between',
          label: 'Space Between',
        },
        {
          value: 'justify-around',
          label: 'Space Around',
        },
        {
          value: 'justify-evenly',
          label: 'Space Evenly',
        },
      ],
    },
    {
      key: 'padding',
      label: 'Container Padding',
      value: 'p-4',
      options: [
        { value: 'p-2', label: 'Small' },
        { value: 'p-3', label: 'Medium' },
        { value: 'p-4', label: 'Large' },
        { value: 'p-6', label: 'Extra Large' },
        { value: 'p-8', label: 'Huge' },
      ],
    },
    {
      key: 'rounded',
      label: 'Border Radius',
      value: 'rounded-lg',
      options: [
        { value: 'rounded-none', label: 'None' },
        { value: 'rounded-sm', label: 'Small' },
        { value: 'rounded', label: 'Medium' },
        { value: 'rounded-lg', label: 'Large' },
        { value: 'rounded-xl', label: 'Extra Large' },
        {
          value: 'rounded-2xl',
          label: 'Double Extra Large',
        },
        { value: 'rounded-full', label: 'Full' },
      ],
    },
    {
      key: 'bgColor',
      label: 'Background Color',
      value: 'bg-gray-100',
      options: [
        { value: 'bg-gray-100', label: 'Gray 100' },
        { value: 'bg-gray-50', label: 'Gray 50' },
        { value: 'bg-white', label: 'White' },
        { value: 'bg-blue-50', label: 'Blue 50' },
        { value: 'bg-blue-100', label: 'Blue 100' },
        { value: 'bg-green-50', label: 'Green 50' },
        { value: 'bg-green-100', label: 'Green 100' },
        { value: 'bg-yellow-50', label: 'Yellow 50' },
        { value: 'bg-yellow-100', label: 'Yellow 100' },
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
        {
          value: 'shadow-xl',
          label: 'Double Extra Large',
        },
      ],
    },
  ];

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-6'>Header Component Demo</h1>
      <CodePreview
        component={HeaderComponent}
        generateCode={generateCode}
        codeOptions={codeOptions}
        language='tsx'
        theme='github-dark'
      />
    </div>
  );
}

export default HeaderDemo;

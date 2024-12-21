import { OptionList } from '@/types/optionList';

export const CodeString = (optionList: OptionList) => {
  const defaultOption = (label: string) => optionList[label]?.default || '';

  const gapOptionDefault = defaultOption('버튼 간격');
  const buttonColorDefault = defaultOption('버튼 색상');
  const buttonSizeDefault = defaultOption('버튼 크기');

  return `<header className='flex justify-between items-center border-2 border-black'>
  <div>
    <h1 className='text-2xl font-bold p-2'>Logo</h1>
  </div>
  <nav className='flex ${gapOptionDefault}'>
    {Object.values(optionList).map((item) => (
      <Link
        key={item.label} 
        href={item.link} 
        className='${buttonColorDefault} ${buttonSizeDefault} 
				hover:scale-105 hover:bg-gray-300 rounded-md m-2 p-2 active:scale-95'>
        {item.label}  
      </Link>
    ))}
  </nav>
</header>
`;
};

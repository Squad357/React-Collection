import { Option } from '@/types/optionList';

export const CodeString = (optionList: Option[]) => {
  // 버튼 간격 옵션
  const gapOptionDefault =
    optionList.find(option => option.label === '버튼 간격')?.default || 'gap-2';

  return `<header className='flex justify-between items-center border-2 border-black'>
	<div>
		<h1 className='text-2xl font-bold p-2'>Logo</h1>
	</div>
	<nav className='flex ${gapOptionDefault}'>
		{linkButton?.filter(item => item.isOpen).map(item => (
		<Link
			key={item.id}
			href={item.link}
			className='hover:scale-105 hover:bg-gray-300 rounded-md m-2 p-2 active:scale-95'>
			{item.name}
		</Link>
		))}
	</nav>
</header>
`;
};

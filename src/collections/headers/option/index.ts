import { OptionList } from '@/types/optionList';

export const headerOptionList: OptionList = {
  '버튼 갯수': {
    label: '버튼 갯수',
    default: '3',
    animate: false,
    items: [
      {
        id: 1,
        name: '1',
        optionValue: '1 개',
        extra: {
          tag: '버튼 1',
        },
      },
      {
        id: 2,
        name: '2',
        optionValue: '2 개',
        extra: {
          tag: '버튼 2',
        },
      },
      {
        id: 3,
        name: '3',
        optionValue: '3 개',
        extra: {
          tag: '버튼 3',
        },
      },
      {
        id: 4,
        name: '4',
        optionValue: '4 개',
        extra: {
          tag: '버튼 4',
        },
      },
      {
        id: 5,
        name: '5',
        optionValue: '5 개',
        extra: {
          tag: '버튼 5',
        },
      },
    ],
  },

  '버튼 간격': {
    label: '버튼 간격',
    default: 'gap-2',
    animate: true,
    items: [
      {
        id: 1,
        name: 'gap-2',
        optionValue: 'gap-2',
      },
      {
        id: 2,
        name: 'gap-4',
        optionValue: 'gap-4',
      },
      {
        id: 3,
        name: 'gap-6',
        optionValue: 'gap-6',
      },
      {
        id: 4,
        name: 'gap-8',
        optionValue: 'gap-8',
      },
      {
        id: 5,
        name: 'gap-10',
        optionValue: 'gap-10',
      },
    ],
  },

  '버튼 색상': {
    label: '버튼 색상',
    default: 'bg-gray-300',
    animate: true,
    items: [
      {
        id: 1,
        name: 'bg-gray-100',
        optionValue: 'bg-gray-100',
      },
      {
        id: 2,
        name: 'bg-gray-300',
        optionValue: 'bg-gray-300',
      },
      {
        id: 3,
        name: 'bg-gray-500',
        optionValue: 'bg-gray-500',
      },
      {
        id: 4,
        name: 'bg-gray-700',
        optionValue: 'bg-gray-700',
      },
      {
        id: 5,
        name: 'bg-gray-900',
        optionValue: 'bg-gray-900',
      },
    ],
  },

  '버튼 크기': {
    label: '버튼 크기',
    default: 'text-basic',
    animate: true,
    items: [
      {
        id: 1,
        name: 'text-xs',
        optionValue: 'text-xs',
      },
      {
        id: 2,
        name: 'text-basic',
        optionValue: 'text-basic',
      },
      {
        id: 3,
        name: 'text-lg',
        optionValue: 'text-lg',
      },
      {
        id: 4,
        name: 'text-xl',
        optionValue: 'text-xl',
      },
      {
        id: 5,
        name: 'text-2xl',
        optionValue: 'text-2xl',
      },
    ],
  },
};

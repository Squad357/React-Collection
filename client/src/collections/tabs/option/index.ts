import { OptionList } from '@/types/optionList';

export const tabOptionList: OptionList = {
  '버튼 색상': {
    label: '버튼 색상',
    default: 'sky-200',
    animate: false,
    items: [
      {
        id: 1,
        name: 'sky-200',
        optionValue: 'sky-200',
        extra: {
          tag: 'sky-300',
        },
      },
      {
        id: 2,
        name: 'sky-300',
        optionValue: 'sky-300',
        extra: {
          tag: 'sky-400',
        },
      },
      {
        id: 3,
        name: 'pink-200',
        optionValue: 'pink-200',
        extra: {
          tag: 'pink-300',
        },
      },
      {
        id: 4,
        name: 'pink-300',
        optionValue: 'pink-300',
        extra: {
          tag: 'pink-400',
        },
      },
      {
        id: 5,
        name: 'purple-200',
        optionValue: 'purple-200',
        extra: {
          tag: 'purple-300',
        },
      },
      {
        id: 6,
        name: 'purple-300',
        optionValue: 'purple-300',
        extra: {
          tag: 'purple-400',
        },
      },
    ],
  },

  'Border Radius': {
    label: 'Border Radius',
    default: '-sm',
    animate: true,
    items: [
      {
        id: 1,
        name: '-none',
        optionValue: 'None',
      },
      {
        id: 2,
        name: '-sm',
        optionValue: 'Small',
      },
      {
        id: 3,
        name: '-md',
        optionValue: 'Medium',
      },
      {
        id: 4,
        name: '-lg',
        optionValue: 'Large',
      },
      {
        id: 5,
        name: '-xl',
        optionValue: 'Extra Large',
      },
    ],
  },

  Shadow: {
    label: 'Shadow',
    default: 'shadow-none',
    animate: true,
    items: [
      {
        id: 1,
        name: 'shadow-none',
        optionValue: 'None',
      },
      {
        id: 2,
        name: 'shadow-sm',
        optionValue: 'Small',
      },
      {
        id: 3,
        name: 'shadow-md',
        optionValue: 'Medium',
      },
      {
        id: 4,
        name: 'shadow-lg',
        optionValue: 'Large',
      },
      {
        id: 5,
        name: 'shadow-xl',
        optionValue: 'Extra Large',
      },
    ],
  },
};

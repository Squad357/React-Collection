import { Option, OptionList } from '@/types/optionList';

export const buttonOptionList: OptionList = {
  variants: {
    label: 'variants',
    default: 'default',
    animate: true,
    items: [
      {
        id: 1,
        name: 'default',
        optionValue: 'default',
        extra: {
          val: 'bg-blue-500 text-white shadow hover:bg-blue-600',
        },
      },
      {
        id: 2,
        name: 'destructive',
        optionValue: 'destructive',
        extra: {
          val: 'bg-red-500 text-white shadow-sm hover:bg-red-600',
        },
      },
      {
        id: 3,
        name: 'outline',
        optionValue: 'outline',
        extra: {
          val: 'border border-gray-300 bg-white shadow-sm hover:bg-gray-100',
        },
      },
      {
        id: 4,
        name: 'secondary',
        optionValue: 'secondary',
        extra: {
          val: 'bg-gray-200 text-gray-800 shadow-sm hover:bg-gray-300',
        },
      },
      {
        id: 5,
        name: 'ghost',
        optionValue: 'ghost',
        extra: {
          val: 'hover:bg-gray-100 hover:text-gray-800',
        },
      },
      {
        id: 6,
        name: 'link',
        optionValue: 'link',
        extra: {
          val: 'text-blue-500 underline-offset-4 hover:underline',
        },
      },
    ],
  },
  size: {
    label: 'size',
    default: 'default',
    animate: true,
    items: [
      {
        id: 1,
        name: 'default',
        optionValue: 'default',
        extra: {
          val: 'h-10 px-4 py-2',
        },
      },
      {
        id: 2,
        name: 'sm',
        optionValue: 'sm',
        extra: {
          val: 'h-8 rounded-md px-3 text-xs',
        },
      },
      {
        id: 3,
        name: 'lg',
        optionValue: 'lg',
        extra: {
          val: 'h-12 rounded-md px-6 text-lg',
        },
      },
      {
        id: 4,
        name: 'icon',
        optionValue: 'icon',
        extra: {
          val: 'h-10 w-10',
        },
      },
    ],
  },
};

import { OptionList } from '@/types/optionList';

export const buttonOptionList: OptionList = {
  variants: {
    label: 'variants',
    default: 'bg-blue-500 text-white shadow hover:bg-blue-600',
    animate: true,
    items: [
      {
        id: 1,
        name: 'bg-blue-500 text-white shadow hover:bg-blue-600',
        optionValue: 'default',
      },
      {
        id: 2,
        name: 'bg-red-500 text-white shadow-sm hover:bg-red-600',
        optionValue: 'destructive',
      },
      {
        id: 3,
        name: 'border border-gray-300 bg-white shadow-sm hover:bg-gray-100',
        optionValue: 'outline',
      },
      {
        id: 4,
        name: 'bg-gray-200 text-gray-800 shadow-sm hover:bg-gray-300',
        optionValue: 'secondary',
      },
      {
        id: 5,
        name: 'hover:bg-gray-100 hover:text-gray-800',
        optionValue: 'ghost',
      },
      {
        id: 6,
        name: 'text-blue-500 underline-offset-4 hover:underline',
        optionValue: 'link',
      },
    ],
  },
  size: {
    label: 'size',
    default: 'h-10  rounded-md px-4 py-2',
    animate: true,
    items: [
      {
        id: 1,
        name: 'h-10  rounded-md px-4 py-2',
        optionValue: 'default',
      },
      {
        id: 2,
        name: 'h-8 rounded-md px-3 text-xs',
        optionValue: 'sm',
      },
      {
        id: 3,
        name: 'h-12 rounded-md px-6 text-lg',
        optionValue: 'lg',
      },
      {
        id: 4,
        name: 'h-10 w-10',
        optionValue: 'icon',
      },
    ],
  },
};

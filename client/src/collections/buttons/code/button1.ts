import { OptionList } from '@/types/optionList';

export const CodeString = (optionList: OptionList) => {
  // 버튼 variant 옵션
  const variantOptionDefault = optionList.variants?.default || 'default';

  // 버튼 size 옵션
  const sizeOptionDefault = optionList.size?.default || 'default';

  return `import { customButton } from '@/components/customButton';

<CustomButton
  variant="${variantOptionDefault}"
  size="${sizeOptionDefault}"
>
  Button
</CustomButton>`;
};

// export const CodeString = (optionList: Option[]) => {
//   // 버튼 variant 옵션
//   const variantOptionDefault =
//     optionList.find(option => option.label === 'variants')?.default ||
//     'default';

//   // 버튼 size 옵션
//   const sizeOptionDefault =
//     optionList.find(option => option.label === 'size')?.default || 'default';

//   return `import { customButton } from '@/components/customButton';

// <CustomButton
//   variant="${variantOptionDefault}"
//   size="${sizeOptionDefault}"
// >
//   Button
// </CustomButton>`;
// };

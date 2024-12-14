/**
 * 옵션 리스트
 * @type OptionList
 */
export type OptionList = Option[];

/**
 * 옵션 리스트 > 옵션
 * @interface Option
 */
export interface Option {
  label: string;
  default: string;
  items: Item[];
}

/**
 * 옵션 리스트 > 옵션 > 아이템
 * @interface Item
 */
export interface Item {
  id: number;
  name: number | string;
  optionValue: string;
  extra?: {
    tag?: string;
  };
}

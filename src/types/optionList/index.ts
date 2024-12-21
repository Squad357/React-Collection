/**
 * @interface OptionList
 * 옵션 리스트
 */
export interface OptionList {
  [key: string]: Option;
}

/**
 * @interface Option
 * 옵션 리스트 > 옵션
 */
interface Option {
  label: string;
  default: string;
  animate: boolean;
  items: OptionItem[];
}

/**
 * @interface OptionItem
 * 옵션 리스트 > 옵션 > 옵션 아이템
 */
export interface OptionItem {
  id: number;
  name: string;
  optionValue: string;
  extra?: {
    tag?: string;
  };
}

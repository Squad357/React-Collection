import { linkButton } from './linkButton';
import { linkButtonGap } from './linkButtonGap';

/**
 * 옵션 리스트
 * @interface OptionList
 * @property {linkButton} linkButton - 버튼 갯수
 */
export interface OptionList {
  optionList: {
    linkButton?: linkButton;
    linkButtonGap?: linkButtonGap;
  };
}

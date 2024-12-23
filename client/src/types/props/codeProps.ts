import { OptionList } from '../optionList';

export interface CodeProps {
  codeString: string;
  animate: Record<string, boolean>;
  language?: string;
  theme?: string;
  optionList: OptionList;
  gapAnimate?: boolean;
}

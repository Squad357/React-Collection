import { OptionList } from '../optionList';

export interface ShikiCodeProps {
  codeString: string;
  animate: Record<string, boolean>;
  optionList: OptionList;
  language?: string;
  theme?: string;
}

export interface Decoration {
  start: number;
  end: number;
  properties: { class: string };
}

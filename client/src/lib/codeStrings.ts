import { CodeString as header1CodeString } from '@/collections/headers/header1';
import { CodeString as tab1CodeString } from '@/collections/tabs/tab1';
import { CodeString as tab2CodeString } from '@/collections/tabs/tab2';
import { CodeString as button1CodeString } from '@/collections/buttons/button1';
import { OptionList } from '@/types/optionList';

//@ FIXME : type 변경 해야합니다.
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const CodeStrings: Record<string, Function | string> = {
  1: (optionList: OptionList) => header1CodeString(optionList),
  3: (optionList: OptionList) => tab1CodeString(optionList),
  4: tab2CodeString,
  5: (optionList: OptionList) => button1CodeString(optionList),
};

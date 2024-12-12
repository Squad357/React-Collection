import { Option } from '../optionList';
/**
 * @interface PreviewProps
 */
export interface PreviewProps {
  optionList: Option[];
  [key: string]: boolean | Option[];
}

// 버튼 옵션
export interface linkButton {
  label: string;
  default: number;
  items: linkButtonItem[];
}

// 버톤 옵션 아이템
export interface linkButtonItem {
  id: number;
  name: string;
  link: string;
  option: string;
}

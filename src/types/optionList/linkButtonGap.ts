// 간격 옵션
export interface linkButtonGap {
  label: string;
  default: number;
  items: linkButtonGapItem[];
}

// 간격 옵션 아이템
export interface linkButtonGapItem {
  id: number;
  name: string;
  option: string;
}

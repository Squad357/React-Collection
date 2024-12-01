export interface linkButton {
  label: string;
  default: number;
  items: linkButtonItem[];
}

export interface linkButtonItem {
  id: number;
  name: string;
  link: string;
}

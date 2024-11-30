export interface linkButton {
  defaultCount: number;
  items: linkButtonItem[];
}

export interface linkButtonItem {
  id: number;
  name: string;
  link: string;
}

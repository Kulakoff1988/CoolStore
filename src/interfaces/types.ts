export type TTableProps = {
  goods: TGood[];
};

export type TGood = {
  artnumber: string;
  name: string;
  brand: string;
  weight: number;
  quantity: number;
  price: number;
  stock: number;
};

export type TSelectProps = {
  options: string[];
  active: string;
  setActive(arg: string): void;
};

export type TPaginationProps = {
  count: number;
  setStartIndex(arg?: number): void;
  startIndex: number;
};

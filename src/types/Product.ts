export interface IProduct {
  id: string;
  title: string;
  price: number;
  desc?: string;
}

export type TProductList = IProduct[];
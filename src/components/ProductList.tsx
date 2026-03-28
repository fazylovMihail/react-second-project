import type { FC } from "react";
import { ProductCard } from "./ProductCard";
import type { IProduct } from "../types/Product";

interface IProductList {
  products: IProduct[];
  onDelete: (id: IProduct['id']) => void;
}

export const ProductList: FC<IProductList> = ({ products, onDelete }) => {
  return (
    <ul className="product-list">
      {products.map(product => (
        <li key={product.id} className="product-list__item">
          <ProductCard product={product} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
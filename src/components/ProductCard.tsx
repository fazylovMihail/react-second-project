import type { FC } from "react";
import type { IProduct } from "../types/Product";

interface IProductCard {
  product: IProduct;
  onDelete: (id: IProduct['id']) => void;
}

export const ProductCard: FC<IProductCard> = ({ product, onDelete }) => {
  return (
    <div className="product-card">
      <h3 className="product-card__title">{product.title}</h3>
      <span className="product-card__price">{product.price} &#8381;</span>
      {product.desc && <p className="product-card__desc">{product.desc}</p>}
      <button className="btn product-card__delete-btn" onClick={() => onDelete(product.id)}>Удалить</button>
    </div>
  );
};
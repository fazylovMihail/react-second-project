import { useEffect, useState } from "react";
import type { IProduct, TProductList } from "../types/Product";

export function useProducts() {
  const [products, setProducts] = useState<TProductList>(() => {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
  });

  useEffect(() => localStorage.setItem('products', JSON.stringify(products)), [products]);

  const createProduct = (product: IProduct): void => {
    setProducts([...products, product]);
  };
  const deleteProduct = (id: IProduct['id']): void => {
    setProducts(products.filter(product => product.id !== id));
  };

  return [products, createProduct, deleteProduct] as const;
}
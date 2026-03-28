import { useState } from "react";
import { AddBtn } from "./components/AddBtn";
import { ProductForm } from "./components/ProductForm";
import { ProductList } from "./components/ProductList";
import { useProducts } from "./customHooks/useProducts";

import type { SubmitEvent } from "react";

export const App = () => {
  const [products, createProduct, deleteProduct] = useProducts();
  const [isAddClick, setAddClick] = useState(false);

  const handleProductFormOpen = () => setAddClick(true);
  const handleProductFormSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = formData.get('title') as string;
    const price = Number(formData.get('price')) || 0;
    const desc = formData.get('description') as string | null;

    createProduct({
      id: crypto.randomUUID(),
      title,
      price,
      ...(desc && { desc })
    }); setAddClick(false);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="app__wrapper">
          {isAddClick && <ProductForm onSubmit={handleProductFormSubmit} />}
          <AddBtn onClick={handleProductFormOpen} />
          {products.length ? <ProductList products={products} onDelete={deleteProduct} /> : <span className="empty-text">Товаров нет, но вы всегда можете их добавить.</span>}
        </div>
      </div>
    </div>
  );
};
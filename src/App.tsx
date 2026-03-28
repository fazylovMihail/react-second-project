import { useState } from "react";
import { AddBtn } from "./components/AddBtn";
import { ProductForm } from "./components/ProductForm";
import { ProductList } from "./components/ProductList";
import { useProducts } from "./customHooks/useProducts";

export const App = () => {
  const [products, createProduct, deleteProduct] = useProducts();
  const [isAddClick, setAddClick] = useState(false);

  const handleProductFormOpen = () => setAddClick(true);
  const handleProductFormClose = () => setAddClick(false);

  return (
    <div className="app">
      <div className="container">
        <div className="app__wrapper">
          {isAddClick && <ProductForm onSubmit={createProduct} onClose={handleProductFormClose} />}
          <AddBtn onClick={handleProductFormOpen} />
          {products.length
            ?
            <ProductList products={products} onDelete={deleteProduct} />
            :
            <span className="empty-text">Товаров нет, но вы всегда можете их добавить.</span>}
        </div>
      </div>
    </div>
  );
};
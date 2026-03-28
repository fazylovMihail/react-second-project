import type { FC, SubmitEvent } from "react";

interface IProductForm {
  onSubmit: (event: SubmitEvent<HTMLFormElement>) => void;
}

export const ProductForm: FC<IProductForm> = ({ onSubmit }) => {
  return (
    <form action="#" className="product-form" onSubmit={onSubmit}>
      <div className="product-form__content">
        <h2 className="product-form__heading">Добавить Товар</h2>
        <div className="product-form__inner">
          <div className="custom-input">
            <input type="text" className="custom-input__field" name="title" id="input-title" required />
            <label htmlFor="input-title" className="custom-input__label">Название</label>
          </div>
          <div className="custom-input">
            <input type="number" className="custom-input__field" name="price" id="input-price" required />
            <label htmlFor="input-price" className="custom-input__label">Цена</label>
          </div>
          <div className="custom-textarea">
            <textarea className="custom-textarea__field" name="description" id="textarea-description"></textarea>
            <label htmlFor="textarea-description" className="custom-textarea__label">Описание</label>
          </div>
        </div>
        <button className="btn btn--granite-gray">Добавить</button>
      </div>
    </form>
  );
};
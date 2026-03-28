import { useRef, type FC, type SubmitEvent } from "react";
import type { IProduct } from "../types/Product";
import { CustomInput } from "./CustomInput";
import { CustomTextarea } from "./CustomTextarea";

interface IProductForm {
  onSubmit: (product: IProduct) => void;
  onClose: () => void;
}

export const ProductForm: FC<IProductForm> = ({ onSubmit, onClose }) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const priceInputRef = useRef<HTMLInputElement>(null);
  const descTextareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = titleInputRef.current?.value || "";
    const price = Number(priceInputRef.current?.value) || 0;
    const desc = descTextareaRef.current?.value || null;

    onSubmit({
      id: crypto.randomUUID(),
      title,
      price,
      ...(desc && { desc })
    });

    onClose();
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="product-form__content">
        <h2 className="product-form__heading">Добавить Товар</h2>
        <div className="product-form__inner">
          <CustomInput field={{ type: "text", name: "title", id: "input-title", isRequired: true }} ref={titleInputRef} />
          <CustomInput field={{ type: "number", name: "price", id: "input-price", isRequired: true }} ref={priceInputRef} />
          <CustomTextarea field={{ name: 'description', id: 'textarea-description', isRequired: false }} ref={descTextareaRef} />
        </div>
        <button className="btn btn--granite-gray">Добавить</button>
      </div>
    </form>
  );
};
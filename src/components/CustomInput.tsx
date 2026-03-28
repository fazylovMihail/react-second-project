import { type FC, type HTMLInputTypeAttribute, type Ref } from "react";

interface IField {
  type: HTMLInputTypeAttribute;
  name: string;
  id: string;
  isRequired?: boolean;
}

interface ICustomInput {
  field: IField;
  ref: Ref<HTMLInputElement>;
}

export const CustomInput: FC<ICustomInput> = ({ field: { type, name, id, isRequired }, ref }) => {
  return (
    <div className="custom-input">
      <input ref={ref} type={type} className="custom-input__field" name={name} id={id} required={isRequired} />
      <label htmlFor={id} className="custom-input__label">Название</label>
    </div>
  );
};
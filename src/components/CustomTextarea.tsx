import { type FC, type Ref } from "react";

interface IField {
  name: string;
  id: string;
  isRequired: boolean;
}

interface ICustomTextarea {
  field: IField;
  ref: Ref<HTMLTextAreaElement>;
}

export const CustomTextarea: FC<ICustomTextarea> = ({ field: { name, id, isRequired }, ref }) => {
  return (
    <div className="custom-textarea">
      <textarea ref={ref} className="custom-textarea__field" name={name} id={id} required={isRequired}></textarea>
      <label htmlFor={id} className="custom-textarea__label">Описание</label>
    </div>
  );
};
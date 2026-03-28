import type { FC, MouseEventHandler } from "react";

interface IAddBtn {
  onClick: MouseEventHandler;
}

export const AddBtn: FC<IAddBtn> = ({ onClick }) => {
  return (
    <button className="btn" type="button" onClick={onClick}>Добавить товар</button>
  );
};
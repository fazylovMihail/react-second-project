import { useRef, type FC } from "react";

interface IAddBtn {
  onClick: () => void;
}

export const AddBtn: FC<IAddBtn> = ({ onClick }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleOnClick = () => {
    onClick();
    btnRef.current?.blur();
  }

  return (
    <button ref={btnRef} className="btn" type="button" onClick={handleOnClick}>Добавить товар</button>
  );
};
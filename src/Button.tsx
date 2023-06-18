import React from "react";
import "./index.css";

type Props = { variant?: "primary" | "secondary" };

const Button: React.FC<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary";
}> = ({ onClick, variant }) => {
  return (
    <button className={variant} onClick={onClick}>
      Button
    </button>
  );
};

export default Button;

import React from "react";
import StyledButton from "./Button.styled";

const Button: React.FC<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary";
}> = ({ onClick, variant }) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      Button
    </StyledButton>
  );
};

export default Button;
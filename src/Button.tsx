import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 1em 2em;
`;

const Button: React.FC<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

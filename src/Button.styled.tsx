import styled from "styled-components";

type Props = { variant?: "primary" | "secondary" };

const StyledButton = styled.button<Props>`
  background: ${(props) =>
    props.variant === "primary" ? "#8f0f9b" : "transparent"};
  border-radius: 3px;
  border: ${(props) =>
    props.variant === "primary" ? "2px solid #8f0f9b" : "2px solid #000"};
  color: ${(props) => (props.variant === "primary" ? "white" : "#000")};
  margin: 0 1em;
  padding: 1em 2em;

  &:hover {
    background: ${(props) => (props.variant === "primary" ? "#fff" : "#000")};
    color: ${(props) => (props.variant === "primary" ? "#8f0f9b" : "#fff")};
    cursor: pointer;
  }

  &:active {
    background: ${(props) =>
      props.variant === "primary" ? "#f5f5f5" : "#d9d9d9"};
    color: ${(props) => (props.variant === "primary" ? "#8f0f9b" : "#fff")};
    outline: none;
  }
`;

export default StyledButton;

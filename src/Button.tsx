import React from "react";
import styled from "styled-components";

type Props = { variant?: "primary" | "secondary" };

const StyledButton = styled.button<Props>`
    background: ${(props) =>
        props.variant === "primary" ? "#bf4f74" : "transparent"};
    border-radius: 3px;
    border: ${(props) =>
        props.variant === "primary" ? "2px solid #bf4f74" : "2px solid #000"};
    color: ${(props) => (props.variant === "primary" ? "white" : "#000")};
    margin: 0 1em;
    padding: 1em 2em;

    &:hover {
        background: ${(props) => (props.variant === "primary" ? "#fff" : "#000")};
        color: ${(props) => (props.variant === "primary" ? "#bf4f74" : "#fff")};
        cursor: pointer;
    }

    &:focus {
        background: ${(props) => (props.variant === "primary" ? "#f5f5f5" : "#828282")};
        color: ${(props) => (props.variant === "primary" ? "#bf4f74" : "#fff")};
        outline: none;
    }

    &:active {
        background: ${(props) => (props.variant === "primary" ? "#f5f5f5" : "#000")};
        color: ${(props) => (props.variant === "primary" ? "#bf4f74" : "#fff")};
    }
`;

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

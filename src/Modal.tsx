import React, { useState } from "react";
import Button from "./Button";
import city from "./assets/city.svg";
import styled from "styled-components";

const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  height: 700px;
`;

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {!isModalOpen && <Button onClick={handleOpenModal}>Open Modal</Button>}
      {isModalOpen && (
        <div className="modal">
          <StyledModalContent>
            <StyledImg src={city} alt="city" className="svg" />
            {isModalOpen && (
              <Button onClick={handleCloseModal}>Close Modal</Button>
            )}
          </StyledModalContent>
        </div>
      )}
    </div>
  );
};

export default Modal;

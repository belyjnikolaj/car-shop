import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';

import { Backdrop, Container, CloseButton } from './Modal.styled';

const Modal = ({ isOpen, onClose, children }) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscKeyPress = event => {
      if (isOpen && event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    window.addEventListener('keydown', handleEscKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Container id="modal-container">
        <CloseButton onClick={onClose}>
          <IoCloseOutline width={24} height={24} />
        </CloseButton>
        {children}
      </Container>
    </Backdrop>,
    document.getElementById('modal-root')
  );
};

export default Modal;

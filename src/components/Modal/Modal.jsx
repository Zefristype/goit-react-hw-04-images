import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay, ModalContainer } from './Modal.styled';

export const Modal = ({ onClose, modalImage }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const onBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <Overlay onClick={onBackDropClick}>
      <ModalContainer>
        <img src={modalImage.largeImageURL} alt={modalImage.tags} />
      </ModalContainer>
    </Overlay>,
    document.querySelector('#modal-root')
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  modalImage: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

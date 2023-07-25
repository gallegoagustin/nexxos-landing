import React, { useEffect } from 'react';
import Modal, { Styles } from 'react-modal';

const customStyles: Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px',
  },
};

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Iniciar el temporizador para cerrar el modal después de 3 segundos
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      // Limpiar el temporizador cuando el componente se desmonta o el modal se cierra manualmente
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Success Modal"
    >
      <p>¡Formulario enviado con éxito!</p>
      <button onClick={onClose}>Cerrar</button>
    </Modal>
  );
}

export default SuccessModal;

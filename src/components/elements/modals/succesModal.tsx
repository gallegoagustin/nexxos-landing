import useDynamicTranslation from '@/components/hooks/useDynamicTranslation';
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
    width: '400px',
    padding: '40px',
    textAlign: 'center',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
};

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const { i18nContact } = useDynamicTranslation();

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
      <p>{i18nContact('sentTitle')}</p>
      <p>{i18nContact('sentMessage')}</p>
      <button
        className="main-red-button text-WHITE py-2 px-4 rounded-lg transition duration-300 hover:bg-RED_G20 w-[200px]"
        onClick={onClose}
      >
        {i18nContact('close')}
      </button>
    </Modal>
  );
}

export default SuccessModal;

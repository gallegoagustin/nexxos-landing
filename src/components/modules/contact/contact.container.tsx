import React, { useState } from 'react';
import Contact from './contact';
import { sendContactForm } from '@/lib/api';

export default function ContactContainer() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('voluntario');
  const [isLoading, setIsLoading] = useState(false);
  const [sendError, setSendError] = useState('');

  // Estado para controlar el mensaje de éxito y el modal
  const [isSuccess, setIsSuccess] = useState(false);

  // Función para abrir el modal de éxito
  const handleSuccessModalOpen = () => {
    setIsSuccess(true);
  };

  // Función para cerrar el modal de éxito
  const handleSuccessModalClose = () => {
    setIsSuccess(false);
  };

  const [formErrors, setFormErrors] = useState({
    name: false,
    lastname: false,
    email: false,
    message: false,
    type: false,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Antes de enviar, validaciones:
    const hasErrors = !name || !lastname || !email || !message || !type;

    if (hasErrors) {
      setFormErrors({
        name: !name,
        lastname: !lastname,
        email: !email,
        message: !message,
        type: !type,
      });
    } else {
      setIsLoading(true);
      try {
        await sendContactForm({ name, lastname, email, message, type });
        handleSuccessModalOpen();
        setEmail('');
        setName('');
        setLastname('');
        setMessage('');
        // mostrar un mensaje de éxito.
      } catch (error: any) {
        setIsLoading(false);
        setSendError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBlur = (field: any) => {
    if (field === 'name') {
      setFormErrors((prevErrors) => ({ ...prevErrors, name: !name }));
    } else if (field === 'lastname') {
      setFormErrors((prevErrors) => ({ ...prevErrors, lastname: !lastname }));
    } else if (field === 'email') {
      setFormErrors((prevErrors) => ({ ...prevErrors, email: !email }));
    } else if (field === 'message') {
      setFormErrors((prevErrors) => ({ ...prevErrors, message: !message }));
    } else if (field === 'type') {
      setFormErrors((prevErrors) => ({ ...prevErrors, type: !type }));
    }
  };

  const sendWhatsappLink = ({
    phoneNumber,
    message,
  }: {
    phoneNumber: number;
    message: string;
  }) => {
    const phoneNumberSanitized = phoneNumber;
    const messageSanitized = message;

    const url = `https://wa.me/${phoneNumberSanitized}?text=${messageSanitized}`;

    return url;
  };

  const childProps = {
    name,
    setName,
    lastname,
    setLastname,
    email,
    setEmail,
    message,
    setMessage,
    type,
    setType,
    isLoading,
    sendError,
    formErrors,
    handleSubmit,
    handleBlur,
    sendWhatsappLink,
    isSuccess,
    handleSuccessModalClose,
  };

  return <Contact {...childProps} />;
}

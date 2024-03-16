import React from 'react';
import FourOFour from './fourOFour';

export default function FourOFourContainer() {
  const title = 'ERROR 404';
  const message = 'Se ha producido un error inesperado';
  const message2 = 'No hemos podido encontrar la página que buscas.';

  const childProps = {
    title,
    message,
    message2,
  };

  return <FourOFour {...childProps} />;
}

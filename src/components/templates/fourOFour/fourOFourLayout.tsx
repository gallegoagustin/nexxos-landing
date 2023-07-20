import React from 'react';

export default function FourOFourLayout() {
  return (
    <main className={'w-full h-full col centered text-center'}>
      <h2 className={'text-TEXT_GREEN font-neue font-bold'}>ERROR 404</h2>
      <h1 className={'text-3xl'}>
        Se ha producido
        <br />
        un error inesperado
      </h1>
      <p className={'mt-4'}>No hemos podido encontrar la página que buscas.</p>
    </main>
  );
}

import React from 'react';

interface Props {
  title: string;
  message: string;
  message2: string;
}

export default function FourOFour({ title, message, message2 }: Props) {
  return (
    <section className={'h-[100vh] col centered text-center'}>
      <h2 className={'text-TEXT_GREEN font-neue font-bold'}>{title}</h2>
      <h1 className={'text-3xl'}>{message}</h1>
      <p className={'mt-4'}>{message2}</p>
    </section>
  );
}

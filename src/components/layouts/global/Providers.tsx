import React from 'react';
import { ThemeProvider } from 'next-themes';

export const Providers = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      themes={['light']}
      defaultTheme="light"
    >
      {children}
    </ThemeProvider>
  );
};

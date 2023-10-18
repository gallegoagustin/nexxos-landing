import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <ThemeProvider enableSystem={false} forcedTheme={'light'}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;

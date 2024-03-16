import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import Modal from 'react-modal';
import SeoLayout from '../components/elements/seo-layout';
import { appWithTranslation } from 'next-i18next';
import Layout, { LayoutType } from '@/components/layouts/global/Layout';

Modal.setAppElement('#__next');

interface ComponentProp extends React.ComponentClass<any> {
  layout?: LayoutType;
}

interface ApplicationProps extends React.ComponentClass<AppProps, any> {
  Component: ComponentProp;
  pageProps: any;
}

const App: React.ComponentType<any> = ({
  Component,
  pageProps,
}: ApplicationProps) => {
  return (
    <Layout name={Component.layout as LayoutType}>
      <SeoLayout />
      <Component {...pageProps} />
    </Layout>
  );
};

const AppWithI18n = appWithTranslation(App);

export default AppWithI18n;

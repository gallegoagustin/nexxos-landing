import React from 'react';
import { LayoutType } from '@/components/layouts/global/Layout';
import { NextPageContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { locales } from '@/config/i18n';
import PageLayout from '@/components/layouts/page-layout';
import Home from '@/components/modules/home';

export default function HomePage() {
  const [hydrated, setHydrated] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <PageLayout activeTab={'home'}>
      <Home />
    </PageLayout>
  );
}

HomePage.layout = LayoutType.HOME;

export const getServerSideProps = async (context: NextPageContext) => {
  const { req, query, locale = 'es' } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, locales)),
    },
  };
};

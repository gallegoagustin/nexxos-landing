import React from 'react';
import PageLayout from '@/components/layouts/page-layout';
import Contact from '@/components/modules/contact';
import { LayoutType } from '@/components/layouts/global/Layout';
import { NextPageContext } from 'next';
import { locales } from '@/config/i18n';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ContactPage() {
  const [hydrated, setHydrated] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <PageLayout activeTab={'contact'}>
      <Contact />
    </PageLayout>
  );
}

ContactPage.layout = LayoutType.CONTACT;

export const getServerSideProps = async (context: NextPageContext) => {
  const { req, query, locale = 'es' } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, locales)),
    },
  };
};

import React from 'react';
import PageLayout from '@/components/layouts/page-layout';
import Activities from '@/components/modules/activities';
import { LayoutType } from '@/components/layouts/global/Layout';
import { NextPageContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { locales } from '@/config/i18n';

export default function ActivitiesPage() {
  const [hydrated, setHydrated] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <PageLayout activeTab={'activities'}>
      <Activities />
    </PageLayout>
  );
}

ActivitiesPage.layout = LayoutType.ACTIVITIES;

export const getServerSideProps = async (context: NextPageContext) => {
  const { req, query, locale = 'es' } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, locales)),
    },
  };
};

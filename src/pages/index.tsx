import React from 'react';
import Head from 'next/head';
import Layout from '@/components/templates/bodyLayout/layout';
import HomeTemplate from '@/components/templates/home/homeTemplate';

export default function Home() {
  const [hydrated, setHydrated] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <Layout activeTab={'home'}>
      <>
        <Head>
          <title>NEXXOS | El lado correcto de la educación</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomeTemplate />
      </>
    </Layout>
  );
}

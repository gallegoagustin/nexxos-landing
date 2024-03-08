import React from 'react';
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
      <HomeTemplate />
    </Layout>
  );
}

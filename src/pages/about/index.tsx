import React from 'react';
import Layout from '@/components/templates/bodyLayout/layout';
import AboutTemplate from '@/components/templates/about/aboutTemplate';

export default function About() {
  const [hydrated, setHydrated] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <Layout activeTab={'about'}>
      <AboutTemplate />
    </Layout>
  );
}

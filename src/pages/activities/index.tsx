import React from 'react';
import ActivitiesTemplate from '@/components/templates/activities/activitiesTemplate';
import Layout from '@/components/templates/bodyLayout/layout';

export default function Home() {
  const [hydrated, setHydrated] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <Layout activeTab={'activities'}>
      <ActivitiesTemplate />
    </Layout>
  );
}

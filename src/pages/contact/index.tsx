import React from 'react';
import ContactTemplate from '@/components/templates/contact/contactTemplate';
import Layout from '@/components/templates/bodyLayout/layout';

export default function Contact() {
  const [hydrated, setHydrated] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <Layout activeTab={'contact'}>
      <ContactTemplate />
    </Layout>
  );
}

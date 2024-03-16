import React from 'react';
import Head from 'next/head';
import { Providers } from './Providers';

import AboutLayout from '../about';
import ActivitiesLayout from '../activities';
import ContactLayout from '../contact';
import FourOFourLayout from '../fourOFour';
import HomeLayout from '../home';

export enum LayoutType {
  ABOUT = 'ABOUT',
  ACTIVITIES = 'ACTIVITIES',
  CONTACT = 'CONTACT',
  FOUR_O_FOUR = 'FOUR_O_FOUR',
  HOME = 'HOME',
}

const renderWithLayout = ({
  name,
  children,
}: {
  name: LayoutType;
  children: React.ReactNode;
}) => {
  switch (name) {
    case LayoutType.ABOUT:
      return <AboutLayout>{children}</AboutLayout>;
    case LayoutType.ACTIVITIES:
      return <ActivitiesLayout>{children}</ActivitiesLayout>;
    case LayoutType.CONTACT:
      return <ContactLayout>{children}</ContactLayout>;
    case LayoutType.FOUR_O_FOUR:
      return <FourOFourLayout>{children}</FourOFourLayout>;
    case LayoutType.HOME:
      return <HomeLayout>{children}</HomeLayout>;
    default:
      return <>{children}</>;
  }
};

const Layout = ({
  name,
  children,
}: {
  name: LayoutType;
  children: React.ReactNode;
}) => {
  return (
    <Providers>
      <Head>
        <meta charSet="utf-8" />
        <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
        <meta content="utf-8" httpEquiv="encoding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div data-theme="nexxos">{renderWithLayout({ name, children })}</div>
    </Providers>
  );
};

export default Layout;

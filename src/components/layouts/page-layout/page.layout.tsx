/**
 * Renders a page layout component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the layout.
 * @param {string | null} props.activeTab - The active tab in the navigation bar.
 * @returns {JSX.Element} The rendered page layout.
 */

import React from 'react';
import NavBar from '@/components/elements/navBar/navBar.container';
import Footer from '@/components/elements/footer/footer';

interface Props {
  children?: React.ReactNode;
  activeTab: string;
  className?: string;
}

function PageLayout({ children, activeTab, className }: Props): JSX.Element {
  return (
    <>
      <div
        className={`col w-full h-full min-h-screen flex flex-col ${
          className || ''
        }`}
      >
        <NavBar activeTab={activeTab} />
        <main className="col flex-1 flex min-h-[100vh]">
          <div className="full flex-1 p-6 pl-10 pr-10 lg:pl-16 2xl:pl-44 2xl:pr-44 py-10">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default PageLayout;

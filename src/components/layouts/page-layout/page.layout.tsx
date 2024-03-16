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
import NavBar from '@/components/elements/nav-bar';
import Footer from '@/components/elements/footer';

interface Props {
  children?: React.ReactNode;
  activeTab: string;
  className?: string;
}

function PageLayout({ children, activeTab, className }: Props): JSX.Element {
  return (
    <div
      className={`col w-full h-full min-h-screen col  max-w-[1920px] ${
        className || ''
      }`}
    >
      <NavBar activeTab={activeTab} />
      <main className="col flex-1 min-h-[100vh]">
        <div className="full flex-1">{children}</div>
        <Footer />
      </main>
    </div>
  );
}

export default PageLayout;

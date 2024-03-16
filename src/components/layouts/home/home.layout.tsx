import React, { ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="overflow-y-auto">
      <div className="full">{children}</div>
    </div>
  );
}

export default HomeLayout;

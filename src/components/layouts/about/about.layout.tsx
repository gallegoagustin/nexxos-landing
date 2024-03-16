import React, { ReactNode } from 'react';

interface AboutLayoutProps {
  children: ReactNode;
}

function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div className="overflow-y-auto">
      <div className="full">{children}</div>
    </div>
  );
}

export default AboutLayout;

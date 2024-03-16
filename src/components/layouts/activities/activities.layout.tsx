import React, { ReactNode } from 'react';

interface ActivitiesLayoutProps {
  children: ReactNode;
}

function ActivitiesLayout({ children }: ActivitiesLayoutProps) {
  return (
    <div className="overflow-y-auto">
      <div className="full">{children}</div>
    </div>
  );
}

export default ActivitiesLayout;

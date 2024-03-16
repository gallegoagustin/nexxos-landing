import React, { ReactNode } from 'react';

interface FourOFourLayoutProps {
  children: ReactNode;
}

function FourOFourLayout({ children }: FourOFourLayoutProps) {
  return (
    <div className="overflow-y-auto">
      <div className="full">{children}</div>
    </div>
  );
}

export default FourOFourLayout;

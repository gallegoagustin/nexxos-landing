import React, { ReactNode } from 'react';

interface ContactLayoutProps {
  children: ReactNode;
}

function ContactLayout({ children }: ContactLayoutProps) {
  return (
    <div className="overflow-y-auto">
      <div className="full">{children}</div>
    </div>
  );
}

export default ContactLayout;

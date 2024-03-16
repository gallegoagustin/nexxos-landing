import React from 'react';
import FourOFour from '@/components/modules/fourOFour';
import { LayoutType } from '@/components/layouts/global/Layout';

export default function FourOFourPage() {
  return <FourOFour />;
}

FourOFourPage.layout = LayoutType.FOUR_O_FOUR;

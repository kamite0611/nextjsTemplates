import { ReactNode } from 'react';

import { PageConfig } from '@/config';

import { CustomHead } from '../layout/CustomHead';

type PageProps = {
  children?: ReactNode;
  config?: PageConfig;
};

export const Page = ({ children, config }: PageProps) => {
  return (
    <>
      <CustomHead config={config || {}} />
      {children}
    </>
  );
};

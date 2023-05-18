import React, { ReactNode } from 'react';

import ThemeProvider from '@/common/theme';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = (props: ProvidersProps) => {
  return (
    <>
      <ThemeProvider>{props.children}</ThemeProvider>
    </>
  );
};

export default Providers;

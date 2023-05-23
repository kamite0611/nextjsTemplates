import { ReactNode } from 'react';

import ThemeProvider from '@/common/theme';

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers(props: ProvidersProps) {
  return (
    <>
      <ThemeProvider>{props.children}</ThemeProvider>
    </>
  );
}

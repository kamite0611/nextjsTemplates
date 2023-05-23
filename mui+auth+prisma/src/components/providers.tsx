import { ReactNode } from 'react';

import ThemeProvider from '@/common/theme';
import { AuthProvider } from '@/libs/firebase';

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers(props: ProvidersProps) {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>{props.children}</ThemeProvider>
      </AuthProvider>
    </>
  );
}

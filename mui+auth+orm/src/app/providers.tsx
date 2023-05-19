import React, { ReactNode } from 'react';

import ThemeProvider from '@/common/theme';
import { AuthProvider } from '@/libs/firebase/AuthContext';

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

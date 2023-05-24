import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

import { useTransition } from '@/common/hooks';
import Layout from '@/components/layout';
import Providers from '@/components/providers';
import { AuthProvider } from '@/libs/firebase';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
  useTransition();
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <AuthProvider>
        <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
      </AuthProvider>
    </>
  );
}

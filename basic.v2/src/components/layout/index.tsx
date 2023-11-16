import { ReactNode } from 'react';

import { useTransition } from '@/common/hooks';

type LayoutProps = {
  children: ReactNode;
  transition?: boolean;
};

export const Layout = ({ children, transition = true }: LayoutProps) => {
  useTransition({ disable: !transition });
  return <>{children}</>;
};

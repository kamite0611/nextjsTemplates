import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  variant?: 'main' | 'dashboard' | 'guest';
};

export default function Layout({ variant = 'dashboard', children }: Props) {
  return <> {children} </>;
}

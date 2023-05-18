import React, { ReactNode } from 'react';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = (props: ProvidersProps) => {
  return <>{props.children}</>;
};

export default Providers;

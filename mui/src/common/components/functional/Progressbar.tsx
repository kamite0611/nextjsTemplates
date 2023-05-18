'use client';
import { useEffect } from 'react';

import nProgress from 'nprogress';

export const Progressbar = () => {
  useEffect(() => {
    nProgress.start();
    return () => {
      nProgress.done();
    };
  }, []);

  return <></>;
};

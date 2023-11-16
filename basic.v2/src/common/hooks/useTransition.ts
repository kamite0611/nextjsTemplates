import 'nprogress/nprogress.css';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import NProgress from 'nprogress';

type UseTransitionProps = {
  disable?: boolean;
};

export const useTransition = ({ disable }: UseTransitionProps) => {
  const router = useRouter();

  useEffect(() => {
    if (disable) return;

    const handleStart = () => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    const handleComplete = () => {
      handleStop();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
};

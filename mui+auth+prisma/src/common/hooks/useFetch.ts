import { useAuth } from '@/libs/firebase';

type UseFetchProps = {
  auth: boolean;
};

export const useFetch = (params?: UseFetchProps) => {
  const isUseAuth = params?.auth || false;
  const { currentUser, isInitialized } = useAuth();

  const headers = {
    'Content-Type': 'application/json',
    Authorization: currentUser && `Bearer ${currentUser.token}`,
  };

  console.log('headers', headers);

  const get = async (url: string, auth: boolean) => {
    const requestOptions = {
      method: 'GET',
    };
    return await fetch(url, requestOptions);
  };

  return {
    get,
  };
};

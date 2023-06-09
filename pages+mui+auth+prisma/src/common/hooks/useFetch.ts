import { useState } from 'react';

import { useAuth } from '@/libs/firebase';

import { FormedResponse, sleep } from '../utils';

interface FetchConfig extends RequestInit {
  method: string;
  useAuth?: boolean;
}

export const useFetch = () => {
  const { isInitialized, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  async function getAuthToken(): Promise<string | null> {
    if (!isInitialized) {
      await sleep(500);
      return getAuthToken();
    }

    return currentUser?.token || null;
  }

  async function genHeader(isAuth = true) {
    if (!isAuth) return { 'Content-Type': 'application/json', authorization: '' };
    return {
      'Content-Type': 'application/json',
      authorization: `Bearer ${(await getAuthToken()) || ''}`,
    };
  }

  async function fetchRequest<T>(url: string, options: FetchConfig) {
    try {
      setLoading(true);
      const res = await fetch(url, options);
      const result = (await res.json()) as never as FormedResponse<T>;

      if (result.error) {
        setError(result.error);
        throw Error(result.error.message);
      }

      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);

      /**
       * TODO add common error handling
       */

      throw Error(error.message);
    }
  }

  /** customize GET request */
  async function get<T>(url: string, config?: FetchConfig) {
    const requestOptions: FetchConfig = {
      method: 'GET',
      headers: await genHeader(config?.useAuth),
      ...config,
    };

    return await fetchRequest<T>(url, requestOptions);
  }

  /** customize POST request */
  async function post<T>(url: string, body?: Record<string, any>, config?: FetchConfig) {
    const requestOptions: FetchConfig = {
      body: JSON.stringify(body),
      method: 'POST',
      headers: await genHeader(config?.useAuth),
      ...config,
    };
    return await fetchRequest<T>(url, requestOptions);
  }

  /** customize DELETE request */
  async function destroy<T>(url: string, body?: Record<string, any>, config?: FetchConfig) {
    const requestOptions: FetchConfig = {
      body: JSON.stringify(body),
      method: 'DELETE',
      headers: await genHeader(config?.useAuth),
      ...config,
    };
    return await fetchRequest<T>(url, requestOptions);
  }

  return {
    get,
    post,
    destroy,
    loading,
    error,
  };
};

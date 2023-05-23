import Link from 'next/link';

import { Button, Stack } from '@mui/material';

import { useAuth } from '@/libs/firebase';

type RootPageProps = {};

export default function RootPage(props: RootPageProps) {
  const { isInitialized, isAuthenticated, login, logout } = useAuth();

  return (
    <>
      <Link href="/users" className="mb-1">
        go to UserListPage
      </Link>

      {isInitialized && (
        <Stack>
          {!isAuthenticated && <Button onClick={login}>login</Button>}
          {isAuthenticated && <Button onClick={logout}>logout</Button>}
        </Stack>
      )}
    </>
  );
}

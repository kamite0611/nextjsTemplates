'use client';
import Link from 'next/link';

import { Stack } from '@mui/material';

type TopPageProps = {};

export default function TopPage(props: TopPageProps) {
  return (
    <>
      <Stack alignItems="center">
        <Link href="/users">go to UserListPage</Link>
      </Stack>
    </>
  );
}

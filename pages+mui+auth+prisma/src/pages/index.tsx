import Link from 'next/link';

import { Stack } from '@mui/material';

export default function Home() {
  return (
    <>
      <Stack>hello home</Stack>
      <Link href="/users">go UserList</Link>
    </>
  );
}

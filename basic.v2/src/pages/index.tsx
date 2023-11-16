import { Stack } from '@mui/material';

import { Page } from '@/components/functional';

export default function Home() {
  return (
    <Page>
      <Stack
        sx={{
          padding: 2,
          maxWidth: '800px',
          width: '100%',
          margin: 'auto',
          my: 5,
        }}
      ></Stack>
    </Page>
  );
}

import Link from 'next/link';
import React from 'react';

import { User } from '@prisma/client';

import { Stack } from '@mui/material';

type UserListItemProps = {
  user: User;
};

export const UserListItem = ({ user }: UserListItemProps) => {
  return (
    <Stack alignItems="center" direction="row">
      <Link href={`/users/${user.id}`}>{user.id}</Link>: {user.name}
    </Stack>
  );
};

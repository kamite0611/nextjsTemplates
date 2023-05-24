import Link from 'next/link';
import React from 'react';

import { Stack } from '@mui/material';

import { IUser } from '../type';

type UserListItemProps = {
  user: IUser;
};

export const UserListItem = ({ user }: UserListItemProps) => {
  return (
    <Stack alignItems="center" direction="row">
      <Link href={`/users/${user.id}`}>{user.id}</Link>: {user.name}
    </Stack>
  );
};

import React from 'react';

import { User } from '@prisma/client';

import { DeleteOutline } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';

import { UserListItem } from './UserListItem';

type UserListProps = {
  users: User[];
  onDelete?: (userId: string) => void;
};

export const UserList = ({ users, onDelete }: UserListProps) => {
  return (
    <>
      {users.map((user) => {
        return (
          <Stack key={user.id} direction="row" alignItems="center">
            <UserListItem user={user} />
            {onDelete && (
              <IconButton onClick={() => onDelete(user.id)}>
                <DeleteOutline />
              </IconButton>
            )}
          </Stack>
        );
      })}
    </>
  );
};

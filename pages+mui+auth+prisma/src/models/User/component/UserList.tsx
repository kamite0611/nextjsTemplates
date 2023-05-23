import React from 'react';

import { User } from '@prisma/client';

import { UserListItem } from './UserListItem';

type UserListProps = {
  users: User[];
};

export const UserList = ({ users }: UserListProps) => {
  return (
    <div>
      {users.map((user) => {
        return <UserListItem key={user.id} user={user} />;
      })}
    </div>
  );
};

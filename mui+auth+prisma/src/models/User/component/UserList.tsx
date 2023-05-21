import React from 'react';

import { UserListItem } from './UserListItem';
import { IUser } from '../type';

type UserListProps = {
  users: IUser[];
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

import Link from 'next/link';
import React from 'react';

import { IUser } from '../type';

type UserListItemProps = {
  user: IUser;
};

export const UserListItem = ({ user }: UserListItemProps) => {
  return (
    <div>
      <Link href={`/users/${user.id}`}>{user.id}</Link>: {user.name}
    </div>
  );
};

import Link from 'next/link';
import React from 'react';

import { User } from '@prisma/client';

type UserListItemProps = {
  user: User;
};

export const UserListItem = ({ user }: UserListItemProps) => {
  return (
    <div>
      <Link href={`/users/${user.id}`}>{user.id}</Link>: {user.name}
    </div>
  );
};

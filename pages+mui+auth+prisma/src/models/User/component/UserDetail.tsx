import React from 'react';

import { User } from '@prisma/client';

type UserDetailProps = {
  user: User;
};

export const UserDetail = ({ user }: UserDetailProps) => {
  return (
    <div>
      <div>ID: {user.id}</div>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
    </div>
  );
};

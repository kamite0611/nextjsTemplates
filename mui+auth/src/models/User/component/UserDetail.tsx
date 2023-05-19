import React from 'react';

import { IUser } from '../type';

type UserDetailProps = {
  user: IUser;
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

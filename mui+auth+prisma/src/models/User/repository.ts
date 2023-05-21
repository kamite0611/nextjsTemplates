import { nanoid } from 'nanoid';

import { IUser } from './type';

export const getUsers = async (): Promise<IUser[]> => {
  return [
    {
      id: nanoid(),
      name: 'User1',
      email: 'testuser1@example.com',
    },
    {
      id: nanoid(),
      name: 'User2',
      email: 'testuser2@example.com',
    },
    {
      id: nanoid(),
      name: 'User3',
      email: 'testuser3@example.com',
    },
  ];
};

export const findUser = async (): Promise<IUser> => {
  return {
    id: nanoid(),
    name: 'User1',
    email: 'testuser1@example.com',
  };
};

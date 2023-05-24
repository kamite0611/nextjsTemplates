import { User } from '@prisma/client';

export type IUser = User;

export type UserNew = {
  email: string;
  name: string;
};

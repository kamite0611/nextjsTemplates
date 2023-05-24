import { genID } from '@/libs/nanoid';
import { prisma } from '@/libs/prisma';

import { IUser, UserNew } from '.';

export const getUsers = async (): Promise<IUser[]> => {
  const users = await prisma.user.findMany();
  return users;
};

export const findUser = async (id: string): Promise<IUser | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
};

export const createUser = async (data: UserNew): Promise<IUser> => {
  const user = await prisma.user.create({
    data: {
      id: genID(),
      name: data.name,
      email: data.email,
    },
  });

  return user;
};

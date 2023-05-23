import { User } from '@prisma/client';

import { genID } from '@/libs/nanoid';
import { prisma } from '@/libs/prisma';

import { UserNew } from './type';

export const getUsers = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();
  return users;
};

export const findUser = async (id: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
};

export const createUser = async (data: UserNew): Promise<User> => {
  const user = await prisma.user.create({
    data: {
      id: genID(),
      name: data.name,
      email: data.email,
    },
  });

  return user;
};

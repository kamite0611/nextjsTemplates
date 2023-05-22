import { Metadata } from 'next';

import { SERVICE_NAME } from '@/config';
import { UserList, createUser, getUsers } from '@/models/User';
import { UserNewForm } from '@/models/User/component/UserNewForm';
import { UserNew } from '@/models/User/type';

export const metadata: Metadata = {
  title: `UserList | ${SERVICE_NAME}`,
};

type UserListPageProps = {};
export default async function UserListPage(props: UserListPageProps) {
  const users = await getUsers();

  const handleSubmit = async (data: UserNew) => {
    'use server';
    await createUser(data);
  };

  return (
    <>
      <UserNewForm onSubmit={handleSubmit} />
      <UserList users={users} />
    </>
  );
}

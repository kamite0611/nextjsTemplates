import { Metadata } from 'next';

import { SERVICE_NAME } from '@/config';
import { UserList, getUsers } from '@/models/User';
import { UserNewForm } from '@/models/User/component/UserNewForm';

export const metadata: Metadata = {
  title: `UserList | ${SERVICE_NAME}`,
};

type UserListPageProps = {};
export default async function UserListPage(props: UserListPageProps) {
  const users = await getUsers();

  return (
    <>
      <UserNewForm />
      <UserList users={users} />
    </>
  );
}

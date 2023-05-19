import { Metadata } from 'next';

import { SERVICE_NAME } from '@/config';
import { UserList, getUsers } from '@/models/User';

export const metadata: Metadata = {
  title: `UserList | ${SERVICE_NAME}`,
};

type UserListPageProps = {};
export default async function UserListPage(props: UserListPageProps) {
  const users = await getUsers();
  return <UserList users={users} />;
}

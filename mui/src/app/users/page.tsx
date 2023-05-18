import { UserList, getUsers } from '@/models/User';

import { SERVICE_NAME } from '@/config';

export const metadata = {
  title: `${SERVICE_NAME} 顧客リスト`,
};

type UserListPageProps = {};

export default async function UserListPage(props: UserListPageProps) {
  const users = await getUsers();
  return (
    <>
      <UserList users={users} />
    </>
  );
}

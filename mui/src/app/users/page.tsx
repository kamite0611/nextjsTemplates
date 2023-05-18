import { SERVICE_NAME } from '@/config';
import { UserList, getUsers } from '@/models/User';

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

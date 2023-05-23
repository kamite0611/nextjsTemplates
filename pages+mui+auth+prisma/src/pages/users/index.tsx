import { GetServerSideProps } from 'next';

import { User } from '@prisma/client';

import { UserList, getUsers } from '@/models/User';

type UserListPageProps = {
  users: User[];
};

export default function UserListPage(props: UserListPageProps) {
  const { users } = props;
  return (
    <>
      <UserList users={users} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await getUsers();
  return { props: { users } };
};

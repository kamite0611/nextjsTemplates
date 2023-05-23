import { GetServerSideProps } from 'next';
import { useState } from 'react';

import { User } from '@prisma/client';

import { UserList, UserNewForm, getUsers } from '@/models/User';

type UserListPageProps = {
  users: User[];
};

export default function UserListPage(props: UserListPageProps) {
  const [users, setusers] = useState(props.users);

  return (
    <>
      <UserNewForm />
      <UserList users={users} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await getUsers();
  return { props: { users } };
};

import { GetServerSideProps } from 'next';
import { useState } from 'react';

import { User } from '@prisma/client';

import { useFetch } from '@/common/hooks/useFetch';
import { UserList, UserNewForm, getUsers } from '@/models/User';
import { UserNew } from '@/models/User/type';

type UserListPageProps = {
  users: User[];
};

export default function UserListPage(props: UserListPageProps) {
  const { post } = useFetch();
  const [users, setUser] = useState<User[]>(props.users);

  const handleSubmitNew = async (data: UserNew) => {
    const res = await post<User>('/api/users', data);

    console.log('handleSubmitNew res', res);

    const newUser = res.content;
    setUser((prev) => [newUser, ...prev]);
  };

  return (
    <>
      <UserNewForm onSubmit={handleSubmitNew} />
      <UserList users={users} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await getUsers();
  return { props: { users } };
};

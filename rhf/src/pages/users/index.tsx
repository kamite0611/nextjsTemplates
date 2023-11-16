import { useState } from 'react';

import { User } from '@prisma/client';

import { useFetch } from '@/common/hooks/useFetch';
import { UserList, UserNewForm, getUsers } from '@/models/User';
import { UserNew } from '@/models/User/type';

type UserListPageProps = {
  users: User[];
};

/**
 * ユーザー一覧画面
 */
export default function UserListPage(props: UserListPageProps) {
  const { post, destroy } = useFetch();
  const [users, setUser] = useState<User[]>(props.users);

  /** ユーザーの新規作成 */
  const handleSubmitNew = async (data: UserNew) => {
    try {
      const res = await post<User>('/api/users', data);
      const newUser = res.content;
      setUser((prev) => [newUser, ...prev]);
    } catch {
      /** TODO add catch */
    }
  };

  /** ユーザーの削除 */
  const handleClickDelete = async (userId: string) => {
    try {
      await destroy<User>(`/api/users/${userId}`);
      setUser((prev) => prev.filter((user) => user.id !== userId));
    } catch {
      /** TODO add catch */
    }
  };

  return (
    <>
      <UserNewForm onSubmit={handleSubmitNew} />
      <UserList users={users} onDelete={handleClickDelete} />
    </>
  );
}

export const getStaticProps = async () => {
  const users = await getUsers();
  return { props: { users } };
};

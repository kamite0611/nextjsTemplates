import { GetServerSideProps } from 'next';

import { User } from '@prisma/client';

import { UserDetail, findUser } from '@/models/User';

type UserDetailPageProps = {
  user: User;
};

export default function UserDetailPage(props: UserDetailPageProps) {
  const { user } = props;

  return (
    <>
      <UserDetail user={user} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context.query.userId as string;

  const user = await findUser(userId);

  return { props: { user } };
};

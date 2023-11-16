import { GetStaticPaths, GetStaticProps } from 'next';

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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const userId = params?.userId as string;

  const user = await findUser(userId);

  return { props: { user } };
};

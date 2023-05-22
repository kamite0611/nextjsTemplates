import { Metadata } from 'next';
import React from 'react';

import { SERVICE_NAME } from '@/config';
import { UserDetail, findUser } from '@/models/User';

export const metadata: Metadata = {
  title: `${SERVICE_NAME} ユーザー詳細`,
};

type UserDetailPageProps = {
  params: { userId: string };
};

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  const { userId } = params;
  const user = await findUser(userId);

  return <UserDetail user={user} />;
}

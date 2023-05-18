import { Metadata } from 'next';
import React from 'react';

import { SERVICE_NAME } from '@/config';
import { UserDetail, findUser } from '@/models/User';

export const metadata: Metadata = {
  title: `${SERVICE_NAME} ユーザー詳細`,
};

export default async function UserDetailPage() {
  const user = await findUser();

  return <UserDetail user={user} />;
}

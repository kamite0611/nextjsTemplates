import { NextApiRequest, NextApiResponse } from 'next';

import { User } from '@prisma/client';

import { handleApiRoute } from '@/common/utils';
import { createUser } from '@/models/User';
import { UserNew } from '@/models/User/type';

type PostReq = UserNew;
type PostRes = User;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  /** Userの作成 */
  handleApiRoute<PostReq, PostRes>('POST', req, res, {
    requiredParams: ['email', 'name'],
    callback: async (req) => {
      const { email, name } = req.body;

      const user = await createUser({
        email,
        name,
      });

      return user;
    },
  });
}

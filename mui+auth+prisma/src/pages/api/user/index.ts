import { NextApiRequest, NextApiResponse } from 'next';

import { User } from '@prisma/client';

import { handleApiRoute } from '@/common/utils';
import { UserNew } from '@/models/User/type';

type PostReq = UserNew;
type PostRes = User;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  handleApiRoute<PostReq, PostRes>('POST', req, res, {
    requiredParams: ['email', 'name'],
    callback: async (req) => {
      const { email, name } = req.body;

      return {
        id: '',
        email,
        name,
      };
    },
  });
}

import { NextApiRequest, NextApiResponse } from 'next';

import { handleApiRoute } from '@/common/utils';
import { IUser, UserNew, createUser } from '@/models/User';

type PostReq = UserNew;
type PostRes = IUser;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return new Promise(() => {
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
  });
}

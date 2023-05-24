import { NextApiRequest, NextApiResponse } from 'next';

import { handleApiRoute } from '@/common/utils';
import { prisma } from '@/libs/prisma';
import { IUser } from '@/models/User';

type DeleteReq = null;
type DeleteRes = IUser;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  /** Userの削除 */
  handleApiRoute<DeleteReq, DeleteRes>('DELETE', req, res, {
    callback: async (req) => {
      const userId = req.query.userId as string;

      const user = await prisma.user.delete({ where: { id: userId } });
      return user;
    },
  });
}

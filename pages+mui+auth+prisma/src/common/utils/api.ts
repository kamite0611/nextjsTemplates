import { NextApiRequest, NextApiResponse } from 'next';

import { LackParamsError } from '../constant';

type Methods = 'GET' | 'POST';

interface ResponseError extends Error {
  status?: number;
}

export interface CustomRequest<TReqBody> extends Omit<NextApiRequest, 'body'> {
  body: TReqBody;
}

export interface CustomResponse<TResBody> extends Omit<NextApiResponse, 'body'> {
  body?: TResBody;
}

export interface FormedResponse<T> {
  status: number;
  result: boolean;
  content: T;
  hasError: boolean;
  error?: ResponseError;
}

/**
 * レスポンスの形を一定化する
 */
const formedResponse = <T>({
  res,
  status,
  body,
  error,
}: {
  res: CustomResponse<T>;
  status: number;
  body?: T;
  error?: ResponseError;
}) => {
  const resBody: FormedResponse<T> = {
    status,
    result: true,
    hasError: false,
    content: {} as T,
  };

  if (body) {
    resBody.content = body;
  }

  if (error) {
    resBody.result = false;
    const { name, message, stack } = error;
    resBody.error = { name, message, stack };
    resBody.hasError = true;
  }

  return res.status(status).json(resBody);
};

/**
 * エラーが起きた場合のレスポンスを定義
 */
const formedErrorResponse = ({
  req,
  res,
  error,
}: {
  res: CustomResponse<any>;
  req: CustomRequest<any>;
  error: ResponseError;
}) => {
  const { method, body, query, headers, url } = req;

  return formedResponse({
    res,
    status: error.status || 500,
    body: { request: { method, body, query, headers, url } },
    error,
  });
};

/**
 * APIのハンドリングを簡略化する関数
 * HTTPリクエストメソッド名をキーとして、必須パラメーターとコールバックを持つオブジェクトを渡すことで、
 * レスポンスの定型化と基本的なエラーハンドリングを行う
 */
export const handleApiRoute = async <TReq, TRes>(
  method: Methods,
  req: CustomRequest<TReq>,
  res: NextApiResponse<TRes>,
  processes: {
    requiredParams?: Array<keyof TReq>;
    callback: (req: CustomRequest<TReq>) => Promise<TRes>;
  }
) => {
  try {
    const { method: methodReq, body } = req;
    if (methodReq != method) return;

    const requiredParams = processes.requiredParams || [];
    const lackParams: Array<keyof TReq> = [];
    requiredParams.forEach((param: keyof TReq) => {
      if (!body?.[param]) {
        lackParams.push(param);
      }

      if (lackParams.length !== 0) {
        throw new LackParamsError(`param "${lackParams.join(',')}" is required`);
      }
    });

    const resBody = await processes.callback(req);

    return formedResponse({ res, status: 200, body: resBody });
  } catch (error: any) {
    return formedErrorResponse({ req, res, error });
  }
};

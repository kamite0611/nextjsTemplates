import { customAlphabet } from 'nanoid';

// 生成時に使う文字の種類
const CHARACTERS = '1234567890abcdefghijklmnopqrstuvwxyz';

// 生成する文字の長さ
const LENGTH = 14;

export const genID = (length: number = LENGTH) => {
  const nanoid = customAlphabet(CHARACTERS, 10);
  return nanoid(length);
};

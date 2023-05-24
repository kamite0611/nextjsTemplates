/**
 * よく使うバリデーション
 */

/** 電話番号・ファックス（ハイフンなし） */
export const vPhone = [
  {
    type: 'min',
    params: [10],
  },
  {
    type: 'max',
    params: [11],
  },
  {
    type: 'matches',
    params: [
      /^[0-9]+$/,
      {
        message: '数字以外使用できません',
      },
    ],
  },
];

/** 郵便番号 */
export const vPostal = [
  {
    type: 'min',
    params: [7],
  },
  {
    type: 'max',
    params: [8],
  },
];

/** 都道府県 */
export const vPref = [
  {
    type: 'min',
    params: [3],
  },
  {
    type: 'max',
    params: [4],
  },
];

/** メールアドレス */
export const vEmail = [
  {
    type: 'email',
  },
];

/** フルネーム（間に半角スペース） */
export const vFullNameSpace = [
  {
    type: 'matches',
    params: [
      /^[\D]+ [\D]+$/,
      {
        message: '名前と苗字の間に半角スペースを入れてください',
      },
    ],
  },
];

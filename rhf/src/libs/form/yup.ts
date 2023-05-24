/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as yup from 'yup';
import { MessageParams } from 'yup/lib/types';

const labelText = (param: MessageParams) => (param.label ? `"${param.label}" は` : '');

const jpConfig = {
  mixed: {
    default: (param: MessageParams) => `${labelText(param)}無効です。`,
    required: (param: MessageParams) => `${labelText(param)}必須の入力項目です。`,
    oneOf: (param: MessageParams & { values: any }) =>
      `${labelText(param)}次の値のいずれかでなければなりません。: ${param.values}`,
    notOneOf: (param: MessageParams & { values: any }) =>
      `${labelText(param)}次の値のいずれかであってはなりません。: ${param.values}`,
    notType: (param: MessageParams) => {
      if (param.type === 'number') {
        return `${labelText(param)}半角数字で入力してください。`;
      }
      if (param.type === 'date') {
        return `${labelText(param)}日付を入力してください。`;
      }
      return `${labelText(param)}正しい形式を入力してください。`;
    },
    defined: '',
  },
  string: {
    length: (param: MessageParams & { length: number }) =>
      `${labelText(param)}${param.length}文字でなければなりません。`,
    min: (param: MessageParams & { min: number }) =>
      `${labelText(param)}少なくとも${param.min}文字でなければなりません。`,
    max: (param: MessageParams & { max: number }) =>
      `${labelText(param)}最大${param.max}文字でなければなりません。`,
    matches: (param: MessageParams & { regex: RegExp }) =>
      `${labelText(param)}次の形式と一致する必要があります。: "${param.regex}"`,
    email: (param: MessageParams & { regex: RegExp }) =>
      `正しいメールアドレスの形式で入力してください。`,
    url: (param: MessageParams & { regex: RegExp }) =>
      `${labelText(param)}有効なURLでなければなりません。`,
    uuid: (param: MessageParams & { regex: RegExp }) =>
      `${labelText(param)}有効なUUIDでなければなりません。`,
    trim: (param: MessageParams) => `${labelText(param)}前後にスペースを入れてはいけません。`,
    lowercase: (param: MessageParams) => `${labelText(param)}小文字でなければなりません。`,
    uppercase: (param: MessageParams) => `${labelText(param)}大文字でなければなりません。`,
  },
  number: {
    min: (param: MessageParams & { min: number }) =>
      `${labelText(param)}${param.min}以上である必要があります。`,
    max: (param: MessageParams & { max: number }) =>
      `${labelText(param)}${param.max}以下でなければなりません。`,
    lessThan: (param: MessageParams & { less: number }) =>
      `${labelText(param)}${param.less}より小さくなければなりません。`,
    moreThan: (param: MessageParams & { more: number }) =>
      `${labelText(param)}${param.more}より大きくなければなりません。`,
    positive: (param: MessageParams & { more: number }) =>
      `${labelText(param)}正の数でなければなりません。`,
    negative: (param: MessageParams & { less: number }) =>
      `${labelText(param)}負の数でなければなりません。`,
    integer: (param: MessageParams) => `${labelText(param)}整数でなければなりません。`,
  },
  date: {
    min: (param: MessageParams & { min: Date | string }) =>
      `${labelText(param)}${
        typeof param.min === 'string' ? param.min : param.min.toLocaleDateString()
      }より後でなければなりません。`,
    max: (param: MessageParams & { max: Date | string }) =>
      `${labelText(param)}${
        typeof param.max === 'string' ? param.max : param.max.toLocaleDateString()
      }より前でなければなりません。`,
  },
  boolean: {
    isValue: (param: MessageParams) => `${labelText(param)}値が必要です。`,
  },
  object: {
    noUnknown: (param: MessageParams) =>
      `${labelText(param)}オブジェクトシェイプで指定されていないキーを含めることはできません。`,
  },
  array: {
    length: (param: MessageParams & { length: number }) =>
      `${labelText(param)}${param.length}個が必要です。`,
    min: (param: MessageParams & { min: number }) =>
      `${labelText(param)}${param.min}個以上の項目が必要です。`,
    max: (param: MessageParams & { max: number }) =>
      `${labelText(param)}${param.max}個以下の項目が必要です。`,
  },
};

yup.setLocale(jpConfig);
export default yup;

import {
  FormFieldSettingList,
  filterFormField,
  getDefaultValues,
  yupSchemeSetting,
} from '@/libs/form';

/**
 * Userのフォーム情報を設定
 */
export const UserFields: FormFieldSettingList = {
  id: {
    key: 'id',
    fieldType: 'text',
    dataType: 'string',
    label: 'ユーザーID',
    required: true,
    placeholder: '',
    defaultValue: '',
  },
  email: {
    key: 'email',
    fieldType: 'text',
    dataType: 'string',
    label: 'メールアドレス',
    required: true,
    placeholder: '*******@example.com',
    defaultValue: '',
  },
  name: {
    key: 'name',
    fieldType: 'text',
    dataType: 'string',
    label: '名前',
    placeholder: '田中 太郎',
    helper: 'hogehoge',
    required: true,
    defaultValue: '',
  },
};

/**
 * ユーザー新規登録フォームの設定
 */
export const UserNewFields = filterFormField(UserFields, ['email', 'name']);
export const UserNewDefaultValues = getDefaultValues(UserNewFields);
export const UserNewYupScheme = yupSchemeSetting(UserNewFields);

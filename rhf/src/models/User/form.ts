import { FormFieldSettingList } from '@/libs/form';

export const userFields: FormFieldSettingList = {
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
    placeholder: '',
    defaultValue: '',
  },
  name: {
    key: 'name',
    fieldType: 'text',
    dataType: 'string',
    label: '名前',
    required: true,
    placeholder: '',
    defaultValue: '',
  },
};

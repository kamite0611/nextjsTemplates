// ----------------------------------------------------------------------

import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormFieldSetting } from './types';

/**
 * 他のフィールドの入力値に伴って、required を切り替えるカスタムフック
 * conditional で required になるパターンを判定する
 */
export function useCheckFieldRequired(input: FormFieldSetting) {
  const { getValues } = useFormContext();
  const [required, setRequired] = useState<boolean>(input.required || false);

  const checkRequired = () => {
    //TODO: 複数に対応するか検討中
    const _required = input.condition?.required;
    if (_required) {
      const { field, is } = _required;

      if (Array.isArray(is)) {
        const condition = is.includes(getValues(field));
        setRequired(condition);
      } else {
        const condition = getValues(field) === is;
        setRequired(condition);
      }
    }
  };

  useEffect(() => {
    checkRequired();
  });

  return required;
}

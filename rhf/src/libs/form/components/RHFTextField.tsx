import { SyntheticEvent, BaseSyntheticEvent, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { TextField, OutlinedTextFieldProps, InputAdornment } from '@mui/material';

import { InputLabel } from '@/components/parts';

import { RHFHelperTip } from './RHFHelperTip';
import { InputLabelProps } from '../constant';
import { useCheckFieldRequired } from '../hooks';
import { IRHFTextStringSetting, IRHFTextNumberSetting, IRHFTextStringArraySetting } from '../types';
import { getHelperText } from '../utils';

export interface IRHFTextFieldProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  input: IRHFTextStringSetting | IRHFTextNumberSetting | IRHFTextStringArraySetting;
}

export function RHFTextField({ input, ...other }: IRHFTextFieldProps) {
  const { control } = useFormContext();
  const {
    key,
    label,
    placeholder = '',
    helper = '',
    startAdornment,
    endAdornment,
    dataType,
    fieldType,
  } = input;

  const multiline = dataType === 'string' ? input.multiline : false;

  const [focused, setFocused] = useState(false);
  const required = useCheckFieldRequired(input);

  const getStartAdornment = () =>
    startAdornment ? <InputAdornment position="start">{startAdornment}</InputAdornment> : null;
  const getEndAdornment = () =>
    endAdornment ? <InputAdornment position="end">{endAdornment}</InputAdornment> : null;

  const handleClick = () => {
    setFocused(true);
  };

  const handleBlur = (e: SyntheticEvent, callback: Function) => {
    setFocused(false);
    callback(e);
  };

  let optionalProps: Record<string, any> = {};

  if (multiline) {
    optionalProps = {
      multiline: true,
      maxRows: 10,
    };
  }

  return (
    <Controller
      name={key}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <RHFHelperTip placeholder={placeholder} focused={focused}>
          <TextField
            id={key}
            key={key}
            fullWidth
            multiline={multiline}
            required={required}
            label={
              <InputLabel error={!!error} required={required}>
                {label}
              </InputLabel>
            }
            // placeholder={placeholderInside}
            placeholder={helper && '入力例を参考にこちらに入力してください'}
            helperText={getHelperText(helper, error?.message)}
            type={fieldType == 'password' ? fieldType : dataType}
            InputProps={{
              startAdornment: getStartAdornment(),
              endAdornment: getEndAdornment(),
            }}
            InputLabelProps={InputLabelProps}
            inputProps={{}}
            error={!!error}
            onFocus={handleClick}
            onClick={handleClick}
            {...optionalProps}
            {...other}
            {...field}
            onBlur={(e) => {
              handleBlur(e, field.onBlur);
              other.onBlur && other.onBlur(e);
            }}
            {...(dataType === 'number' && {
              /** 数字入力欄の場合、スクロール動作で数字が変化しないようにする */
              onWheel: (e) => (e.target as BaseSyntheticEvent['currentTarget']).blur(),
            })}
            onKeyDown={(e) => {
              // multiline のフィールドではない場合、Enter で submit されないよう prevent
              if (!multiline && e.key === 'Enter') {
                e.preventDefault();
              }
            }}
            sx={{ input: { ...(dataType === 'number' && { textAlign: 'right' }) } }}
          />
        </RHFHelperTip>
      )}
    />
  );
}

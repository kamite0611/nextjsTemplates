export type RHFError = Record<string, Object>;

export interface RHFErrors {
  [key: string]: RHFError;
}

export interface OptionSetting {
  label: string;
  description?: string;
}

export interface ValidationWhen {
  field: string;
  is: any;
  then: ValidationScheme[];
}
export interface ValidationScheme {
  type: string;
  params?: Array<
    string | number | boolean | string[] | boolean[] | RegExp | Record<string, string> | Function
  >;
}
export type IFieldOptionsSetting = Record<string | number, OptionSetting>;

interface FormFieldSettingBase {
  key: string;
  label: string;

  dataType: 'string' | 'number' | 'boolean' | 'date' | 'datetime' | 'array';
  helper?: string;
  /** 必須か否かの指定 */
  required?: boolean;
  validations?: ValidationScheme[];
  condition?: Record<string, ValidationWhen>;
  example?: any;
}

export interface FormFieldSettingCommon extends FormFieldSettingBase {
  multiline?: boolean;
  direction?: 'row' | 'column';
}
/**
 * セレクト(ドロップダウン)フィールドの設定
 */
export interface IRHFSelectSetting
  extends Omit<FormFieldSettingBase, 'dataType' | 'required' | 'defaultValue'> {
  fieldType: 'select';
  dataType: 'string' | 'number' | 'array';
  required: boolean;
  options: IFieldOptionsSetting;
  defaultValue: string | number | any[];
}
/**
 * ラジオボタンフィールド用の設定
 */
export interface IRHFRadioSetting
  extends Omit<FormFieldSettingBase, 'dataType' | 'required' | 'defaultValue'> {
  fieldType: 'radio';
  dataType: 'string' | 'number' | 'boolean';
  required: boolean;
  options: IFieldOptionsSetting;
  defaultValue: string | number | boolean;
}
/**
 * チェックボックスフィールド用の設定
 */
export interface IRHFCheckboxSetting
  extends Omit<FormFieldSettingBase, 'dataType' | 'defaultValue'> {
  fieldType: 'checkbox';
  dataType: 'boolean';
  required: boolean;
  defaultValue: boolean;
  /** チェックボックスの横に表示したいラベルが項目名とことなる場合に設定 */
  labelAlt?: string;
}
/**
 * 通常のテキストフィールド用(一行 or 複数行)の設定
 */
export interface IRHFTextStringSetting
  extends Omit<FormFieldSettingBase, 'dataType' | 'defaultValue'> {
  fieldType: 'text' | 'password';
  dataType: 'string';
  required: boolean;
  multiline?: boolean;
  placeholder: string;
  /** TODO: [ikeda] 必須化 */
  defaultValue?: string;
  startAdornment?: string;
  endAdornment?: string;
}
/**
 * 数字を入れるテキストフィールドの設定
 */
export interface IRHFTextNumberSetting
  extends Omit<FormFieldSettingBase, 'dataType' | 'defaultValue'> {
  fieldType: 'text';
  dataType: 'number';
  required: boolean;
  placeholder: string;
  /** TODO: [ikeda] 必須化 */
  defaultValue?: number;
  startAdornment?: string;
  endAdornment?: string;
}
/**
 * 文字列配列用フィールド
 * 主にファイルアプロードのファイル名保持してバリデーションするためのフィールドで使用
 */
export interface IRHFTextStringArraySetting
  extends Omit<FormFieldSettingBase, 'dataType' | 'defaultValue'> {
  fieldType: 'text';
  dataType: 'array';
  placeholder?: string;
  /** TODO: [ikeda] 必須化 */
  defaultValue?: any[];
  startAdornment?: string;
  endAdornment?: string;
}
/**
 * 入力に利用しない非表示のフィールド用の設定
 */
export interface IRHFTextDisabledSetting extends Omit<FormFieldSettingBase, 'dataType' | 'helper'> {
  fieldType: 'disabled';
  dataType: 'string' | 'array';
  required: boolean;
  defaultValue?: string | [];
  startAdornment?: string;
  endAdornment?: string;
}

export interface IRHFAutocompleteSetting extends Omit<FormFieldSettingBase, 'dataType'> {
  fieldType: 'autocomplete';
  dataType: 'array' | 'string';
  /** TODO: 必須化 */
  required: boolean;
  placeholder?: string;
  options?: Record<string, OptionSetting>;
  defaultValue?: boolean | string | number | never[];
}
/**
 * 日および日時フィールド用の設定
 */
export interface IRHFDateTimeSetting extends FormFieldSettingBase {
  fieldType: 'date' | 'datetime';
  dataType: 'date';
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string;
}
/**
 * options フィールドを持つ設定をまとめたもの
 */
export type IRHFFieldHasOptions = IRHFSelectSetting | IRHFRadioSetting;

export type FormFieldSetting =
  | IRHFRadioSetting
  | IRHFSelectSetting
  | IRHFCheckboxSetting
  | IRHFTextStringSetting
  | IRHFTextNumberSetting
  | IRHFTextStringArraySetting
  | IRHFTextDisabledSetting
  | IRHFAutocompleteSetting
  | IRHFDateTimeSetting;

export type FormFieldSettings = FormFieldSetting[];
export type FormFieldSettingList = Record<string, FormFieldSetting>;

import {
  FormFieldSetting,
  FormFieldSettingList,
  IRHFRadioSetting,
  IRHFSelectSetting,
  OptionSetting,
  ValidationScheme,
  ValidationWhen,
} from './types';
import yup from './yup';

type AnyObject = { [k: string]: any };

const setDefaultValue = (FormFieldSetting: FormFieldSetting) => {
  const values: AnyObject = {};
  const { key, dataType, defaultValue = false } = FormFieldSetting;

  if (defaultValue) {
    values[key] = defaultValue;
    return values;
  }

  switch (dataType) {
    case 'string':
      values[key] = '';
      break;
    case 'date':
      values[key] = new Date();
      break;
    case 'number':
      values[key] = 0;
      break;
    case 'array':
      values[key] = [];
      break;
    case 'boolean':
      values[key] = false;
      break;
    default:
      values[key] = '';
  }

  return values;
};

export const getLabels = <T>(inputs: FormFieldSettingList) => {
  let labels = {} as Record<keyof T, string>;
  Object.keys(inputs).map((inputKey) => {
    const input = inputs[inputKey];

    labels = { ...labels, ...{ [inputKey]: input.label } };
  });
  return labels;
};

export const getDefaultValues = <T>(inputs: FormFieldSettingList) => {
  let values = {} as Record<keyof T, any>;
  Object.keys(inputs).map((inputKey) => {
    const input = inputs[inputKey];

    values = { ...values, ...setDefaultValue(input) };
  });

  return values;
};

export const getExampleValues = <T>(inputs: FormFieldSettingList) => {
  let values = {} as Record<keyof T, any>;
  Object.keys(inputs).map((inputKey) => {
    const input = inputs[inputKey];
    const value = input.example ? { [inputKey]: input.example } : {};

    values = { ...values, ...value };
  });
  return values;
};

export const getRequiredKeys = (inputs: FormFieldSettingList) =>
  Object.values(inputs)
    .filter((input) => !!input.required)
    .map((input) => input.key);

/**
 * useFieldArrayでのキーの設定を行う関数です
 * optionsとlabelどちらかもしくはどちらもつけるパターンがあるため引数を名前付きの引数に変更しました。
 *
 * @param { FormFieldSetting } inputs - defaultの値です
 * @param { string } fieldArrayKey - useFieldArrayのキーの[XXX.0 XXX.1 etc...]までを指します
 * @param { Record<string, OptionSetting> } options? - fieldTypeがselect or radioかつ内容が可変の場合に使用します
 * @param { string } label - useFieldArrayの場合label名も変動するケースがある
 * @return { FormFieldSetting } keyを設定した[ FormFieldSetting ]を返します
 */
export const setFieldArrayKey = (params: {
  inputs: FormFieldSetting;
  fieldArrayKey: string;
  options?: Record<string, OptionSetting>;
  label?: string;
}): FormFieldSetting => {
  const data: FormFieldSetting = params.inputs;
  const defaultKey = params.inputs.key;
  const value: FormFieldSetting = {
    ...data,
    label: params.label ?? data.label,
    key: `${params.fieldArrayKey}.${defaultKey}`,
  };
  if (
    (value.fieldType === 'select' || value.fieldType === 'radio') &&
    params.options !== undefined
  ) {
    value.options = params.options;
  }
  /** useFieldArrayの際にcondition再設定 */
  /**
   * condition requiredのfield名が動的なため設定してあげる
   */
  if (value.condition) {
    const condition = { ...value.condition };
    const _required = condition.required;
    const defaultField = _required.field;
    const _key = `${params.fieldArrayKey}.${defaultField}`;
    /** 破壊的にならないように再度作成 */
    const newCondition = {
      ...condition,
      required: {
        ..._required,
        field: _key,
      },
    };
    return { ...value, condition: newCondition };
  }
  return value;
};

export const getOptionLabel = (field: IRHFRadioSetting | IRHFSelectSetting, value: any): string => {
  let _value = value;
  if (typeof value === 'boolean') {
    if (value) {
      _value = 'true';
    } else {
      _value = 'false';
    }
    return field.options?.[_value].label || '';
  }

  if (!value) {
    return '-';
  }

  return field.options?.[_value].label || '';
};

function createYupSchema(schema: any, key: string, input: FormFieldSetting) {
  const { label, required, dataType, validations = [], condition = {} } = input;

  let validator = (yup as any)[dataType]().label(label);

  if (dataType !== 'string' && dataType !== 'array') {
    validator = validator
      .nullable()
      .transform((value: any, originalValue: any) =>
        String(originalValue).trim() === '' ? null : value
      );
  }

  if (required) {
    validator = validator.required();
  } else {
    validator = validator.optional();
  }

  validations.forEach((validation: ValidationScheme) => {
    const { params = [], type } = validation as ValidationScheme;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...params);
  });

  Object.values(condition).forEach((validation: ValidationWhen) => {
    const { field, is, then } = validation as ValidationWhen;

    let thenValidator = (yup as any)[dataType]().label(label);
    then.forEach((params: ValidationScheme) => {
      const { type: thenType, params: thenParams = [] } = params;
      if (thenParams.length !== 0) {
        thenValidator = thenValidator[thenType as string](...thenParams);
      } else {
        thenValidator = thenValidator[thenType as string]();
      }
    });

    validator = validator.when(field, { is, then: thenValidator });
  });

  schema[key] = validator;
  return schema;
}

const generateScheme = (inputs: FormFieldSettingList) => {
  const schema: AnyObject = {};
  Object.keys(inputs).map((inputKey) => {
    const input = inputs[inputKey];
    createYupSchema(schema, inputKey, input);
    return;
  });
  return schema;
};

export const yupSchemeSetting = (formSettings: FormFieldSettingList) => {
  const schema = generateScheme(formSettings);
  return yup.object(schema);
};

export const getPlaceHolder = (placeholder: string) => (placeholder ? '例: ' + placeholder : '');

export const getHelperText = (helper: string, error: string | undefined) =>
  error ? `${error} ${helper}` : helper;

export const mergeArrayFieldsSchema = (
  parentSchema: any,
  arrayFields: { key: string; schema: any }[]
) => {
  arrayFields.map((arrayField) => {
    const { key, schema } = arrayField;
    parentSchema.fields[key] = yup.array().of(schema);
  });
  return parentSchema;
};

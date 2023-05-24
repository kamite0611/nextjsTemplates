import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@mui/material';

import { IRHFTextStringSetting, RHFFormProvider, RHFTextField } from '@/libs/form';

import { UserNewDefaultValues, UserNewFields, UserNewYupScheme } from '../form';
import { UserNew } from '../type';

type UserNewProps = {
  defaultValue?: Partial<UserNew>;
  onSubmit: (data: UserNew) => void;
};

export const UserNewForm = ({ onSubmit }: UserNewProps) => {
  const userMethods = useForm<UserNew>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: yupResolver(UserNewYupScheme),
    criteriaMode: 'all',
    shouldFocusError: true,
    defaultValues: UserNewDefaultValues,
  });

  const { email, name } = UserNewFields;

  return (
    <RHFFormProvider methods={userMethods}>
      <RHFTextField input={email as IRHFTextStringSetting} />
      <RHFTextField input={name as IRHFTextStringSetting} />

      <Button onClick={() => onSubmit({ email: `q0knqwk28jd36k@example.com`, name: 'sample' })}>
        作成
      </Button>
    </RHFFormProvider>
  );
};

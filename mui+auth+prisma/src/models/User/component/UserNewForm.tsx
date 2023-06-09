import { Button, TextField } from '@mui/material';

import { useFetch } from '@/common/hooks/useFetch';

import { UserNew } from '../type';

type UserNewProps = {
  defaultValue?: Partial<UserNew>;
};

export const UserNewForm = ({}: UserNewProps) => {
  useFetch();

  return (
    <>
      <TextField />
      <TextField />

      <Button onClick={() => {}}>作成</Button>
    </>
  );
};

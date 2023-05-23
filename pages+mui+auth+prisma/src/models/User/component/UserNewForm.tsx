import { Button, TextField } from '@mui/material';

import { UserNew } from '../type';

type UserNewProps = {
  defaultValue?: Partial<UserNew>;
};

export const UserNewForm = ({}: UserNewProps) => {
  return (
    <>
      <TextField />
      <TextField />

      <Button onClick={() => {}}>作成</Button>
    </>
  );
};

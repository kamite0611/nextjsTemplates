import { Button, TextField } from '@mui/material';

import { UserNew } from '../type';

type UserNewProps = {
  defaultValue?: Partial<UserNew>;
  onSubmit: (data: UserNew) => void;
};

export const UserNewForm = ({ onSubmit }: UserNewProps) => {
  return (
    <>
      <TextField />
      <TextField />

      <Button onClick={() => onSubmit({ email: `q0knqwk28jd36k@example.com`, name: 'sample' })}>
        作成
      </Button>
    </>
  );
};

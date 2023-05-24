import { ReactNode } from 'react';

import { styled, Chip } from '@mui/material';

const ChipStyled = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'required',
})<{ required?: boolean }>(({ required }) => ({
  marginRight: required ? '-20px' : '-12px',
  marginLeft: '8px',
}));

interface InputLabelProps {
  required: boolean;
  error?: boolean;
  size?: 'small' | 'medium';
  children: ReactNode;
}

export function InputLabel({ required, error, size = 'small', children }: InputLabelProps) {
  // Chip size props must be 'small' for keep layout
  const chipSize = 'small';
  const chipMarginTop = size === 'small' ? '-4px' : '-2px';

  const getColor = (required: boolean, error?: boolean) => {
    if (error) return 'error';
    if (required) return 'primary';
    return 'default';
  };

  return (
    <>
      {children}
      <ChipStyled
        label={required ? '必須' : '任意'}
        color={getColor(required, error)}
        size={chipSize}
        required={required}
        sx={{
          marginTop: chipMarginTop,
        }}
      />
    </>
  );
}

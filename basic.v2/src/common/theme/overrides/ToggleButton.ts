import { Theme } from '@mui/material/styles';

import { ColorSchema } from '../palette';

// ----------------------------------------------------------------------

export default function MyToggleButton(theme: Theme) {
  const style = (color: ColorSchema) => ({
    props: { color },
    style: {
      '&:hover': {
        color: '#AD53F3',
        background: theme.palette.gradients.secondary,
      },
      '&.Mui-selected': {
        color: '#AD53F3',
        background: theme.palette.gradients.secondary,
      },
    },
  });

  return {
    MuiToggleButton: {
      variants: [
        {
          props: { color: 'standard' },
          style: {
            '&.Mui-selected': {
              backgroundColor: theme.palette.action.selected,
            },
          },
        },
        style('primary'),
        style('secondary'),
        style('info'),
        style('success'),
        style('warning'),
        style('error'),
      ],
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
          border: `solid 3px ${theme.palette.grey[500_32]}`,
          '& .MuiToggleButton-root': {
            margin: 4,
            borderColor: 'transparent !important',
            borderRadius: `${theme.shape.borderRadius}px !important`,
          },
        },
      },
    },
  };
}

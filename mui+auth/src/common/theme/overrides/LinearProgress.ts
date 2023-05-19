import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyLinearProgress(theme: Theme) {
  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
  };
}

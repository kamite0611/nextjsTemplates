import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyTypography(theme: Theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          '& .MuiAlertTitle-root': {
            marginBottom: 0,
          },
        },
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}

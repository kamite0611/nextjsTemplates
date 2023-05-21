import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyDatePicker(theme: Theme) {
  return {
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: '100%',
        },
        viewTransitionContainer: {
          '& > div > div': {
            justifyContent: 'space-between !important',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
          },
          '& div[role=row]': {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            justifyContent: 'space-between !important',
          },
        },
      },
    },
  };
}

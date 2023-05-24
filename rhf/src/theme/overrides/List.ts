import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyList(theme: Theme) {
  return {
    MuiListItem: {
      styleOverrides: {
        root: {
          ':first-of-type': {
            paddingTop: 0,
          },
          ':last-of-type': {
            paddingBottom: 0,
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 'auto',
          marginRight: theme.spacing(2),
        },
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          marginRight: theme.spacing(2),
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
        },
        multiline: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
  };
}

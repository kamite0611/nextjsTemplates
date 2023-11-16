import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyList(theme: Theme) {
  return {
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          ':first-of-type': {
            paddingTop: '10px',
          },
          ':last-of-type': {
            paddingBottom: '10px',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: '12px 16px',
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

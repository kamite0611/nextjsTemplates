import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyTabs(theme: Theme) {
  return {
    MuiTabs: {
      styleOverrides: {
        root: {
          paddingRight: 0,
          paddingLeft: 0,
        },
        scrollButtons: {
          width: 48,
          borderRadius: '50%',
          paddingRight: 0,
          paddingLeft: 0,
        },
      },
    },
    // MuiButtonBase: {
    //   styleOverrides: {
    //     root: {
    //       padding: theme.spacing(2),
    //     },
    //   },
    // },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: theme.spacing(2, 4),
          fontWeight: theme.typography.fontWeightMedium,
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
          '&.Mui-selected': {
            color: theme.palette.text.primary,
          },
          '&:not(:last-of-type)': {
            marginRight: 0,
          },
          '@media (min-width: 600px)': {
            minWidth: 48,
          },
        },
        labelIcon: {
          minHeight: 48,
          flexDirection: 'row',
          '& > *:first-of-type': {
            marginBottom: 0,
            marginRight: theme.spacing(1),
          },
        },
        wrapped: {
          flexDirection: 'row',
          whiteSpace: 'nowrap',
        },
        textColorInherit: {
          opacity: 1,
          color: theme.palette.text.secondary,
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  };
}

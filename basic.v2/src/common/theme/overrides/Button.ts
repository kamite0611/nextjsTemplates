import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyButton(theme: Theme) {
  return {
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      disableRipple: false,
      styleOverrides: {
        root: {
          textTransform: 'none',
          wordBreak: 'keep-all',
          borderRadius: '10px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 56,
          fontSize: '18px',
        },
        // // contained
        // containedInherit: {
        //   color: theme.palette.grey[800],
        //   boxShadow: 'none',
        //   '&:hover': {
        //     backgroundColor: theme.palette.grey[400],
        //   },
        // },
        // containedPrimary: {
        //   boxShadow: theme.customShadows.primary,
        // },
        // containedSecondary: {
        //   boxShadow: theme.customShadows.secondary,
        // },
        // containedInfo: {
        //   boxShadow: theme.customShadows.info,
        // },
        // containedSuccess: {
        //   boxShadow: theme.customShadows.success,
        // },
        // containedWarning: {
        //   boxShadow: theme.customShadows.warning,
        // },
        // containedError: {
        //   boxShadow: theme.customShadows.error,
        // },
        // // outlined
        outlined: {
          borderRadius: '100px',
          //   backdropFilter: 'blur(6px)',
          //   WebkitBackdropFilter: 'blur(6px)',
          //   backgroundColor: theme.palette.common.white,
        },
        // outlinedInherit: {
        //   border: `1px solid ${theme.palette.grey[500_32]}`,
        //   // '&:hover': {
        //   //   backgroundColor: theme.palette.action.hover,
        //   // },
        // },
        textInherit: {
          // color: 'red',
          // '&:hover': {
          //   backgroundColor: theme.palette.action.hover,
          // },
        },
      },
    },
  };
}

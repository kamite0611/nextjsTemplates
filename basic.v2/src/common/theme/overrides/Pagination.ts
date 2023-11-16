import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyPagination(theme: Theme) {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          color: '#A0A0A0',
          '&.Mui-selected': {
            fontWeight: theme.typography.fontWeightBold,
          },
        },
        textPrimary: {
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            '&:hover, &.Mui-focusVisible': {
              // backgroundColor: `${alpha(
              //   theme.palette.primary.main,
              //   0.24
              // )} !important`,
            },
          },
        },
        outlined: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
        },
        outlinedPrimary: {
          '&.Mui-selected': {
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.24)}`,
          },
        },
      },
    },
  };
}

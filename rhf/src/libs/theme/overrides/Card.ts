import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyCard(theme: Theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          borderRadius: Number(theme.shape.borderRadius) * 2,
          zIndex: 0, // Fix Safari overflow: hidden with border radius
          '&.MuiPaper-elevation': {
            boxShadow: theme.customShadows.card,
            '&:hover': {
              boxShadow: theme.customShadows.z8,
            },
          },
          '&.MuiPaper-outlined': {
            boxShadow: theme.customShadows.z1,
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: {
          variant: 'body1',
          marginTop: theme.spacing(0.5),
        },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 2, 0),
          '& .MuiCardHeader-avatar': {
            marginRight: theme.spacing(1.5),
            '& .MuiSvgIcon-root': {
              marginLeft: theme.spacing(1),
            },
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 2, 3),
        },
      },
    },
  };
}

import { Theme, alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyTooltip(theme: Theme) {
  const isLight = theme.palette.mode === 'light';

  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          maxWidth: '100vw',
          ...theme.typography.subtitle1,
          backgroundColor: alpha(theme.palette.grey[isLight ? 800 : 700], 0.7),
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          boxShadow: theme.customShadows.z12,
        },
        arrow: {
          color: alpha(theme.palette.grey[isLight ? 800 : 700], 0.7),
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        },
      },
    },
  };
}

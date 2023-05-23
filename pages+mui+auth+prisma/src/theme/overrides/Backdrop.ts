import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyBackdrop(theme: Theme) {
  const white = alpha(theme.palette.common.white, 0.8);
  const main = alpha(theme.palette.primary.main, 0.8);

  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            theme.palette.primary.main,
            `linear-gradient(-60deg, ${main} 0%,  ${white} 100%)`,
          ],
          '&.MuiBackdrop-invisible': {
            background: 'transparent',
          },
        },
      },
    },
  };
}

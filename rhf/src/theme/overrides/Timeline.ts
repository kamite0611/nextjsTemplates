import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyTimeline(theme: Theme) {
  return {
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },

    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.divider,
        },
      },
    },
  };
}

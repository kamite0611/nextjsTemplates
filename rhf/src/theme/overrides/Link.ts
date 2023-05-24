import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyLink(theme: Theme) {
  return {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
  };
}

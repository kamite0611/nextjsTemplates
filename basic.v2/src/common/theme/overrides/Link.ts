import Link from 'next/link';

import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyLink(theme: Theme) {
  return {
    MuiLink: {
      defaultProps: {
        component: Link,
        underline: 'none',
        color: '#414141',
        textDecoration: 'none',
      },
    },
  };
}

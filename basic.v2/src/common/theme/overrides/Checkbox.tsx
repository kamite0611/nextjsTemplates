import { Theme } from '@mui/material/styles';

import {
  CheckboxIcon,
  CheckboxCheckedIcon,
  CheckboxIndeterminateIcon,
} from '../CustomIcons';

// ----------------------------------------------------------------------

export default function MyCheckbox(theme: Theme) {
  return {
    MuiCheckbox: {
      defaultProps: {
        icon: <CheckboxIcon />,
        checkedIcon: <CheckboxCheckedIcon />,
        indeterminateIcon: <CheckboxIndeterminateIcon />,
      },

      styleOverrides: {
        root: {
          padding: theme.spacing(1),

          // color: 'rgb(49 74 99 / 32%)',
          color: theme.palette.grey[500_56],
          '&.Mui-checked.Mui-disabled, &.Mui-disabled': {
            color: theme.palette.action.disabled,
          },
          '& .MuiSvgIcon-fontSizeMedium': {
            width: 30,
            height: 30,
          },
          '& .MuiSvgIcon-fontSizeSmall': {
            width: 20,
            height: 20,
          },
          svg: {
            fontSize: 30,
            '&[font-size=small]': {
              fontSize: 20,
            },
          },
        },
      },
    },
  };
}

import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyAutocomplete(theme: Theme) {
  return {
    MuiAutocomplete: {
      defaultProps: {
        noOptionsText: '該当する選択肢がありません。',
      },
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.dropdown,
        },
        listbox: {
          padding: theme.spacing(0, 1),
          '& .MuiAutocomplete-option': {
            padding: theme.spacing(1),
            margin: theme.spacing(1, 0),
            borderRadius: theme.shape.borderRadius,
          },
        },
      },
    },
  };
}

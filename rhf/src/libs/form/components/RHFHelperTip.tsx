import { useEffect, useRef, useState } from 'react';

import {
  Box,
  Chip,
  Stack,
  styled,
  Theme,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
  Zoom,
} from '@mui/material';

const HelperTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    shouldForwardProp: (prop) => prop !== 'width',
  }
)<{ width: number }>(({ theme, width }) => ({
  // display: 'block',
  // width: '100%',
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.grey[200],
    color: 'rgba(0, 0, 0, 0.87)',
    width: width,
    fontSize: theme.typography.pxToRem(12),
  },
}));

export interface IRHFHelperTipProps extends Omit<TooltipProps, 'title'> {
  placeholder: string;
  focused: boolean;
}

export function RHFHelperTip({
  placeholder,
  focused,
  placement = 'top',
  children,
}: IRHFHelperTipProps) {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) setWidth((ref.current as HTMLElement)?.offsetWidth);
  }, []);

  const isLong = placeholder.length >= 30;
  const hasBreak = placeholder.includes('\n');
  const multiline = hasBreak || isLong;

  const typographyComp = multiline ? 'p' : 'span';
  const typographySx = multiline
    ? { marginTop: (theme: Theme) => theme.spacing(1) }
    : { verticalAlign: 'middle' };

  return (
    <HelperTooltip
      title={
        <Stack
          direction="column"
          spacing={1}
          sx={{
            padding: (theme) => theme.spacing(1.5),
            whiteSpace: 'pre-wrap',
          }}
        >
          {placeholder && (
            <Box component="div">
              <Chip
                size="small"
                label="入力例"
                sx={{ margin: (theme) => theme.spacing(0, 1, 0, 0) }}
              />
              <Typography component={typographyComp} sx={typographySx}>
                {placeholder}
              </Typography>
            </Box>
          )}
        </Stack>
      }
      TransitionComponent={Zoom}
      open={!!placeholder && focused}
      placement={placement}
      width={width}
    >
      <Box ref={ref} sx={{ width: '100%' }}>
        {children}
      </Box>
    </HelperTooltip>
  );
}

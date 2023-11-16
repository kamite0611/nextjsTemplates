import { pxToRem } from './utils';

const typography = {
  fontFamily: 'inherit',
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: pxToRem(0.8),
    fontSize: pxToRem(36),
  },
  h2: {
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: pxToRem(0.8),
    fontSize: pxToRem(20),
  },
  h3: {
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: pxToRem(0.8),
    fontSize: pxToRem(20),
  },
  body1: {
    letterSpacing: pxToRem(0.5),
    lineHeight: 1.6,
    fontSize: pxToRem(15),
  },
} as const;

export default typography;

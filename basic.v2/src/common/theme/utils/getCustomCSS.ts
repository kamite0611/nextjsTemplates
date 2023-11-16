export const breakMultiLine = (line: number): any => ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: line,
  overflow: 'hidden',
});

export const getSafePath = (path: string): string => {
  if(path.startsWith('docs/')) {
    return path.substring(5);
  } else if (path.startsWith('sassdoc/')) {
    return path.substring(8);
  } else {
    throw new Error('Unsafe file access attempt.');
  }
};

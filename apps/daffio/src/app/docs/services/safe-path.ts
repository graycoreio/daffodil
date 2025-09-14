export const getSafePath = (path: string): string => {
  if(!path.startsWith('docs/')) {
    throw new Error('Unsafe file access attempt.');
  }
  return path.substring(5);
};

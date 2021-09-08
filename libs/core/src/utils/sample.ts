/**
 * Returns a random element of an array.
 */
export const sample = <T>(array: T[]): T => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

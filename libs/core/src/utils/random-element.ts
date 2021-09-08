/**
 * Returns a random subset of an array in a random order.
 *
 * @param array
 */
export const daffRandomElement = <T>(array: T[]): T => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

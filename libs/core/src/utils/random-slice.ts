/**
 * Returns a random slice of an array.
 * An optional length may be specified.
 *
 * @param array
 */
export const randomSlice = <T>(array: T[], length?: number): T[] => {
  if(array.length === 0) {
    return [];
  };
  if(length > array.length) {
    throw new Error('Requested length is longer than array length.');
  }
  const arrayLength = length || Math.floor(Math.random() * array.length);
  const start = Math.floor(Math.random() * (array.length - arrayLength));
  const end = start + arrayLength;
  return array.slice(start, end);
};

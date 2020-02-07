/**
 * Returns a random slice of an array.
 * @param array 
 */
export const randomSlice = <T>(array: T[]): T[] => {
  if(array.length === 0) { return []};
  const start = Math.floor(Math.random() * Math.floor(array.length - 1));
  const end =  start + Math.floor(Math.random() * (array.length - 1 - start));
  return array.slice(start, end);
}

/**
 * Immutable Fisher-Yates Shuffle
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 */
export const shuffle = <T>(array: T[]): T[] => {
  const result = [];
  array.forEach((el, i) => {
    const s = Math.floor(Math.random() * i);
    if( s != i ){
      result[i] = result[s];
    }
    result[s] = el;
  });
  return result;
}

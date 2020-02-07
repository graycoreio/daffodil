import { shuffle } from './shuffle';

/**
 * Returns a random subset of an array in a random order.
 * @param array 
 * @param length 
 */
export const randomSubset = <T>(array: T[], length? :number): T[] => {
  if(length > array.length){
    throw new Error('Requested length is longer than array length.');
  }
  length = length ? length : Math.floor(Math.random() * array.length);
  return shuffle(array).slice(0, length);
}

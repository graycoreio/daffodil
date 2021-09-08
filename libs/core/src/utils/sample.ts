import { randomSlice } from './random-slice';

/**
 * Returns a random element of an array.
 */
export const sample = <T>(array: T[]): T => randomSlice(array, 1)[0];

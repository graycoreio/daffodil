/**
 * Range
 * 
 * Range accepts two inputs, a `start` and an `end`
 * and returns an array filled with numbers from
 * `start` to `end`. 
 * 
 * @param start
 * @param end
 * @returns number
 */
export const range = (start: number, end: number) : Array<number> => 
    Array.apply(null, Array(end - start + 1)).map((val, index) => index + start);


/**
 * A recursive binary search over a sorted array to find the insertion point.
 * https://stackoverflow.com/questions/1344500/efficient-way-to-insert-a-number-into-a-sorted-array-of-numbers
 * @param element 
 * @param array 
 * @param comparer 
 * @param start 
 * @param end 
 */
const locationOf = <T>(element: T, array: T[], comparer, start = 0, end = array.length) => {

  if (array.length === 0)
    return -1;

  var pivot = (start + end) >> 1;

  var c = comparer(element, array[pivot]);
  if (end - start <= 1) return c == -1 ? pivot - 1 : pivot;

  switch (c) {
    case -1: return locationOf(element, array, comparer, start, pivot);
    case 0: return pivot;
    case 1: return locationOf(element, array, comparer, pivot, end);
  };
}

const defaultCompare = (a, b) => {
  if (a > b) { return 1; }
  if (a == b) { return 0; }
  if (a < b) { return -1; }
}


/**
 * Insert into a sorted array quickly.
 * **Warning** This assumes that your array is sorted. If your array is not sorted
 * this function will insert into the first location it can.
 * 
 * @param element 
 * @param array 
 */
export const sortedArrayInsert = (element, array, comparer = defaultCompare) => {
  array.splice(locationOf(element, array, comparer) + 1, 0, element);
  return array;
}
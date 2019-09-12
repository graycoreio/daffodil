import { sortedArrayInsert } from "./sorted-array-insert";

describe('sortedArrayInsert', () => {
  it('inserts an element into a sorted array',() => {
    const array = [0,1,2,3,4,5];
    const element = 6;
    expect(sortedArrayInsert(element, array)).toEqual([0,1,2,3,4,5,6])
  });

  it('sorts least to greatest by default',() => {
    const array = [0,1,2,3];
    const element = 6;
    expect(sortedArrayInsert(element, array)).toEqual([0,1,2,3,6])
  });

  it('sorts strings', () => {
    const array = ["a","b","c"];
    const element = "d";
    expect(sortedArrayInsert(element, array)).toEqual(["a","b","c","d"]);
  });

  it('inserts an element into a sorted array with a configurable comparison',() => {
    const array = [0,1,2,3,4,5];
    const element = 6;
    const comparer = (a,b) => {
      if (a > b) { return -1; }
      if (a == b) { return 0; }
      if (a < b) { return 1; }
    }
    expect(sortedArrayInsert(element, array, comparer)).toEqual([6,0,1,2,3,4,5])
  });
})
import { unique } from './unique';

describe('@daffodil/core | unique', () => {
  describe('when no comparator is passed', () => {
    let items: number[];
    let filteredList: number[];

    beforeEach(() => {
      items = [
        0,
        1,
        0,
        3,
        1,
        2,
        1,
        1,
        3,
        3,
      ];
      filteredList = unique(items);
    });

    it('should return a list of items with duplicates removed according to a strict equality comparison', () => {
      expect(filteredList.length).toEqual(4);
      expect(filteredList).toContain(0);
      expect(filteredList).toContain(1);
      expect(filteredList).toContain(2);
      expect(filteredList).toContain(3);
    });
  });

  describe('when a custom comparator is passed', () => {
    let items: Record<string, string>[];
    let filteredList: Record<string, string>[];

    beforeEach(() => {
      items = [
        { key: 'c' },
        { key: 'a' },
        { key: 'b' },
        { key: 'b' },
        { key: 'c' },
        { key: 'b' },
        { key: 'c' },
        { key: 'c' },
        { key: 'a' },
        { key: 'a' },
        { key: 'c' },
      ];
      filteredList = unique(items, (a, b) => a.key === b.key);
    });

    it('should return a list of items with duplicates removed', () => {
      expect(filteredList.length).toEqual(3);
      expect(filteredList).toContain({ key: 'a' });
      expect(filteredList).toContain({ key: 'b' });
      expect(filteredList).toContain({ key: 'c' });
    });
  });
});

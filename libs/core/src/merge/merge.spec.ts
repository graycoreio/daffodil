import { daffMerge } from './merge';
import {
  daffArrayConcatMerger,
  daffDictAssignMerger,
} from './mergers/public_api';

describe('@daffodil/core | daffMerge', () => {
  const a = {
    ary: [1, 2],
    obj: {
      foo: 'bar',
      bar: 'baz',
    },
    fish: 'dumplings',
  };
  const b = {
    ary: [3, 4],
    obj: {
      foo: 5,
    },
    fish: 'tacos',
  };

  describe('when there is no defined strategy', () => {
    it('should merge the dicts with a shallow merge', () => {
      expect(daffMerge([a, b])).toEqual({
        ary: [3, 4],
        obj: {
          foo: 5,
        },
        fish: 'tacos',
      });
    });
  });

  describe('when there is a defined strategy', () => {
    it('should merge the dicts according to the passed strategy', () => {
      expect(daffMerge([a, b], {
        ary: daffArrayConcatMerger,
        obj: daffDictAssignMerger,
        fish: (aa, bb) => aa.toUpperCase().concat(bb),
      })).toEqual({
        ary: [1, 2, 3, 4],
        obj: {
          foo: 5,
          bar: 'baz',
        },
        fish: 'DUMPLINGStacos',
      });
    });
  });
});

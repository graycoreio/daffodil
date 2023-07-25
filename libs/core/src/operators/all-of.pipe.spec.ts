import {
  cold,
  hot,
} from 'jasmine-marbles';

import { allOf } from './all-of.pipe';

describe('@daffodil/core | allOf', () => {
  it('should return true when all of the input streams emit a truthy value', () => {
    expect(allOf([
      hot('ab', { a: true, b: true }),
      hot('ab', { a: false, b: true }),
    ])).toBeObservable(cold('a(bc)', { a: false, b: false, c: true }));
  });

  it('should return false when any of the input streams emit a falsy value', () => {
    expect(allOf([
      hot('ab', { a: true, b: false }),
      hot('ab', { a: false, b: false }),
    ])).toBeObservable(cold('a(bc)', { a: false, b: false, c: false }));
  });
});

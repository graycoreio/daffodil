import {
  cold,
  hot,
} from 'jasmine-marbles';

import { anyOf } from './any-of.pipe';

describe('@daffodil/core | anyOf', () => {
  it('should return true when any of the input streams emit a truthy value', () => {
    expect(anyOf([
      hot('ab', { a: true, b: true }),
      hot('ab', { a: false, b: true }),
    ])).toBeObservable(cold('a(bc)', { a: true, b: true, c: true }));
  });

  it('should return false when all of the input streams emit a falsy value', () => {
    expect(anyOf([
      hot('ab', { a: true, b: false }),
      hot('ab', { a: false, b: false }),
    ])).toBeObservable(cold('a(bc)', { a: true, b: false, c: false }));
  });
});

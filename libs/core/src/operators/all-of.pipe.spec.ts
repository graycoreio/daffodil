
import { runMarbles } from '@daffodil/jasmine';

import { allOf } from './all-of.pipe';

describe('@daffodil/core | allOf', () => {
  it('should return true when all of the input streams emit a truthy value', () => {
    runMarbles(helpers => {
      helpers.expectObservable(allOf([
        helpers.hot('ab', { a: true, b: true }),
        helpers.hot('ab', { a: false, b: true }),
      ])).toBe('a(bc)', { a: false, b: false, c: true });
    });
  });

  it('should return false when any of the input streams emit a falsy value', () => {
    runMarbles(helpers => {
      helpers.expectObservable(allOf([
        helpers.hot('ab', { a: true, b: false }),
        helpers.hot('ab', { a: false, b: false }),
      ])).toBe('a(bc)', { a: false, b: false, c: false });
    });
  });
});

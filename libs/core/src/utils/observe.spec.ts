
import { runMarbles } from '@daffodil/jasmine';

import { observe } from './observe';

describe('@daffodil/core | observe', () => {
  describe('when the passed value is an observable', () => {
    it('should return an equivalent observable', () => {
      runMarbles(helpers => {
        const val = 5;
        helpers.expectObservable(observe(helpers.hot('--a', { a: val }))).toBe('--a', { a: val });
      });
    });
  });

  describe('when the passed value is a promise', () => {
    it('should return an equivalent observable', (done) => {
      const val = 5;
      observe(Promise.resolve(val)).subscribe((res) => {
        expect(res).toEqual(val);
        done();
      });
    });
  });

  describe('when the passed value is neither a promise nor an observable', () => {
    it('should return an observable that emits the passed value', (done) => {
      const val = 5;
      observe(val).subscribe((res) => {
        expect(res).toEqual(val);
        done();
      });
    });
  });
});

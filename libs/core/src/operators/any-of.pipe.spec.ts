import { TestScheduler } from 'rxjs/testing';

import { anyOf } from './any-of.pipe';

describe('@daffodil/core | anyOf', () => {
  it('should return true when any of the input streams emit a truthy value', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    testScheduler.run(helpers => {
      helpers.expectObservable(anyOf([
        helpers.hot('ab', { a: true, b: true }),
        helpers.hot('ab', { a: false, b: true }),
      ])).toBe('a(bc)', { a: true, b: true, c: true });
    });
  });

  it('should return false when all of the input streams emit a falsy value', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    testScheduler.run(helpers => {
      helpers.expectObservable(anyOf([
        helpers.hot('ab', { a: true, b: false }),
        helpers.hot('ab', { a: false, b: false }),
      ])).toBe('a(bc)', { a: true, b: false, c: false });
    });
  });
});

import { daffUriTruncateQueryFragment } from './query-fragment';

describe('@daffodil/core/routing | daffUriTruncateQueryFragment', () => {
  let testStr: string;
  let result: string;

  describe('when the string has no query parameters or fragments', () => {
    beforeEach(() => {
      testStr = '/foo';
      result = daffUriTruncateQueryFragment(testStr);
    });

    it('should return the original string', () => {
      expect(result).toEqual(testStr);
    });
  });

  describe('when the string does not have a leading slash', () => {
    beforeEach(() => {
      testStr = 'foo';
      result = daffUriTruncateQueryFragment(testStr);
    });

    it('should return the original string with a leading slash', () => {
      expect(result).toEqual(`/${testStr}`);
    });
  });

  describe('when the string has query parameters', () => {
    beforeEach(() => {
      testStr = '/foo?test=thing';
      result = daffUriTruncateQueryFragment(testStr);
    });

    it('should return the URI without the query parameters', () => {
      expect(result).toEqual('/foo');
    });
  });

  describe('when the string has fragments', () => {
    beforeEach(() => {
      testStr = '/foo#id';
      result = daffUriTruncateQueryFragment(testStr);
    });

    it('should return the URI without the fragments', () => {
      expect(result).toEqual('/foo');
    });
  });

  describe('when the string has fragments and query parameters', () => {
    beforeEach(() => {
      testStr = '/foo?test=thing#id';
      result = daffUriTruncateQueryFragment(testStr);
    });

    it('should return the URI without the fragments or query parameters', () => {
      expect(result).toEqual('/foo');
    });
  });
});

import { daffUriTruncateLeadingPathSegments } from './leading-path-segments';

describe('@daffodil/core/routing | daffUriTruncateLeadingPathSegments', () => {
  let testStr: string;
  let result: string;

  describe('when the string has no leading path segments', () => {
    beforeEach(() => {
      testStr = 'foo';
      result = daffUriTruncateLeadingPathSegments(testStr);
    });

    it('should return the original string', () => {
      expect(result).toEqual(testStr);
    });
  });

  describe('when the string has leading path segments', () => {
    beforeEach(() => {
      testStr = '/foo/bar/baz';
      result = daffUriTruncateLeadingPathSegments(testStr);
    });

    it('should return the final path segment', () => {
      expect(result).toEqual('baz');
    });
  });
});

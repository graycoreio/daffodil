import { daffUriTruncateLeadingSlash } from './leading-slash';

describe('@daffodil/core/routing | daffUriTruncateLeadingSlash', () => {
  let testStr: string;
  let result: string;

  describe('daffUriTruncateLeadingSlash', () => {
    describe('when the string has no leading slash', () => {
      beforeEach(() => {
        testStr = 'foo/bar/baz';
        result = daffUriTruncateLeadingSlash(testStr);
      });

      it('should return the original string', () => {
        expect(result).toEqual(testStr);
      });
    });

    describe('when the string has a leading slash', () => {
      beforeEach(() => {
        testStr = '/foo/bar/baz';
        result = daffUriTruncateLeadingSlash(testStr);
      });

      it('should return everything except the leading slash', () => {
        expect(result).toEqual('foo/bar/baz');
      });
    });
  });
});

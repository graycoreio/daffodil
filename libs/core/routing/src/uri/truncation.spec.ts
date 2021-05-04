import {
  daffUriTruncateFileExtension,
  daffUriTruncateLeadingSlash,
  daffUriTruncateLeadingPathSegments,
  daffUriTruncateQueryFragment,
} from './truncation';

describe('@daffodil/driver | URI Truncation Regex', () => {
  let testStr: string;
  let result: string;

  describe('daffUriTruncateFileExtension', () => {
    describe('when the string has no extension', () => {
      beforeEach(() => {
        testStr = 'foo';
        result = daffUriTruncateFileExtension(testStr);
      });

      it('should return the original string', () => {
        expect(result).toEqual(testStr);
      });
    });

    describe('when the string has one extension', () => {
      beforeEach(() => {
        testStr = 'foo.bar';
        result = daffUriTruncateFileExtension(testStr);
      });

      it('should return the base string in the uri capture group', () => {
        expect(result).toEqual('foo');
      });
    });

    describe('when the string has two extensions', () => {
      beforeEach(() => {
        testStr = 'foo.bar.baz';
        result = daffUriTruncateFileExtension(testStr);
      });

      it('should return the base string with one extension in the uri capture group', () => {
        expect(result).toEqual('foo.bar');
      });
    });
  });

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

  describe('daffUriTruncateLeadingPathSegments', () => {
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

  describe('daffUriTruncateQueryFragment', () => {
    describe('when the string has no query parameters or fragments', () => {
      beforeEach(() => {
        testStr = '/foo';
        result = daffUriTruncateQueryFragment(testStr);
      });

      it('should return the original string', () => {
        expect(result).toEqual(testStr);
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
});

import {
  MAGENTO_TRUNCATE_FILE_EXTENSION_REGEX,
  MAGENTO_TRUNCATE_LEADING_SLASH_REGEX,
  MAGENTO_TRUNCATE_LEADING_PATH_SEGMENTS_REGEX,
} from './truncation-regex';

describe('@daffodil/driver/magento | URI Truncation Regex', () => {
  let testStr: string;
  let result: RegExpMatchArray;

  describe('MAGENTO_TRUNCATE_FILE_EXTENSION_REGEX', () => {
    describe('when the string has no extension', () => {
      beforeEach(() => {
        testStr = 'foo';
        result = testStr.match(MAGENTO_TRUNCATE_FILE_EXTENSION_REGEX);
      });

      it('should return null', () => {
        expect(result).toBeNull();
      });
    });

    describe('when the string has one extension', () => {
      beforeEach(() => {
        testStr = 'foo.bar';
        result = testStr.match(MAGENTO_TRUNCATE_FILE_EXTENSION_REGEX);
      });

      it('should return the base string in the uri capture group', () => {
        expect(result.groups.uri).toEqual('foo');
      });
    });

    describe('when the string has two extensions', () => {
      beforeEach(() => {
        testStr = 'foo.bar.baz';
        result = testStr.match(MAGENTO_TRUNCATE_FILE_EXTENSION_REGEX);
      });

      it('should return the base string with one extension in the uri capture group', () => {
        expect(result.groups.uri).toEqual('foo.bar');
      });
    });
  });

  describe('MAGENTO_TRUNCATE_LEADING_SLASH_REGEX', () => {
    describe('when the string has no leading slash', () => {
      beforeEach(() => {
        testStr = 'foo/bar/baz';
        result = testStr.match(MAGENTO_TRUNCATE_LEADING_SLASH_REGEX);
      });

      it('should return the original string', () => {
        expect(result.groups.uri).toEqual(testStr);
      });
    });

    describe('when the string has a leading slash', () => {
      beforeEach(() => {
        testStr = '/foo/bar/baz';
        result = testStr.match(MAGENTO_TRUNCATE_LEADING_SLASH_REGEX);
      });

      it('should return everything except the leading slash', () => {
        expect(result.groups.uri).toEqual('foo/bar/baz');
      });
    });
  });

  describe('MAGENTO_TRUNCATE_LEADING_PATH_SEGMENTS_REGEX', () => {
    describe('when the string has no leading path segments', () => {
      beforeEach(() => {
        testStr = 'foo';
        result = testStr.match(MAGENTO_TRUNCATE_LEADING_PATH_SEGMENTS_REGEX);
      });

      it('should return the original string', () => {
        expect(result.groups.uri).toEqual(testStr);
      });
    });

    describe('when the string has leading path segments', () => {
      beforeEach(() => {
        testStr = '/foo/bar/baz';
        result = testStr.match(MAGENTO_TRUNCATE_LEADING_PATH_SEGMENTS_REGEX);
      });

      it('should return the final path segment', () => {
        expect(result.groups.uri).toEqual('baz');
      });
    });
  });
});

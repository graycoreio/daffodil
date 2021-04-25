import { MAGENTO_CATEGORY_URI_TRUNCATION_REGEX } from './default';

describe('@daffodil/category/driver/magento', () => {
  let testStr: string;
  let result: RegExpMatchArray;

  describe('when the string has no extension', () => {
    beforeEach(() => {
      testStr = 'foo';
      result = testStr.match(MAGENTO_CATEGORY_URI_TRUNCATION_REGEX);
    });

    it('should return null', () => {
      expect(result).toBeNull();
    });
  });

  describe('when the string has one extension', () => {
    beforeEach(() => {
      testStr = 'foo.bar';
      result = testStr.match(MAGENTO_CATEGORY_URI_TRUNCATION_REGEX);
    });

    it('should return the base string in the uri capture group', () => {
      expect(result.groups.uri).toEqual('foo');
    });
  });

  describe('when the string has two extensions', () => {
    beforeEach(() => {
      testStr = 'foo.bar.baz';
      result = testStr.match(MAGENTO_CATEGORY_URI_TRUNCATION_REGEX);
    });

    it('should return the base string with one extension in the uri capture group', () => {
      expect(result.groups.uri).toEqual('foo.bar');
    });
  });
});

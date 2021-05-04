import { daffUriTruncateFileExtension } from './file-extension';

describe('@daffodil/core/routing | daffUriTruncateFileExtension', () => {
  let testStr: string;
  let result: string;

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

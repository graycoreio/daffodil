import { magentoCategoryTruncateUri } from './truncate-uri';

describe('@daffodil/category/driver/magento | magentoCategoryTruncateUri', () => {
  let uri: string;
  let result: string;

  beforeEach(() => {
    uri = '/foo/bar.html?foo=bar#baz';
    result = magentoCategoryTruncateUri(uri);
  });

  it('should truncate leading slash, file extension, query params, and fragments', () => {
    expect(result).toEqual('foo/bar');
  });
});

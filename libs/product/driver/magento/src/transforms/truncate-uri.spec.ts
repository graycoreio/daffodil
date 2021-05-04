import { magentoProductTruncateUri } from './truncate-uri';

describe('@daffodil/product/driver/magento | magentoProductTruncateUri', () => {
  let uri: string;
  let result: string;

  beforeEach(() => {
    uri = '/foo/bar.html?foo=bar#baz';
    result = magentoProductTruncateUri(uri);
  });

  it('should truncate leading path segments, file extension, query params, and fragments', () => {
    expect(result).toEqual('bar');
  });
});

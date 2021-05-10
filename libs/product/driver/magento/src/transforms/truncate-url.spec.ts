import { magentoProductTruncateUrl } from './truncate-url';

describe('@daffodil/product/driver/magento | magentoProductTruncateUrl', () => {
  let url: string;
  let result: string;

  beforeEach(() => {
    url = '/foo/bar.html?foo=bar#baz';
    result = magentoProductTruncateUrl(url);
  });

  it('should truncate leading path segments, file extension, query params, and fragments', () => {
    expect(result).toEqual('bar');
  });
});

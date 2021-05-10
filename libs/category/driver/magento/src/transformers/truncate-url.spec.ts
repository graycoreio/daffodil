import { magentoCategoryTruncateUrl } from './truncate-url';

describe('@daffodil/category/driver/magento | magentoCategoryTruncateUrl', () => {
  let url: string;
  let result: string;

  beforeEach(() => {
    url = '/foo/bar.html?foo=bar#baz';
    result = magentoCategoryTruncateUrl(url);
  });

  it('should truncate leading slash, file extension, query params, and fragments', () => {
    expect(result).toEqual('foo/bar');
  });
});

import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import {
  MagentoUrlResolver,
  MagentoUrlRewriteEntityTypeEnum,
} from '@daffodil/external-router/driver/magento';

import { transformResolutionToResolvableUrlv241 } from './resolution-to-resolvable-url';

describe('@daffodil/external-router/driver/magento | transformResolutionToResolvableUrlv241', () => {
  let numberId: number;
  let url: string;
  let resolution: MagentoUrlResolver;
  let resolvableUrl: DaffExternallyResolvableUrl;

  beforeEach(() => {
    numberId = 5;
    url = 'url';
    resolution = {
      relative_url: `/${url}?query=param#fragment`,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
      redirectCode: 0,
      id: numberId,
    };
    resolvableUrl = {
      id: String(numberId),
      url,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
    };
  });

  it('should return a resolvable url with the correct values', () => {
    const result = transformResolutionToResolvableUrlv241(resolution);
    expect(result.type).toEqual(MagentoUrlRewriteEntityTypeEnum.PRODUCT);
    expect(result.url).toEqual(url);
    expect(result.id).toEqual(String(numberId));
  });
});

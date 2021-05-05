import { ID } from '@daffodil/core';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import {
  MagentoUrlResolver,
  MagentoUrlRewriteEntityTypeEnum,
} from '@daffodil/external-router/driver/magento';

import { transformResolutionToResolvableUrlv242 } from './resolution-to-resolvable-url';

describe('@daffodil/external-router/driver/magento | transformResolutionToResolvableUrlv242', () => {
  let id: ID;
  let url: string;
  let resolution: MagentoUrlResolver;
  let resolvableUrl: DaffExternallyResolvableUrl;

  beforeEach(() => {
    id = 'id';
    url = 'url';
    resolution = {
      relative_url: `/${url}?query=param#fragment`,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
      redirectCode: 0,
      entity_uid: id,
    };
    resolvableUrl = {
      id,
      url,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
    };
  });

  it('should return a resolvable url with the correct values', () => {
    const result = transformResolutionToResolvableUrlv242(resolution);
    expect(result.type).toEqual(MagentoUrlRewriteEntityTypeEnum.PRODUCT);
    expect(result.url).toEqual(url);
    expect(result.id).toEqual(id);
  });
});

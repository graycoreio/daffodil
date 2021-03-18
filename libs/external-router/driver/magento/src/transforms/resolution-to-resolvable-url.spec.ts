import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import {
  MagentoUrlResolution,
  MagentoUrlRewriteEntityTypeEnum,
} from '@daffodil/external-router/driver/magento';

import { transformResolutionToResolvableUrl } from './resolution-to-resolvable-url';

describe('@daffodil/external-router/driver/magento | transformResolutionToResolvableUrl', () => {
  let url: string;
  let resolution: MagentoUrlResolution;
  let resolvableUrl: DaffExternallyResolvableUrl;

  beforeEach(() => {
    url = 'url';
    resolution = {
      relative_url: url,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
      redirectCode: 0,
      entity_uid: '',
    };
    resolvableUrl = {
      url,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
    };
  });

  it('should return a resolvable url with the correct values', () => {
    const result = transformResolutionToResolvableUrl(resolution);
    expect(result.type).toEqual(MagentoUrlRewriteEntityTypeEnum.PRODUCT);
    expect(result.url).toEqual(url);
  });
});

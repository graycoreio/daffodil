import { ID } from '@daffodil/core';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import {
  MagentoUrlResolver,
  MagentoUrlRewriteEntityTypeEnum,
} from '@daffodil/external-router/driver/magento';

import { transformResolutionToResolvableUrl } from './resolution-to-resolvable-url';

describe('@daffodil/external-router/driver/magento | transformResolutionToResolvableUrl', () => {
  let id: ID;
  let url: string;
  let resolution: MagentoUrlResolver;
  let resolvableUrl: DaffExternallyResolvableUrl;

  beforeEach(() => {
    id = 'id';
    url = 'url';
    resolution = {
      relative_url: url,
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
    const result = transformResolutionToResolvableUrl(resolution);
    expect(result.type).toEqual(MagentoUrlRewriteEntityTypeEnum.PRODUCT);
    expect(result.url).toEqual(url);
  });

  describe('when the id exists in the response', () => {
    let result: DaffExternallyResolvableUrl;
    let numberId: number;

    beforeEach(() => {
      numberId = 5;
      resolution.id = numberId;
      result = transformResolutionToResolvableUrl(resolution);
    });

    it('should set the ID from the response ID', () => {
      expect(result.id).toEqual(String(numberId));
    });
  });

  describe('when the id does not exist in the response', () => {
    let result: DaffExternallyResolvableUrl;

    beforeEach(() => {
      resolution.id = undefined;
      result = transformResolutionToResolvableUrl(resolution);
    });

    it('should set the ID from the response ID', () => {
      expect(result.id).toEqual(resolution.entity_uid);
    });
  });
});

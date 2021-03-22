import { DaffExternallyResolvableUrl } from '@daffodil/external-router';

import { MagentoUrlResolver } from '../model/url-resolver';

export const transformResolutionToResolvableUrl = (
  resolution: MagentoUrlResolver,
): DaffExternallyResolvableUrl => ({
  id: resolution.id?.toString() || resolution.entity_uid,
  url: resolution.relative_url,
  type: resolution.type,
});

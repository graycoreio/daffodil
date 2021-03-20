import { DaffExternallyResolvableUrl } from '@daffodil/external-router';

import { MagentoUrlResolver } from '../model/url-resolver';

export const transformResolutionToResolvableUrl = (
  resolution: MagentoUrlResolver,
): DaffExternallyResolvableUrl => ({
  url: resolution.relative_url,
  type: resolution.type,
});

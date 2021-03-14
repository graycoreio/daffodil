import { DaffExternallyResolvableUrl } from '@daffodil/external-router';

import { MagentoResolution } from '../model/resolution';

export const transformResolutionToResolvableUrl = (
  resolution: MagentoResolution,
): DaffExternallyResolvableUrl => ({
  url: resolution.relative_url,
  type: resolution.type,
});

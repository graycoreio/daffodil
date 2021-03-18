import { DaffExternallyResolvableUrl } from '@daffodil/external-router';

import { MagentoUrlResolution } from '../model/resolution';

export const transformResolutionToResolvableUrl = (
  resolution: MagentoUrlResolution,
): DaffExternallyResolvableUrl => ({
  url: resolution.relative_url,
  type: resolution.type,
});

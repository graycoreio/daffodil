import {
  daffUriTruncateLeadingSlash,
  daffUriTruncateQueryFragment,
} from '@daffodil/core/routing';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import { MagentoUrlResolver } from '@daffodil/external-router/driver/magento';

export const transformResolutionToResolvableUrlv241 = (
  resolution: MagentoUrlResolver,
): DaffExternallyResolvableUrl => ({
  id: resolution.id?.toString(),
  url: daffUriTruncateLeadingSlash(daffUriTruncateQueryFragment(resolution.relative_url)),
  type: resolution.type,
});

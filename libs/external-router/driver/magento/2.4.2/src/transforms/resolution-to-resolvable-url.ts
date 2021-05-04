import { daffUriTruncateLeadingSlash } from '@daffodil/core/routing';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import { MagentoUrlResolver } from '@daffodil/external-router/driver/magento';


export const transformResolutionToResolvableUrlv242 = (
  resolution: MagentoUrlResolver,
): DaffExternallyResolvableUrl => ({
  id: resolution.entity_uid,
  url: daffUriTruncateLeadingSlash(resolution.relative_url),
  type: resolution.type,
});

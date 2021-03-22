import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import { MagentoUrlResolver } from '@daffodil/external-router/driver/magento';

export const transformResolutionToResolvableUrlv241 = (
  resolution: MagentoUrlResolver,
): DaffExternallyResolvableUrl => ({
  id: resolution.id?.toString(),
  url: resolution.relative_url,
  type: resolution.type,
});

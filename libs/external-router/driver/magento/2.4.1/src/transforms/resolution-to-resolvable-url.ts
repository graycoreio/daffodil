import {
  daffUriTruncateLeadingSlash,
  daffUriTruncateQueryFragment,
} from '@daffodil/core/routing';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import { NOT_FOUND_RESOLUTION } from '@daffodil/external-router/driver';
import {
  MagentoUrlResolver,
  magentoTransformRedirectToHttpCode,
} from '@daffodil/external-router/driver/magento';

export const transformResolutionToResolvableUrlv241 = (
  resolution: MagentoUrlResolver,
): DaffExternallyResolvableUrl => (resolution ? {
  id: resolution.id?.toString(),
  url: daffUriTruncateLeadingSlash(daffUriTruncateQueryFragment(resolution.relative_url)),
  type: resolution.type,
  code: magentoTransformRedirectToHttpCode(resolution.redirectCode),
} : NOT_FOUND_RESOLUTION);


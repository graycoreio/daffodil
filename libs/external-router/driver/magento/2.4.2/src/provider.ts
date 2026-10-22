import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffMagentoCacheableOperation } from '@daffodil/driver/magento';
import { provideDaffExternalRouterDriver } from '@daffodil/external-router/driver';

import { DAFF_MAGENTO_RESOLVE_URL_QUERY_NAME } from './graphql/queries/resolve-url-v2.4.2';
import { DaffExternalRouterMagentoDriver } from './magento.service';

/**
 * Provides a Magento v2.4.2 implementation of {@link DaffExternalRouterDriver}.
 *
 * @deprecated This version of Magento is unsupported. Use `@daffodil/external-router/driver/magento/2.4.3` instead. Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
export const provideDaffExternalRouterMagentoDriver = (
): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffExternalRouterDriver(DaffExternalRouterMagentoDriver),
  provideDaffMagentoCacheableOperation(DAFF_MAGENTO_RESOLVE_URL_QUERY_NAME),
]);

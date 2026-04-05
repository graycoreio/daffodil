import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffMagentoCacheableOperation } from '@daffodil/driver/magento';
import { provideDaffExternalRouterDriver } from '@daffodil/external-router/driver';

import { DAFF_MAGENTO_RESOLVE_URL_QUERY_NAME } from './graphql/queries/resolve-url-v2.4.2';
import { DaffExternalRouterMagentoDriver } from './magento.service';

/**
 * Provides a Magento 2.4.2 implementation of {@link DaffExternalRouterDriver}.
 */
export const provideDaffExternalRouterMagentoDriver = (
): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffExternalRouterDriver(DaffExternalRouterMagentoDriver),
  provideDaffMagentoCacheableOperation(DAFF_MAGENTO_RESOLVE_URL_QUERY_NAME),
]);

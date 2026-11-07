import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffMagentoCacheableOperation } from '@daffodil/driver/magento/2.4.7';
import { provideDaffGeographyDriver } from '@daffodil/geography/driver';

import { DaffGeographyMagentoService } from './geography.service';
import {
  MAGENTO_GET_COUNTRIES_QUERY_NAME,
  MAGENTO_GET_COUNTRY_QUERY_NAME,
} from './queries/public_api';

/**
 * Provides the Magento implementation of the `@daffodil/geography/driver` interfaces.
 */
export const provideDaffGeographyMagentoDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffGeographyDriver(DaffGeographyMagentoService),
  provideDaffMagentoCacheableOperation(MAGENTO_GET_COUNTRY_QUERY_NAME),
  provideDaffMagentoCacheableOperation(MAGENTO_GET_COUNTRIES_QUERY_NAME),
]);

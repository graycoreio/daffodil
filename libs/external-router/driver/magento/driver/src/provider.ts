import { EnvironmentProviders } from '@angular/core';

import { provideDaffExternalRouterMagentoDriver as provideDaffExternalRouterMagentoDriver241 } from '@daffodil/external-router/driver/magento/2.4.1';
import { provideDaffExternalRouterMagentoDriver as provideDaffExternalRouterMagentoDriver242 } from '@daffodil/external-router/driver/magento/2.4.2';
import { provideDaffExternalRouterMagentoDriver as provideDaffExternalRouterMagentoDriver243 } from '@daffodil/external-router/driver/magento/2.4.3';

/**
 * Provides a Magento implementation of {@link DaffExternalRouterDriver} for the specified API version.
 *
 * @param apiVersion The Magento API version to use. Defaults to `'2.4.3'`.
 */
export const provideDaffExternalRouterMagentoDriver = (apiVersion = '2.4.3'): EnvironmentProviders => {
  switch (apiVersion) {
    case '2.4.1':
      return provideDaffExternalRouterMagentoDriver241();
    case '2.4.2':
      return provideDaffExternalRouterMagentoDriver242();
    default:
      return provideDaffExternalRouterMagentoDriver243();
  }
};

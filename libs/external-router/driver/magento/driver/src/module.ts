import { ModuleWithProviders } from '@angular/core';

import { DaffExternalRouterDriverMagentoModule as DaffExternalRouterDriverMagentoModule241 } from '@daffodil/external-router/driver/magento/2.4.1';
import { DaffExternalRouterDriverMagentoModule as DaffExternalRouterDriverMagentoModule242 } from '@daffodil/external-router/driver/magento/2.4.2';
import { DaffExternalRouterDriverMagentoModule as DaffExternalRouterDriverMagentoModule243 } from '@daffodil/external-router/driver/magento/2.4.3';

interface MagentoDriverModuleStatic {
  forRoot(): ModuleWithProviders<unknown>;
}

/**
 * Returns the Magento driver NgModule for the specified API version.
 *
 * @param apiVersion The Magento API version to use. Defaults to `'2.4.3'`.
 */
export const getDaffExternalRouterMagentoDriverModule = (apiVersion = '2.4.3') => {
  switch (apiVersion) {
    case '2.4.1':
      return DaffExternalRouterDriverMagentoModule241;
    case '2.4.2':
      return DaffExternalRouterDriverMagentoModule242;
    default:
      return DaffExternalRouterDriverMagentoModule243;
  }
};

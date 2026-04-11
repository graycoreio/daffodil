import { Type } from '@angular/core';

import { DaffExternalRouterDriverInterface } from '@daffodil/external-router/driver';
import { DaffExternalRouterMagentoDriver as DaffExternalRouterMagentoDriver241 } from '@daffodil/external-router/driver/magento/2.4.1';
import { DaffExternalRouterMagentoDriver as DaffExternalRouterMagentoDriver242 } from '@daffodil/external-router/driver/magento/2.4.2';
import { DaffExternalRouterMagentoDriver as DaffExternalRouterMagentoDriver243 } from '@daffodil/external-router/driver/magento/2.4.3';

/**
 * Returns the Magento implementation of {@link DaffExternalRouterDriverInterface} for the specified API version.
 *
 * @param apiVersion The Magento API version to use. Defaults to `'2.4.3'`.
 */
export const getDaffExternalRouterMagentoDriverService = (apiVersion = '2.4.3'): Type<DaffExternalRouterDriverInterface> => {
  switch (apiVersion) {
    case '2.4.1':
      return DaffExternalRouterMagentoDriver241;
    case '2.4.2':
      return DaffExternalRouterMagentoDriver242;
    default:
      return DaffExternalRouterMagentoDriver243;
  }
};

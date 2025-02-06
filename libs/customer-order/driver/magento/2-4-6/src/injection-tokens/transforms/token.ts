import {
  InjectionToken,
  inject,
} from '@angular/core';

import { DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_TRANSFORMS } from './extra.token';
import { DaffMagentoCustomerOrderTransform } from '../../interfaces/public_api';
import { MagentoCustomerOrder } from '../../models/public_api';
import { daffMagentoCustomerOrderTransformOrder } from '../../transforms/responses/order';

/**
 * An internal token to combine the Magento preview transform with the injected transforms.
 */
export const DAFF_CUSTOMER_ORDER_MAGENTO_ORDER_TRANSFORM = new InjectionToken<DaffMagentoCustomerOrderTransform>(
  'DAFF_CUSTOMER_ORDER_MAGENTO_ORDER_TRANSFORM',
  {
    factory: () => {
      const transforms = inject(DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_TRANSFORMS);
      return (magentoOrder: MagentoCustomerOrder, email: string) =>
        transforms.reduce(
          (daffOrder, transform) => transform(daffOrder, magentoOrder, email),
          daffMagentoCustomerOrderTransformOrder(magentoOrder, email),
        );
    },
  },
);

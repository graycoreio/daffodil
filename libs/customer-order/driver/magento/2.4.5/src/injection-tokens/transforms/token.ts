import { inject } from '@angular/core';

import { createSingleInjectionToken } from '@daffodil/core';

import { DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_TRANSFORMS } from './extra.token';
import { DaffMagentoCustomerOrderTransform } from '../../interfaces/public_api';
import { MagentoCustomerOrder } from '../../models/public_api';
import { daffMagentoCustomerOrderTransformOrder } from '../../transforms/responses/order';

export const {
  /**
   * An internal token to combine the Magento preview transform with the injected transforms.
   */
  token: DAFF_CUSTOMER_ORDER_MAGENTO_ORDER_TRANSFORM,
  /**
   * Provider function for {@link DAFF_CUSTOMER_ORDER_MAGENTO_ORDER_TRANSFORM}.
   */
  provider: provideDaffCustomerOrderMagentoOrderTransform,
} = createSingleInjectionToken<DaffMagentoCustomerOrderTransform>(
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

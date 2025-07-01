import { inject } from '@angular/core';

import { createSingleInjectionToken } from '@daffodil/core';

import { MAGENTO_ORDER_EXTRA_TRANSFORMS } from './extra.token';
import { daffMagentoTransformOrder } from './order';
import { MagentoOrderTransform } from './type';
import { MagentoOrder } from '../../models/responses/public_api';

export const {
  /**
   * An internal token to combine the Magento preview transform with the injected transforms.
   */
  token: MAGENTO_ORDER_TRANSFORM,
  /**
   * Provider function for {@link MAGENTO_ORDER_TRANSFORM}.
   */
  provider: provideMagentoOrderTransform,
} = createSingleInjectionToken<MagentoOrderTransform>(
  'MAGENTO_ORDER_TRANSFORM',
  {
    factory: () => {
      const transforms = inject(MAGENTO_ORDER_EXTRA_TRANSFORMS);
      return (magentoOrder: MagentoOrder) =>
        transforms.reduce(
          (daffOrder, transform) => transform(daffOrder, magentoOrder),
          daffMagentoTransformOrder(magentoOrder),
        );
    },
  },
);

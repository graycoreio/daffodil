import { inject } from '@angular/core';

import { createSingleInjectionToken } from '@daffodil/core';

import { DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_ITEM_TRANSFORMS } from './extra.token';
import { MagentoBundleProductItemTransform } from '../../../interfaces/public_api';
import { MagentoBundledProductItem } from '../../../models/public_api';
import { MagentoBundledProductItemTransformer } from '../../../transforms/public_api';

export const {
  /**
   * An internal token to combine the Magento preview transform with the injected transforms.
   */
  token: DAFF_PRODUCT_COMPOSITE_MAGENTO_ITEM_TRANSFORM,
  /**
   * Provider function for {@link DAFF_PRODUCT_COMPOSITE_MAGENTO_ITEM_TRANSFORM}.
   */
  provider: provideDaffProductMagentoProductTransform,
} = createSingleInjectionToken<MagentoBundleProductItemTransform>(
  'DAFF_PRODUCT_COMPOSITE_MAGENTO_ITEM_TRANSFORM',
  {
    factory: () => {
      const transforms = inject(DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_ITEM_TRANSFORMS);
      const transformer = inject(MagentoBundledProductItemTransformer);
      return (magentoProduct: MagentoBundledProductItem) =>
        transforms.reduce(
          (daffProduct, transform) => transform(daffProduct, magentoProduct),
          transformer.transform(magentoProduct),
        );
    },
  },
);

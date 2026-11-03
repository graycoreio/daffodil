import { inject } from '@angular/core';

import { createSingleInjectionToken } from '@daffodil/core';

import { DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_OPTION_TRANSFORMS } from './extra.token';
import { MagentoBundleProductOptionTransform } from '../../../interfaces/public_api';
import { MagentoBundledProductItemOption } from '../../../models/public_api';
import { transformMagentoBundledProductItemOption } from '../../../transforms/public_api';

export const {
  /**
   * An internal token to combine the Magento preview transform with the injected transforms.
   */
  token: DAFF_PRODUCT_COMPOSITE_MAGENTO_OPTION_TRANSFORM,
  /**
   * Provider function for {@link DAFF_PRODUCT_COMPOSITE_MAGENTO_OPTION_TRANSFORM}.
   */
  provider: provideDaffProductMagentoProductTransform,
} = createSingleInjectionToken<MagentoBundleProductOptionTransform>(
  'DAFF_PRODUCT_COMPOSITE_MAGENTO_OPTION_TRANSFORM',
  {
    factory: () => {
      const transforms = inject(DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_OPTION_TRANSFORMS);
      return (magentoProduct: MagentoBundledProductItemOption) =>
        transforms.reduce(
          (daffProduct, transform) => transform(daffProduct, magentoProduct),
          transformMagentoBundledProductItemOption(magentoProduct),
        );
    },
  },
);

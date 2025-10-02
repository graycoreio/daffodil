import { inject } from '@angular/core';

import { createSingleInjectionToken } from '@daffodil/core';

import { DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_TRANSFORMS } from './extra.token';
import { MagentoConfigurableProductVariantTransform } from '../../../interfaces/public_api';
import { MagentoConfigurableProductVariant } from '../../../models/public_api';
import { transformVariant } from '../../../transforms/variant';

export const {
  /**
   * An internal token to combine the Magento preview transform with the injected transforms.
   */
  token: DAFF_PRODUCT_CONFIGURABLE_MAGENTO_VARIANT_TRANSFORM,
  /**
   * Provider function for {@link DAFF_PRODUCT_CONFIGURABLE_MAGENTO_VARIANT_TRANSFORM}.
   */
  provider: provideMagentoProductConfigurableVariantTransform,
} = createSingleInjectionToken<MagentoConfigurableProductVariantTransform>(
  'DAFF_PRODUCT_CONFIGURABLE_MAGENTO_VARIANT_TRANSFORM',
  {
    factory: () => {
      const transforms = inject(DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_TRANSFORMS);
      return (magentoVariant: MagentoConfigurableProductVariant) =>
        transforms.reduce(
          (daffVariant, transform) => transform(daffVariant, magentoVariant),
          transformVariant(magentoVariant),
        );
    },
  },
);

import {
  inject,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffCart } from '@daffodil/cart';
import {
  provideDaffCartMagentoExtraCartFragmentFactories,
  provideDaffCartMagentoCartTransformFactories,
} from '@daffodil/cart/driver/magento';
import { DaffCartWithCrossSellProducts } from '@daffodil/cross-sell-products';
import { DaffProduct } from '@daffodil/product';
import {
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS,
  DaffMagentoProductsTransformer,
  MAGENTO_PRODUCT_CONFIG_TOKEN,
} from '@daffodil/product/driver/magento';

import { MagentoCartWithCrossSell } from './models/public_api';
import { magentoCrossSellProductsFragment } from './queries/fragments/cross-sell-products';

/**
 * Main provider entrypoint for `@daffodil/cross-sell-products/driver/magento`.
 */
export const provideMagentoCrossSellProductsDriver = () => makeEnvironmentProviders([
  provideDaffCartMagentoExtraCartFragmentFactories(() =>
    magentoCrossSellProductsFragment([
      ...inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS),
      ...inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS),
    ]),
  ),
  provideDaffCartMagentoCartTransformFactories(() => {
    const transformer = inject(DaffMagentoProductsTransformer);
    const config = inject(MAGENTO_PRODUCT_CONFIG_TOKEN);
    return (daffCart: DaffCart, magentoCart: MagentoCartWithCrossSell): DaffCartWithCrossSellProducts => {
      const crossSells = magentoCart.items.reduce((acc, item) => acc.concat(item.product.crosssell_products.map((p) => transformer.transformMagentoProduct(p, config.baseMediaUrl))), <Array<DaffProduct>>[]);
      return {
        ...daffCart,
        crossSells,
        crossSellIds: crossSells.map((p) => p.id),
      };
    };
  }),
]);

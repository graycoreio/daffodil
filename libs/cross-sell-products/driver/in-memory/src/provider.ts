import {
  inject,
  makeEnvironmentProviders,
} from '@angular/core';
import { RequestInfo } from 'angular-in-memory-web-api';

import { DaffCart } from '@daffodil/cart';
import { provideDaffCartInMemoryExtraAttributesHookFactory } from '@daffodil/cart/driver/in-memory';
import { DaffCartWithCrossSellProducts } from '@daffodil/cross-sell-products';
import { DaffInMemoryBackendProductService } from '@daffodil/product/driver/in-memory';

/**
 * Main provider entrypoint for `@daffodil/cross-sell-products/driver/in-memory`.
 */
export const provideInMemoryCrossSellProductsDriver = () => makeEnvironmentProviders([
  provideDaffCartInMemoryExtraAttributesHookFactory(() => {
    const productBackend = inject(DaffInMemoryBackendProductService);
    return (reqInfo: RequestInfo, cart: DaffCart): DaffCartWithCrossSellProducts => {
      // look up products in the backend via cart items' product ID
      // this is dependent on cart add item actually verifying that the products
      // exist in the backend before adding to the cart
      const crossSells = cart.items
        ?.map((item) => productBackend.products.find((product) => product.id === item.product_id))
        .filter((e) => !!e)
				?? [];
      return {
        ...cart,
        crossSells,
        crossSellIds: crossSells.map((product) => product.id),
      };
    };
  }),
]);

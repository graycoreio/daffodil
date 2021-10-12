import { DaffProductDriverResponse } from '@daffodil/product/driver';
import { DaffInMemoryProductResponseExtraTransform } from '@daffodil/product/driver/in-memory';
import { DaffUpsellProduct } from '@daffodil/upsell-products';

/**
 * Spreads upsell products in the products array of the driver response.
 */
export const transformInMemoryUpsellProducts: DaffInMemoryProductResponseExtraTransform<DaffUpsellProduct> = (
  daffProductResponse: DaffProductDriverResponse,
  product: DaffUpsellProduct,
): DaffProductDriverResponse => ({
  ...daffProductResponse,

  products: [
    ...daffProductResponse.products,
    ...product.upsell,
  ],
});

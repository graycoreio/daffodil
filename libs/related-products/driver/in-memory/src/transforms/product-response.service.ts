import { DaffProductDriverResponse } from '@daffodil/product/driver';
import { DaffInMemoryProductResponseExtraTransform } from '@daffodil/product/driver/in-memory';
import { DaffRelatedProduct } from '@daffodil/related-products';

/**
 * Spreads related products in the products array of the driver response.
 */
export const transformInMemoryRelatedProducts: DaffInMemoryProductResponseExtraTransform<DaffRelatedProduct> = (
  daffProductResponse: DaffProductDriverResponse,
  product: DaffRelatedProduct,
): DaffProductDriverResponse => ({
  ...daffProductResponse,

  products: [
    ...daffProductResponse.products,
    ...product.related,
  ],
});

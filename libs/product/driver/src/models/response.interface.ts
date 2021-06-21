import { DaffProduct } from '@daffodil/product';

/**
 * The driver response model that contains all products returned by the platform.
 */
export interface DaffProductDriverResponse<T extends DaffProduct = DaffProduct> {
  /**
   * The ID of the "main" product.
   * That is, the ID that was passed into the driver call.
   */
  id: T['id'];
  /**
   * The list of products.
   * Contains the main product referenced by `id` and
   * possibly additional products that were nested inside the main product.
   * Does not guarantee uniqueness; duplicates may appear.
   */
  products: T[];
}

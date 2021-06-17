import { Dict } from '@daffodil/core';
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
   * The dictionary of products.
   * Contains the main product referenced by `id` and
   * possibly additional products nested inside the main product.
   */
  products: Dict<T>;
}

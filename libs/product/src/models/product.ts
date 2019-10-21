import { DaffProductImage } from './product-image';

/**
 * An interface for a product usable by the @daffodil/product library.
 */
export interface DaffProduct {
  id: string;
  sku?: string;
  price?: string;
  name?: string;
  brand?: string;
  description?: string;
  images?: DaffProductImage[];
}

import { DaffProduct } from '../../models/product';

/**
 * An interface that must be implemented by product transformer services; e.g. a service that transforms a magento product into a DaffProduct.
 */
export interface DaffProductTransformerInterface<T extends DaffProduct> {
  /**
   * Transform a single product into a kind of DaffProduct.
   */
  transform(product: any): T;
  /**
   * Tranform many products into many DaffProducts.
   * @param products An array of products to be transformed.
   */
  transformMany(products: any[]): T[];
}

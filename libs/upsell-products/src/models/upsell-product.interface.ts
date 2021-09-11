import { DaffProduct } from '@daffodil/product';

/**
 * An extension of a {@link DaffProduct} that includes a list of upsell products.
 */
export interface DaffUpsellProduct extends DaffProduct {
  /**
   * A list of upsell products.
   */
  upsell: DaffProduct[];
}

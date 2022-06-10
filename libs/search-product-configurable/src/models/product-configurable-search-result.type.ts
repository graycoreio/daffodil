import { DaffConfigurableProduct } from '@daffodil/product-configurable';
import { DaffSearchProductResult } from '@daffodil/search-product';

/**
 * An extension of a {@link DaffSearchProductResult} for configurable products.
 */
export interface DaffSearchProductConfigurableResult extends DaffSearchProductResult, DaffConfigurableProduct {};

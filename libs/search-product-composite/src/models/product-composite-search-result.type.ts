import { DaffCompositeProduct } from '@daffodil/product-composite';
import { DaffSearchProductResult } from '@daffodil/search-product';

/**
 * An extension of a {@link DaffSearchProductResult} for composite products.
 */
export interface DaffSearchProductCompositeResult extends DaffSearchProductResult, DaffCompositeProduct {};

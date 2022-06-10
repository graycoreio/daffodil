import { DaffProduct } from '@daffodil/product';

import { DAFF_SEARCH_PRODUCT_RESULT_KIND } from '../constants/public_api';
import { DaffSearchProductResult } from '../models/public_api';

/**
 * Transforms a list of products into a list of product search results.
 */
export const daffTransformProductsToSearchResults = <T extends DaffProduct = DaffProduct>(products: T[]): DaffSearchProductResult<T>[] =>
  products.map(product => ({
    ...product,
    kind: DAFF_SEARCH_PRODUCT_RESULT_KIND,
  }));

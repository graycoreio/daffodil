import { Product } from 'schema-dts';

import { DaffSearchResult } from '@daffodil/search';

import { DAFF_SEARCH_PRODUCT_RESULT_KIND } from '../constants/public_api';

/**
 * An extension of a {@link DaffSearchResult} for products.
 */
export type DaffSearchProductResult = DaffSearchResult & Product & {
  kind: typeof DAFF_SEARCH_PRODUCT_RESULT_KIND;
};

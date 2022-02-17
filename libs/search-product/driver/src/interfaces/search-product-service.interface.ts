import {
  DaffSearchProductResult,
  DAFF_SEARCH_PRODUCT_RESULT_KIND,
} from '@daffodil/search-product';
import { DaffSearchDriverKindedInterface } from '@daffodil/search/driver';

/**
 * A driver interface for searching products.
 *
 * @inheritdoc
 */
export interface DaffSearchProductDriverInterface<
  T extends DaffSearchProductResult = DaffSearchProductResult,
> extends DaffSearchDriverKindedInterface<T> {
  readonly kind: typeof DAFF_SEARCH_PRODUCT_RESULT_KIND;
}

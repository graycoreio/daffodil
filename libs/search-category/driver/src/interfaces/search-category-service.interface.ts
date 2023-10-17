import { DaffSearchDriverKindedInterface } from '@daffodil/search/driver';
import {
  DaffSearchCategoryResult,
  DAFF_SEARCH_CATEGORY_RESULT_KIND,
} from '@daffodil/search-category';

/**
 * A driver interface for searching categories.
 *
 * @inheritdoc
 */
export interface DaffSearchCategoryDriverInterface<
  T extends DaffSearchCategoryResult = DaffSearchCategoryResult,
> extends DaffSearchDriverKindedInterface<T> {
  readonly kind: typeof DAFF_SEARCH_CATEGORY_RESULT_KIND;
}

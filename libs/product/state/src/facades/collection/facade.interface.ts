import { Observable } from 'rxjs';

import { DaffCollectionFacadeInterface } from '@daffodil/core/state';
import {
  DaffProductCollectionMetadata,
  DaffProductFilter,
} from '@daffodil/product';

/**
 * A facade for interacting with a product collection state.
 */
export interface DaffProductCollectionFacadeInterface<
  TMetadata extends DaffProductCollectionMetadata = DaffProductCollectionMetadata
> extends DaffCollectionFacadeInterface<TMetadata> {
  /**
   * The filters available for the products of the product collection.
   */
  filters$: Observable<Record<DaffProductFilter['name'], DaffProductFilter>>;

  /**
   * The sort options available for the products of the product collection.
   */
  appliedFilters$: Observable<Record<DaffProductFilter['name'], DaffProductFilter>>;
}

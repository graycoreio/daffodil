import { Observable } from 'rxjs';

import { DaffSearchResultCollection } from '@daffodil/search';
import {
  DaffSearchProductResult,
  DAFF_SEARCH_PRODUCT_RESULT_KIND,
} from '@daffodil/search-product';
import {
  DaffSearchDriverKindedInterface,
  DaffSearchDriverOptions,
} from '@daffodil/search/driver';

import { DaffSearchProductDriverOptions } from './options.interface';
import { DaffSearchProductDriverResponse } from './response.interface';

/**
 * A driver interface for searching products.
 *
 * @inheritdoc
 */
export interface DaffSearchProductDriverInterface<
  T extends DaffSearchProductResult = DaffSearchProductResult,
> extends DaffSearchDriverKindedInterface<T> {
  readonly kind: typeof DAFF_SEARCH_PRODUCT_RESULT_KIND;

  search(query: string, options?: DaffSearchProductDriverOptions): Observable<DaffSearchProductDriverResponse<T>>;
  incremental(query: string, options?: DaffSearchDriverOptions): Observable<DaffSearchResultCollection<T>>;
}

import { Observable } from 'rxjs';

import {
  DaffSearchProductResult,
  DAFF_SEARCH_PRODUCT_RESULT_KIND,
} from '@daffodil/search-product';
import { DaffSearchDriverKindedInterface } from '@daffodil/search/driver';

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
  incremental(query: string, options?: DaffSearchProductDriverOptions): Observable<DaffSearchProductDriverResponse<T>>;
}

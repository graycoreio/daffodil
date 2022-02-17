import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  combineLatest,
  Observable,
} from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffSearchResultCollection } from '@daffodil/search';
import {
  DaffSearchDriverInterface,
  DaffSearchDriverKindedInterface,
  DaffSearchDriverOptions,
} from '@daffodil/search/driver';

import { DAFF_SEARCH_FEDERATED_DRIVERS } from './injection-tokens/drivers.token';

/**
 * A service for calling and combining the results of provided federated search drivers.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchFederatedDriver implements DaffSearchDriverInterface {
  constructor(
    @Inject(DAFF_SEARCH_FEDERATED_DRIVERS) private drivers: DaffSearchDriverKindedInterface[],
  ) {}

  search(query: string, options: DaffSearchDriverOptions = {}): Observable<DaffSearchResultCollection> {
    return combineLatest(this.drivers.map(driver => driver.search(query, options))).pipe(
      map(collectionList => Object.assign({}, ...collectionList)),
    );
  }
}

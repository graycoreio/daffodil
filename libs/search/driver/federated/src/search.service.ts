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
  DaffSearchDriverResponse,
} from '@daffodil/search/driver';

import {
  DaffSearchFederatedDriverConfig,
  DAFF_SEARCH_FEDERATED_CONFIG_TOKEN,
} from './config/public_api';
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
    @Inject(DAFF_SEARCH_FEDERATED_CONFIG_TOKEN) private config: DaffSearchFederatedDriverConfig,
  ) {}

  search(query: string, options: DaffSearchDriverOptions = {}): Observable<DaffSearchDriverResponse> {
    return combineLatest(this.drivers.reduce<Record<string, Observable<DaffSearchDriverResponse>>>((acc, driver) => {
      acc[driver.kind] = driver.search(query, options);
      return acc;
    }, {})).pipe(
      map(responses => ({
        collection: Object.assign({}, ...Object.values(responses).map(({ collection }) => collection)),
        metadata: this.config.preferredDriverKind ? responses[this.config.preferredDriverKind].metadata : {},
      })),
    );
  }

  incremental(query: string, options: DaffSearchDriverOptions = {}): Observable<DaffSearchResultCollection> {
    return combineLatest(this.drivers.reduce<Record<string, Observable<DaffSearchResultCollection>>>((acc, driver) => {
      acc[driver.kind] = driver.incremental(query, options);
      return acc;
    }, {})).pipe(
      map(responses => Object.assign({}, ...Object.values(responses))),
    );
  }
}

import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  InMemoryDbService,
  RequestInfo,
} from 'angular-in-memory-web-api';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DAFF_IN_MEMORY_DRIVER_CONFIG,
  DaffInMemoryBackendDelegate,
  DaffInMemoryDriverConfig,
  DaffInMemoryMultiRouteableBackend,
} from '@daffodil/driver/in-memory';

import { DAFF_CHECKOUT_IN_MEMORY_CHECKOUT_ORDER_COLLECTION_NAME } from '../collection-names.const';
import { DaffCheckoutInMemoryBackendOrderService } from '../order/backend.service';

/**
 * The collections that the root service manages.
 * Useful for a higher-level backend that delegates to this one based on collection name.
 */
const COLLECTION_NAMES = [
  DAFF_CHECKOUT_IN_MEMORY_CHECKOUT_ORDER_COLLECTION_NAME,
];

/**
 * The root in-memory backend.
 * Creates the database and delegates requests to child backends.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCheckoutInMemoryBackendRootService extends DaffInMemoryBackendDelegate implements InMemoryDbService, DaffInMemoryMultiRouteableBackend {
  constructor(
    orderService: DaffCheckoutInMemoryBackendOrderService,
    @Inject(DAFF_IN_MEMORY_DRIVER_CONFIG) _config: DaffInMemoryDriverConfig,
  ) {
    super([
      orderService,
    ], _config);
  }

  protected override delegateRequest(reqInfo: RequestInfo, method): Observable<any> {
    return super.delegateRequest({
      ...reqInfo,
      collection: [],
    }, method);
  }

  canHandle(collectionName: string): boolean {
    return COLLECTION_NAMES.includes(collectionName);
  }

  createDb(reqInfo: RequestInfo) {
    return of({});
  }
}

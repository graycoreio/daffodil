import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';
import { DaffCustomerStoreCreditDriverInterface } from '@daffodil/customer-store-credit/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CUSTOMER_STORE_CREDIT_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * The customer store credit in-memory driver to mock the customer store credit backend service.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerStoreCreditInMemoryDriver extends DaffInMemoryDriverBase implements DaffCustomerStoreCreditDriverInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CUSTOMER_STORE_CREDIT_IN_MEMORY_COLLECTION_NAME);
  }

  get(): Observable<DaffCustomerStoreCredit> {
    return this.http.get<DaffCustomerStoreCredit>(this.url);
  }
}

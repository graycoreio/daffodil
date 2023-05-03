import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';
import { DaffCustomerStoreCreditDriverInterface } from '@daffodil/customer-store-credit/driver';

/**
 * The customer store credit in-memory driver to mock the customer store credit backend service.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerStoreCreditInMemoryDriver implements DaffCustomerStoreCreditDriverInterface {
  /**
   * @docs-private
   */
  url = '/api/customer-store-credit';

  constructor(
    private http: HttpClient,
  ) {}

  get(): Observable<DaffCustomerStoreCredit> {
    return this.http.get<DaffCustomerStoreCredit>(this.url);
  }
}

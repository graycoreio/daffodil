import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCustomer } from '@daffodil/customer';
import { DaffCustomerDriverInterface } from '@daffodil/customer/driver';

/**
 * The customer inmemory driver to mock the customer backend service.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerInMemoryDriver implements DaffCustomerDriverInterface {
  /**
   * @docs-private
   */
  url = '/api/customer';

  constructor(
    private http: HttpClient,
  ) {}

  get(): Observable<DaffCustomer> {
    return this.http.get<DaffCustomer>(this.url);
  }
}

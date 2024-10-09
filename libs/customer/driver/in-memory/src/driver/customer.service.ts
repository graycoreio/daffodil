import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import {
  map,
  Observable,
} from 'rxjs';

import { DaffCustomer } from '@daffodil/customer';
import { DaffCustomerDriverInterface } from '@daffodil/customer/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CUSTOMER_IN_MEMORY_COLLECTION_NAME } from '../collection-names/customer.const';

/**
 * The customer inmemory driver to mock the customer backend service.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerInMemoryDriver extends DaffInMemoryDriverBase implements DaffCustomerDriverInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CUSTOMER_IN_MEMORY_COLLECTION_NAME);
  }

  changeEmail(email: string, password: string): Observable<DaffCustomer> {
    return this.http.put<DaffCustomer>(`${this.url}/email`, { email, password });
  }

  changePassword(oldPassword: string, newPassword: string): Observable<void> {
    return this.http.put<string>(`${this.url}/password`, { new: newPassword, old: oldPassword }).pipe(
      map(() => undefined),
    );
  }

  get(): Observable<DaffCustomer> {
    return this.http.get<DaffCustomer>(this.url);
  }

  update(customer: Partial<DaffCustomer>): Observable<DaffCustomer> {
    return this.http.put<DaffCustomer>(`${this.url}/customer`, customer);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import {
  map,
  Observable,
} from 'rxjs';

import { DaffIdentifiable } from '@daffodil/core';
import { DaffCustomerAddress } from '@daffodil/customer';
import { DaffCustomerAddressDriverInterface } from '@daffodil/customer/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CUSTOMER_ADDRESS_IN_MEMORY_COLLECTION_NAME } from '../collection-names/address.const';

/**
 * The customer address in-memory driver to mock the customer address backend service.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerAddressInMemoryDriver extends DaffInMemoryDriverBase implements DaffCustomerAddressDriverInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CUSTOMER_ADDRESS_IN_MEMORY_COLLECTION_NAME);
  }

  list(): Observable<DaffCustomerAddress[]> {
    return this.http.get<DaffCustomerAddress[]>(this.url);
  }

  get(addressId: string): Observable<DaffCustomerAddress> {
    return this.http.get<DaffCustomerAddress>(`${this.url}/${addressId}`);
  }

  update(address: Partial<DaffCustomerAddress> & DaffIdentifiable): Observable<DaffCustomerAddress[]> {
    return this.http.put<DaffCustomerAddress[]>(`${this.url}/${address.id}`, address);
  }

  add(address: DaffCustomerAddress): Observable<DaffCustomerAddress[]> {
    return this.http.post<DaffCustomerAddress[]>(this.url, address);
  }

  delete(addressId: string): Observable<DaffCustomerAddress[]> {
    return this.http.delete<DaffCustomerAddress[]>(`${this.url}/${addressId}`);
  }
}

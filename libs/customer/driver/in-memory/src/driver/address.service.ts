import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  map,
  Observable,
} from 'rxjs';

import { DaffIdentifiable } from '@daffodil/core';
import { DaffCustomerAddress } from '@daffodil/customer';
import { DaffCustomerAddressDriverInterface } from '@daffodil/customer/driver';

/**
 * The customer address in-memory driver to mock the customer address backend service.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerAddressInMemoryDriver implements DaffCustomerAddressDriverInterface {
  /**
   * @docs-private
   */
  url = '/api/customer-address';

  constructor(
    private http: HttpClient,
  ) {}

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

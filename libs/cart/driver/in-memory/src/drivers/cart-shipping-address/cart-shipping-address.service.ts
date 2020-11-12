import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffCartAddress, DaffCart } from '@daffodil/cart';
import {
  DaffCartShippingAddressServiceInterface,
} from '@daffodil/cart/driver';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCartShippingAddressService implements DaffCartShippingAddressServiceInterface<DaffCartAddress, DaffCart> {
  url = '/api/cart-shipping-address';

  constructor(private http: HttpClient) {}

  get(cartId: DaffCart['id']): Observable<DaffCartAddress> {
    return this.http.get<DaffCartAddress>(`${this.url}/${cartId}`);
  }

  update(cartId: DaffCart['id'], address: Partial<DaffCartAddress>): Observable<Partial<DaffCart>> {
    return this.http.put<Partial<DaffCart>>(`${this.url}/${cartId}`, address);
  }
}

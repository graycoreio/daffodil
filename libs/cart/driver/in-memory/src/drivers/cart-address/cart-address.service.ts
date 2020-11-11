import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffCart, DaffCartAddress } from '@daffodil/cart';
import {
  DaffCartAddressServiceInterface,
} from '@daffodil/cart/driver';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCartAddressService implements DaffCartAddressServiceInterface<DaffCartAddress, DaffCart> {
  url = '/api/cart-address';

  constructor(private http: HttpClient) {}

  update(cartId: DaffCart['id'], address: DaffCartAddress): Observable<Partial<DaffCart>> {
    return this.http.put<Partial<DaffCart>>(`${this.url}/${cartId}`, address);
  }
}

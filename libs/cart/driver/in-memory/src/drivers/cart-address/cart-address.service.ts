import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';
import { DaffCartAddressServiceInterface } from '@daffodil/cart/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCartAddressService implements DaffCartAddressServiceInterface<DaffCartAddress, DaffCart> {
  /**
   * The URL with which the driver makes calls to the backend.
   */
  readonly url = '/api/cart-address';

  constructor(private http: HttpClient) {}

  update(cartId: DaffCart['id'], address: DaffCartAddress): Observable<Partial<DaffCart>> {
    return this.http.put<Partial<DaffCart>>(`${this.url}/${cartId}`, address);
  }
}

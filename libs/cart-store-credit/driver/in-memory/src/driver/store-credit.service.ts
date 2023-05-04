import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { DaffCartStoreCreditDriverInterface } from '@daffodil/cart-store-credit/driver';

/**
 * The cart store credit in-memory driver to mock the cart store credit backend service.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCartStoreCreditInMemoryDriver implements DaffCartStoreCreditDriverInterface {
  /**
   * @docs-private
   */
  url = '/api/cart-store-credit';

  constructor(
    private http: HttpClient,
  ) {}

  apply(cartId: DaffCartWithStoreCredit['id']): Observable<DaffCartWithStoreCredit> {
    return this.http.post<DaffCartWithStoreCredit>(`${this.url}/${cartId}`, {});
  }

  remove(cartId: DaffCartWithStoreCredit['id']): Observable<DaffCartWithStoreCredit> {
    return this.http.delete<DaffCartWithStoreCredit>(`${this.url}/${cartId}`);
  }
}

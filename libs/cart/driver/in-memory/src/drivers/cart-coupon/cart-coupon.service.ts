import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import {
  DaffCart,
  DaffCartCoupon,
} from '@daffodil/cart';
import { DaffCartCouponServiceInterface } from '@daffodil/cart/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CART_IN_MEMORY_CART_COUPON_COLLECTION_NAME } from '../../collection-names';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCartCouponService extends DaffInMemoryDriverBase implements DaffCartCouponServiceInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CART_IN_MEMORY_CART_COUPON_COLLECTION_NAME);
  }

  list(cartId: DaffCart['id']): Observable<DaffCartCoupon[]> {
    return this.http.get<DaffCartCoupon[]>(`${this.url}/${cartId}/`);
  }

  apply(cartId: DaffCart['id'], coupon: DaffCartCoupon): Observable<Partial<DaffCart>> {
    return this.http.post<Partial<DaffCart>>(`${this.url}/${cartId}/`, coupon);
  }

  remove(cartId: DaffCart['id'], coupon: DaffCartCoupon): Observable<Partial<DaffCart>> {
    return this.http.delete<Partial<DaffCart>>(`${this.url}/${cartId}/${coupon.code}`);
  }

  removeAll(cartId: DaffCart['id']): Observable<Partial<DaffCart>> {
    return this.http.delete<Partial<DaffCart>>(`${this.url}/${cartId}/`);
  }
}

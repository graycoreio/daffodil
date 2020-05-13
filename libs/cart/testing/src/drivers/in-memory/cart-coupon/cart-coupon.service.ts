import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  DaffCart,
  DaffCartCouponServiceInterface,
  DaffCartCoupon
} from '@daffodil/cart';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCartCouponService implements DaffCartCouponServiceInterface {
  url = '/api/cart-coupon';

  constructor(private http: HttpClient) {}

  list(cartId: DaffCart['id']): Observable<DaffCartCoupon[]> {
    return this.http.get<DaffCartCoupon[]>(`${this.url}/${cartId}/`)
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

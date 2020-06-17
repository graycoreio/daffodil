import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffCart,
  DaffCartCouponServiceInterface,
  DaffCartCoupon
} from '@daffodil/cart';

import { DaffCartFactory, DaffCartCouponFactory } from '../../../factories/public_api';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCartCouponService implements DaffCartCouponServiceInterface {
  constructor(
    private couponFactory: DaffCartCouponFactory,
    private cartFactory: DaffCartFactory
  ) {}

  list(cartId: DaffCart['id']): Observable<DaffCartCoupon[]> {
    return of(this.couponFactory.createMany(3))
  }

  apply(cartId: DaffCart['id'], coupon: DaffCartCoupon): Observable<Partial<DaffCart>> {
    return of(this.cartFactory.create());
  }

  remove(cartId: DaffCart['id'], coupon: DaffCartCoupon): Observable<Partial<DaffCart>> {
    return of(this.cartFactory.create());
  }

  removeAll(cartId: DaffCart['id']): Observable<Partial<DaffCart>> {
    return of(this.cartFactory.create());
  }
}

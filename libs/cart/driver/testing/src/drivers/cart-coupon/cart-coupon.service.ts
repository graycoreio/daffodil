import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffCart,
  DaffCartCoupon,
} from '@daffodil/cart';
import { DaffCartCouponServiceInterface } from '@daffodil/cart/driver';
import {
  DaffCartFactory,
  DaffCartCouponFactory,
} from '@daffodil/cart/testing';

@Injectable({
  providedIn: 'root',
})
export class DaffTestingCartCouponService implements DaffCartCouponServiceInterface {
  constructor(
    private couponFactory: DaffCartCouponFactory,
    private cartFactory: DaffCartFactory,
  ) {}

  list(cartId: DaffCart['id']): Observable<DaffCartCoupon[]> {
    return of(this.couponFactory.createMany(3));
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

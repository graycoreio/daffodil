import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { DaffCart } from '../../models/cart';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import {
  listCartCoupons,
  applyCoupon,
  removeAllCoupons
} from './queries/public_api';
import { transformCartMagentoError } from './errors/transform';
import {
  MagentoListCartCouponsResponse,
  MagentoApplyCouponResponse,
  MagentoRemoveAllCouponsResponse
} from './models/responses/public_api';
import { DaffCartCouponServiceInterface } from '../interfaces/cart-coupon-service.interface';
import { DaffCartCoupon } from '../../models/cart-coupon';
import { daffMagentoCouponTransform } from './transforms/outputs/cart-coupon';
import { MagentoCart } from './models/outputs/cart';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartCouponService implements DaffCartCouponServiceInterface {
  constructor(
    private apollo: Apollo,
    public cartTransformer: DaffMagentoCartTransformer,
  ) {}

  apply(cartId: DaffCart['id'], coupon: DaffCartCoupon): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoApplyCouponResponse>({
      mutation: applyCoupon,
      variables: {
        cartId,
        couponCode: coupon.code
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.applyCouponToCart.cart as MagentoCart)),
      catchError(err => throwError(transformCartMagentoError(err))),
    )
  }

  list(cartId: DaffCart['id']): Observable<DaffCartCoupon[]> {
    return this.apollo.mutate<MagentoListCartCouponsResponse>({
      mutation: listCartCoupons,
      variables: {
        cartId
      }
    }).pipe(
      map(result => result.data.cart.applied_coupons.map(daffMagentoCouponTransform)),
      catchError(err => throwError(transformCartMagentoError(err))),
    )
  }

  remove(cartId: DaffCart['id'], coupon: DaffCartCoupon): Observable<Partial<DaffCart>> {
    return this.removeAll(cartId)
  }

  removeAll(cartId: DaffCart['id']): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoRemoveAllCouponsResponse>({
      mutation: removeAllCoupons,
      variables: {
        cartId
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.removeCouponFromCart.cart as MagentoCart)),
      catchError(err => throwError(transformCartMagentoError(err))),
    )
  }
}

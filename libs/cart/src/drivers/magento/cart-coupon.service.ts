import { Injectable, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { DaffCart } from '../../models/cart';
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
import { DaffMagentoCartCouponResponseTransformer } from './transforms/outputs/cart-coupon-response.service';
import { DaffMagentoExtraCartFragments } from './injection-tokens/public_api';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartCouponService implements DaffCartCouponServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DaffMagentoExtraCartFragments) public extraCartFragments: DocumentNode[],
    public cartTransformer: DaffMagentoCartCouponResponseTransformer,
  ) {}

  apply(cartId: DaffCart['id'], coupon: DaffCartCoupon): Observable<Partial<DaffCart>> {
    return this.apollo.mutate<MagentoApplyCouponResponse>({
      mutation: applyCoupon(this.extraCartFragments),
      variables: {
        cartId,
        couponCode: coupon.code
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.applyCouponToCart.cart)),
      catchError(err => throwError(transformCartMagentoError(err))),
    )
  }

  list(cartId: DaffCart['id']): Observable<DaffCartCoupon[]> {
    return this.apollo.mutate<MagentoListCartCouponsResponse>({
      mutation: listCartCoupons(this.extraCartFragments),
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
      mutation: removeAllCoupons(this.extraCartFragments),
      variables: {
        cartId
      }
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.removeCouponFromCart.cart)),
      catchError(err => throwError(transformCartMagentoError(err))),
    )
  }
}

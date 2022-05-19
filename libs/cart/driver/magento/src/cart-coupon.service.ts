import {
  Injectable,
  Inject,
} from '@angular/core';
import { DocumentNode } from 'graphql';
import {
  throwError,
  Observable,
} from 'rxjs';
import {
  map,
  catchError,
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartCoupon,
} from '@daffodil/cart';
import { DaffCartCouponServiceInterface } from '@daffodil/cart/driver';
import { DaffQueuedApollo } from '@daffodil/core/graphql';

import { transformCartMagentoError } from './errors/transform';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import {
  listCartCoupons,
  applyCoupon,
  removeAllCoupons,
} from './queries/public_api';
import {
  MagentoListCartCouponsResponse,
  MagentoApplyCouponResponse,
  MagentoRemoveAllCouponsResponse,
} from './queries/responses/public_api';
import { daffMagentoCouponTransform } from './transforms/outputs/cart-coupon';
import { DaffMagentoCartCouponResponseTransformer } from './transforms/outputs/cart-coupon-response.service';

/**
 * A service for making Magento GraphQL queries for carts.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartCouponService implements DaffCartCouponServiceInterface {
  constructor(
    @Inject(DAFF_MAGENTO_CART_MUTATION_QUEUE) private mutationQueue: DaffQueuedApollo,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) private extraCartFragments: DocumentNode[],
    private cartTransformer: DaffMagentoCartCouponResponseTransformer,
  ) {}

  apply(cartId: DaffCart['id'], coupon: DaffCartCoupon): Observable<Partial<DaffCart>> {
    return this.mutationQueue.mutate<MagentoApplyCouponResponse>({
      mutation: applyCoupon(this.extraCartFragments),
      variables: {
        cartId,
        couponCode: coupon.code,
      },
      fetchPolicy: 'network-only',
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.applyCouponToCart.cart)),
      catchError(err => throwError(() => transformCartMagentoError(err, coupon))),
    );
  }

  list(cartId: DaffCart['id']): Observable<DaffCartCoupon[]> {
    return this.mutationQueue.mutate<MagentoListCartCouponsResponse>({
      mutation: listCartCoupons(this.extraCartFragments),
      variables: {
        cartId,
      },
      fetchPolicy: 'network-only',
    }).pipe(
      map(result => result.data.cart.applied_coupons.map(daffMagentoCouponTransform)),
      catchError(err => throwError(() => transformCartMagentoError(err))),
    );
  }

  remove(cartId: DaffCart['id'], coupon: DaffCartCoupon): Observable<Partial<DaffCart>> {
    return this.removeAll(cartId);
  }

  removeAll(cartId: DaffCart['id']): Observable<Partial<DaffCart>> {
    return this.mutationQueue.mutate<MagentoRemoveAllCouponsResponse>({
      mutation: removeAllCoupons(this.extraCartFragments),
      variables: {
        cartId,
      },
      fetchPolicy: 'network-only',
    }).pipe(
      map(result => this.cartTransformer.transform(result.data.removeCouponFromCart.cart)),
      catchError(err => throwError(() => transformCartMagentoError(err))),
    );
  }
}

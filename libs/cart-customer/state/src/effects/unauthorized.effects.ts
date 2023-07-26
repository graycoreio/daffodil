import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  filter,
  map,
  tap,
} from 'rxjs/operators';

import { DaffAuthCheck } from '@daffodil/auth/state';
import { DaffCartStorageService } from '@daffodil/cart';
import { DaffCartDriverErrorCodes } from '@daffodil/cart/driver';
import {
  DaffResolveCartFailure,
  DaffCartLoadFailure,
  DaffCartActionTypes,
  DaffCartItemActionTypes,
  DaffCartBillingAddressActionTypes,
  DaffCartAddressActionTypes,
  DaffCartShippingAddressActionTypes,
  DaffCartShippingInformationActionTypes,
  DaffCartPaymentActionTypes,
  DaffCartCouponActionTypes,
  DaffCartOrderActionTypes,
  DaffCartAddressUpdateFailure,
  DaffCartBillingAddressUpdateFailure,
  DaffCartCouponApplyFailure,
  DaffCartCouponRemoveAllFailure,
  DaffCartCouponRemoveFailure,
  DaffCartItemAddFailure,
  DaffCartItemDeleteFailure,
  DaffCartItemDeleteOutOfStockFailure,
  DaffCartItemUpdateFailure,
  DaffCartPaymentRemoveFailure,
  DaffCartPaymentUpdateFailure,
  DaffCartPaymentUpdateWithBillingFailure,
  DaffCartPlaceOrderFailure,
  DaffCartShippingAddressUpdateFailure,
  DaffCartShippingInformationDeleteFailure,
  DaffCartShippingInformationUpdateFailure,
  DaffCartCreate,
} from '@daffodil/cart/state';

type ActionTypes =
| DaffCartItemAddFailure
| DaffCartItemDeleteFailure
| DaffCartItemDeleteOutOfStockFailure
| DaffCartItemUpdateFailure
| DaffCartBillingAddressUpdateFailure
| DaffCartAddressUpdateFailure
| DaffCartShippingAddressUpdateFailure
| DaffCartShippingInformationDeleteFailure
| DaffCartShippingInformationUpdateFailure
| DaffCartPaymentRemoveFailure
| DaffCartPaymentUpdateFailure
| DaffCartPaymentUpdateWithBillingFailure
| DaffCartCouponApplyFailure
| DaffCartCouponRemoveFailure
| DaffCartCouponRemoveAllFailure
| DaffCartPlaceOrderFailure;

/**
 * Handles unauthorized cart errors.
 */
@Injectable()
export class DaffCartCustomerUnauthorizedEffects {
  constructor(
    private actions$: Actions<ActionTypes>,
    private cartStorage: DaffCartStorageService,
  ) {}

  createWhenUnathorized$ = createEffect(() => this.actions$.pipe(
    ofType<DaffResolveCartFailure | DaffCartLoadFailure>(DaffCartActionTypes.ResolveCartFailureAction, DaffCartActionTypes.CartLoadFailureAction),
    filter(action => !!action.payload.find(err => err.code === DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART)),
    tap(() => {
      this.cartStorage.removeCartId();
    }),
    map(() => new DaffCartCreate()),
  ));

  checkWhenUnathorized$ = createEffect(() => this.actions$.pipe(
    ofType<ActionTypes>(
      DaffCartItemActionTypes.CartItemAddFailureAction,
      DaffCartItemActionTypes.CartItemDeleteFailureAction,
      DaffCartItemActionTypes.CartItemDeleteOutOfStockFailureAction,
      DaffCartItemActionTypes.CartItemUpdateFailureAction,
      DaffCartBillingAddressActionTypes.CartBillingAddressUpdateFailureAction,
      DaffCartAddressActionTypes.CartAddressUpdateFailureAction,
      DaffCartShippingAddressActionTypes.CartShippingAddressUpdateFailureAction,
      DaffCartShippingInformationActionTypes.CartShippingInformationDeleteFailureAction,
      DaffCartShippingInformationActionTypes.CartShippingInformationUpdateFailureAction,
      DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction,
      DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction,
      DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction,
      DaffCartCouponActionTypes.CartCouponApplyFailureAction,
      DaffCartCouponActionTypes.CartCouponRemoveFailureAction,
      DaffCartCouponActionTypes.CartCouponRemoveAllFailureAction,
      DaffCartOrderActionTypes.CartPlaceOrderFailureAction,
    ),
    filter((action) =>
      action.payload.code === DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART,
    ),
    map(() => new DaffAuthCheck()),
  ));
}

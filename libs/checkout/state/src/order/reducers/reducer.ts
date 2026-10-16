import {
  DaffCart,
  DaffCartItemInput,
} from '@daffodil/cart';
import {
  DaffCartActions,
  DaffCartItemActions,
  DaffCartBillingAddressActions,
  DaffCartShippingAddressActions,
  DaffCartAddressActions,
  DaffCartShippingMethodsActions,
  DaffCartShippingInformationActions,
  DaffCartPaymentActions,
  DaffCartPaymentMethodsActions,
  DaffCartCouponActions,
  DaffCartActionTypes,
  DaffCartAddressActionTypes,
  DaffCartBillingAddressActionTypes,
  DaffCartCouponActionTypes,
  DaffCartItemActionTypes,
  DaffCartPaymentActionTypes,
  DaffCartShippingAddressActionTypes,
  DaffCartShippingInformationActionTypes,
} from '@daffodil/cart/state';
import { DaffCheckoutOrderResult } from '@daffodil/checkout';
import {
  daffClearErrors,
  daffCompleteOperation,
  daffOperationFailed,
  daffStartMutation,
} from '@daffodil/core/state';

import { daffCheckoutOrderInitialState } from './initial-state';
import { DaffCheckoutOrderReducerState } from './state.interface';
import {
  DaffCheckoutOrderActions,
  DaffCheckoutOrderActionTypes,
} from '../actions/public_api';

type ActionTypes<
  T extends DaffCheckoutOrderResult = DaffCheckoutOrderResult,
> = DaffCartActions<DaffCart>
| DaffCartItemActions<DaffCart, DaffCartItemInput>
| DaffCartBillingAddressActions<DaffCart>
| DaffCartShippingAddressActions<DaffCart>
| DaffCartAddressActions<DaffCart>
| DaffCartShippingMethodsActions<DaffCart['available_shipping_methods'][number]>
| DaffCartShippingInformationActions<DaffCart>
| DaffCartPaymentActions<DaffCart>
| DaffCartPaymentMethodsActions<DaffCart['available_payment_methods'][number]>
| DaffCheckoutOrderActions<T>
| DaffCartCouponActions<DaffCart>;

export function daffCheckoutOrderReducer<T extends DaffCheckoutOrderResult = DaffCheckoutOrderResult>(
  state = daffCheckoutOrderInitialState,
  action: ActionTypes<T>,
): DaffCheckoutOrderReducerState<T> {
  switch (action.type) {
    case DaffCheckoutOrderActionTypes.PlaceOrderAction:
      return daffStartMutation(state);

    case DaffCheckoutOrderActionTypes.PlaceOrderSuccessAction:
      return daffCompleteOperation<DaffCheckoutOrderReducerState<T>>({
        ...state,
        orderResult: action.payload,
      });

    case DaffCheckoutOrderActionTypes.PlaceOrderFailureFromOutOfStockProductAction:
    case DaffCheckoutOrderActionTypes.PlaceOrderFailureAction:
      return daffOperationFailed(action.payload, state);

    case DaffCartActionTypes.CartClearSuccessAction:
    case DaffCartActionTypes.CartCreateSuccessAction:
    case DaffCartActionTypes.AddToCartSuccessAction:
    case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction:
    case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction:
    case DaffCartAddressActionTypes.CartAddressUpdateSuccessAction:
    case DaffCartCouponActionTypes.CartCouponApplySuccessAction:
    case DaffCartCouponActionTypes.CartCouponRemoveSuccessAction:
    case DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction:
    case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
    case DaffCartItemActionTypes.CartItemAddSuccessAction:
    case DaffCartItemActionTypes.CartItemDeleteSuccessAction:
    case DaffCartItemActionTypes.CartItemDeleteOutOfStockSuccessAction:
    case DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction:
    case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction:
    case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction:
      return daffClearErrors(state);

    default:
      return state;
  }
}

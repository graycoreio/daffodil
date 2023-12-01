import { DaffCartAddressActionTypes } from './cart-address.actions';
import { DaffCartBillingAddressActionTypes } from './cart-billing-address.actions';
import { DaffCartCouponActionTypes } from './cart-coupon.actions';
import { DaffCartItemActionTypes } from './cart-item.actions';
import { DaffCartPaymentActionTypes } from './cart-payment.actions';
import { DaffCartShippingAddressActionTypes } from './cart-shipping-address.actions';
import { DaffCartShippingInformationActionTypes } from './cart-shipping-information.actions';
import { DaffCartActionTypes } from './cart.actions';
import { DaffCartRetrievalActionInjection } from '../cart-retrieval/public_api';

/**
 * A list of the Daffodil cart actions that are cart retrieval actions, in injection form.
 */
export const daffCartRetrivalActions: DaffCartRetrievalActionInjection[] = [
  {
    type: DaffCartItemActionTypes.CartItemAddSuccessAction,
  },
  {
    type: DaffCartItemActionTypes.CartItemUpdateSuccessAction,
  },
  {
    type: DaffCartItemActionTypes.CartItemDeleteSuccessAction,
  },
  {
    type: DaffCartItemActionTypes.CartItemDeleteOutOfStockSuccessAction,
  },
  {
    type: DaffCartActionTypes.CartLoadSuccessAction,
  },
  {
    type: DaffCartActionTypes.ResolveCartSuccessAction,
  },
  {
    type: DaffCartActionTypes.CartLoadPartialSuccessAction,
  },
  {
    type: DaffCartActionTypes.ResolveCartPartialSuccessAction,
  },
  {
    type: DaffCartActionTypes.CartClearSuccessAction,
  },
  {
    type: DaffCartAddressActionTypes.CartAddressUpdateSuccessAction,
  },
  {
    type: DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction,
  },
  {
    type: DaffCartCouponActionTypes.CartCouponApplySuccessAction,
  },
  {
    type: DaffCartCouponActionTypes.CartCouponRemoveSuccessAction,
  },
  {
    type: DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction,
  },
  {
    type: DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction,
  },
  {
    type: DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction,
  },
  {
    type: DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction,
  },
  {
    type: DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction,
  },
  {
    type: DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction,
  },
];

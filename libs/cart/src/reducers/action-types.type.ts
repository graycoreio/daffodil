import {
  DaffCartActions,
  DaffCartItemActions,
  DaffCartBillingAddressActions,
  DaffCartShippingAddressActions,
  DaffCartShippingMethodsActions,
  DaffCartShippingInformationActions,
  DaffCartPaymentActions,
  DaffCartPaymentMethodsActions,
  DaffCartCouponActions,
  DaffCartAddressActions
} from '../actions/public_api';
import { DaffCart } from '../models/cart';
import { DaffCartItem } from '../models/cart-item';
import { DaffCartItemInput } from '../models/cart-item-input';
import { DaffCartAddress } from '../models/cart-address';
import { DaffCartShippingRate } from '../models/cart-shipping-rate';
import { DaffCartPaymentMethod } from '../models/cart-payment';
import { DaffCartCoupon } from '../models/cart-coupon';
import {  } from '../actions/cart-address.actions';

export type ActionTypes<
	T extends DaffCart = DaffCart,
	V extends DaffCartItem = DaffCartItem,
	U extends DaffCartItemInput = DaffCartItemInput,
	W extends DaffCartAddress = DaffCartAddress,
	X extends DaffCartShippingRate = DaffCartShippingRate,
  Y extends DaffCartPaymentMethod = DaffCartPaymentMethod,
  Z extends DaffCartCoupon = DaffCartCoupon
> = DaffCartActions<T>
  | DaffCartItemActions<V, U, T>
  | DaffCartBillingAddressActions<W, T>
  | DaffCartShippingAddressActions<W, T>
  | DaffCartAddressActions<W, T>
  | DaffCartShippingMethodsActions<X>
  | DaffCartShippingInformationActions<X, T>
  | DaffCartPaymentActions<Y, T>
  | DaffCartPaymentMethodsActions<Y>
  | DaffCartCouponActions<T, Z>

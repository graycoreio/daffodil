import {
  DaffCartActions,
  DaffCartItemActions,
  DaffCartBillingAddressActions,
  DaffCartShippingAddressActions,
  DaffCartShippingMethodsActions,
  DaffCartShippingInformationActions,
  DaffCartPaymentActions,
  DaffCartPaymentMethodsActions
} from '../actions';
import { DaffCart } from '../models/cart';
import { DaffCartItem } from '../models/cart-item';
import { DaffCartItemInput } from '../models/cart-item-input';
import { DaffCartAddress } from '../models/cart-address';
import { DaffCartShippingRate } from '../models/cart-shipping-rate';
import { DaffCartPaymentMethod } from '../models/cart-payment';

export type ActionTypes = DaffCartActions<DaffCart>
  | DaffCartItemActions<DaffCartItem, DaffCartItemInput, DaffCart>
  | DaffCartBillingAddressActions<DaffCartAddress, DaffCart>
  | DaffCartShippingAddressActions<DaffCartAddress, DaffCart>
  | DaffCartShippingMethodsActions<DaffCartShippingRate>
  | DaffCartShippingInformationActions<DaffCartShippingRate, DaffCart>
  | DaffCartPaymentActions<DaffCartPaymentMethod, DaffCart>
  | DaffCartPaymentMethodsActions<DaffCartPaymentMethod>

import {
  DaffCart,
  DaffCartItemInput,
  DaffCartOrderResult,
} from '@daffodil/cart';

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
  DaffCartAddressActions,
  DaffCartOrderActions,
} from '../actions/public_api';

export type ActionTypes<
  T extends DaffCart = DaffCart,
  U extends DaffCartItemInput = DaffCartItemInput,
  TOrderResult extends DaffCartOrderResult = DaffCartOrderResult,
> = DaffCartActions<T>
| DaffCartItemActions<T, U>
| DaffCartBillingAddressActions<T>
| DaffCartShippingAddressActions<T>
| DaffCartAddressActions<T>
| DaffCartShippingMethodsActions<T['available_shipping_methods'][number]>
| DaffCartShippingInformationActions<T>
| DaffCartPaymentActions<T>
| DaffCartPaymentMethodsActions<T['available_payment_methods'][number]>
| DaffCartOrderActions<TOrderResult>
| DaffCartCouponActions<T>;

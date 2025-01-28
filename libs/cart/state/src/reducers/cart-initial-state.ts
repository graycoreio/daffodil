import { DaffState } from '@daffodil/core/state';

import { DaffCartOperationType } from './cart-operation-type.enum';
import { DaffCartResolveState } from './cart-resolve/cart-resolve-state.enum';
import { DaffCartReducerState } from './cart-state.interface';

export const daffCartReducerInitialState: DaffCartReducerState<any> = Object.freeze({
  cart: {
    id: null,
    coupons: [],
    items: [],
    billing_address: null,
    shipping_address: null,
    payment: null,
    totals: [],
    shipping_information: null,
    available_shipping_methods: [],
    available_payment_methods: [],
  },
  loading: {
    // TODO: replace const casts with const type in TS5
    [DaffCartOperationType.Cart]: <const>DaffState.Stable,
    [DaffCartOperationType.Item]: <const>DaffState.Stable,
    [DaffCartOperationType.ShippingAddress]: <const>DaffState.Stable,
    [DaffCartOperationType.BillingAddress]: <const>DaffState.Stable,
    [DaffCartOperationType.ShippingInformation]: <const>DaffState.Stable,
    [DaffCartOperationType.ShippingMethods]: <const>DaffState.Stable,
    [DaffCartOperationType.Payment]: <const>DaffState.Stable,
    [DaffCartOperationType.PaymentMethods]: <const>DaffState.Stable,
    [DaffCartOperationType.Coupon]: <const>DaffState.Stable,
  },
  errors: {
    [DaffCartOperationType.Cart]: [],
    [DaffCartOperationType.Item]: [],
    [DaffCartOperationType.ShippingAddress]: [],
    [DaffCartOperationType.BillingAddress]: [],
    [DaffCartOperationType.ShippingInformation]: [],
    [DaffCartOperationType.ShippingMethods]: [],
    [DaffCartOperationType.Payment]: [],
    [DaffCartOperationType.PaymentMethods]: [],
    [DaffCartOperationType.Coupon]: [],
  },
  resolved: DaffCartResolveState.Default,
});

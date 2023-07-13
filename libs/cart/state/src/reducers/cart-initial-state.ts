import { DaffState } from '@daffodil/core/state';

import { DaffCartOperationType } from './cart-operation-type.enum';
import { DaffCartResolveState } from './cart-resolve/cart-resolve-state.enum';
import { DaffCartReducerState } from './cart-state.interface';

export const daffCartReducerInitialState: DaffCartReducerState<any> = Object.freeze({
  cart: {
    id: null,
    subtotal: null,
    grand_total: null,
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
    [DaffCartOperationType.Cart]: DaffState.Complete,
    [DaffCartOperationType.Item]: DaffState.Complete,
    [DaffCartOperationType.ShippingAddress]: DaffState.Complete,
    [DaffCartOperationType.BillingAddress]: DaffState.Complete,
    [DaffCartOperationType.ShippingInformation]: DaffState.Complete,
    [DaffCartOperationType.ShippingMethods]: DaffState.Complete,
    [DaffCartOperationType.Payment]: DaffState.Complete,
    [DaffCartOperationType.PaymentMethods]: DaffState.Complete,
    [DaffCartOperationType.Coupon]: DaffState.Complete,
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

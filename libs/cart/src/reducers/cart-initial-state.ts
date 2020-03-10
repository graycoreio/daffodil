import { DaffCartReducerState } from './cart-state.interface';
import { DaffCartErrorType } from './cart-error-type.enum';

export const initialState: DaffCartReducerState = Object.freeze({
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
  loading: false,
  errors: {
    [DaffCartErrorType.Cart]: [],
    [DaffCartErrorType.Item]: [],
    [DaffCartErrorType.ShippingAddress]: [],
    [DaffCartErrorType.BillingAddress]: [],
    [DaffCartErrorType.ShippingInformation]: [],
    [DaffCartErrorType.ShippingMethods]: [],
    [DaffCartErrorType.Payment]: [],
    [DaffCartErrorType.PaymentMethods]: [],
  }
});

import { DaffCartReducerState } from './cart-state.interface';

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
  errors: []
});

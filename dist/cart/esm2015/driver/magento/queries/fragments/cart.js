/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { cartAddressFragment } from './cart-address';
import { availablePaymentMethodFragment } from './available-payment-method';
import { selectedPaymentMethodFragment } from './selected-payment-method';
import { cartItemFragment } from './cart-item';
import { cartCouponFragment } from './cart-coupon';
import { selectedShippingMethodFragment } from './selected-shipping-method';
import { pricesFragment } from './prices';
/** @type {?} */
export const cartFragment = gql `
  fragment cart on Cart {
    id
    email
    billing_address {
      ...cartAddress
    }
    shipping_addresses {
      ...cartAddress
      ... on ShippingCartAddress {
        selected_shipping_method {
          ...selectedShippingMethod
        }
      }
    }
    items {
      ...cartItem
    }
    available_payment_methods {
      ...availablePaymentMethod
    }
    selected_payment_method {
      ...selectedPaymentMethod
    }
    applied_coupons {
      ...cartCoupon
    }
    prices {
      ...prices
    }
  }
  ${cartAddressFragment}
  ${availablePaymentMethodFragment}
  ${selectedPaymentMethodFragment}
  ${selectedShippingMethodFragment}
  ${cartItemFragment}
  ${pricesFragment}
  ${cartCouponFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy9mcmFnbWVudHMvY2FydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFFMUMsTUFBTSxPQUFPLFlBQVksR0FBRyxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUErQjNCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtDQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBjYXJ0QWRkcmVzc0ZyYWdtZW50IH0gZnJvbSAnLi9jYXJ0LWFkZHJlc3MnO1xuaW1wb3J0IHsgYXZhaWxhYmxlUGF5bWVudE1ldGhvZEZyYWdtZW50IH0gZnJvbSAnLi9hdmFpbGFibGUtcGF5bWVudC1tZXRob2QnO1xuaW1wb3J0IHsgc2VsZWN0ZWRQYXltZW50TWV0aG9kRnJhZ21lbnQgfSBmcm9tICcuL3NlbGVjdGVkLXBheW1lbnQtbWV0aG9kJztcbmltcG9ydCB7IGNhcnRJdGVtRnJhZ21lbnQgfSBmcm9tICcuL2NhcnQtaXRlbSc7XG5pbXBvcnQgeyBjYXJ0Q291cG9uRnJhZ21lbnQgfSBmcm9tICcuL2NhcnQtY291cG9uJztcbmltcG9ydCB7IHNlbGVjdGVkU2hpcHBpbmdNZXRob2RGcmFnbWVudCB9IGZyb20gJy4vc2VsZWN0ZWQtc2hpcHBpbmctbWV0aG9kJztcbmltcG9ydCB7IHByaWNlc0ZyYWdtZW50IH0gZnJvbSAnLi9wcmljZXMnO1xuXG5leHBvcnQgY29uc3QgY2FydEZyYWdtZW50ID0gZ3FsYFxuICBmcmFnbWVudCBjYXJ0IG9uIENhcnQge1xuICAgIGlkXG4gICAgZW1haWxcbiAgICBiaWxsaW5nX2FkZHJlc3Mge1xuICAgICAgLi4uY2FydEFkZHJlc3NcbiAgICB9XG4gICAgc2hpcHBpbmdfYWRkcmVzc2VzIHtcbiAgICAgIC4uLmNhcnRBZGRyZXNzXG4gICAgICAuLi4gb24gU2hpcHBpbmdDYXJ0QWRkcmVzcyB7XG4gICAgICAgIHNlbGVjdGVkX3NoaXBwaW5nX21ldGhvZCB7XG4gICAgICAgICAgLi4uc2VsZWN0ZWRTaGlwcGluZ01ldGhvZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGl0ZW1zIHtcbiAgICAgIC4uLmNhcnRJdGVtXG4gICAgfVxuICAgIGF2YWlsYWJsZV9wYXltZW50X21ldGhvZHMge1xuICAgICAgLi4uYXZhaWxhYmxlUGF5bWVudE1ldGhvZFxuICAgIH1cbiAgICBzZWxlY3RlZF9wYXltZW50X21ldGhvZCB7XG4gICAgICAuLi5zZWxlY3RlZFBheW1lbnRNZXRob2RcbiAgICB9XG4gICAgYXBwbGllZF9jb3Vwb25zIHtcbiAgICAgIC4uLmNhcnRDb3Vwb25cbiAgICB9XG4gICAgcHJpY2VzIHtcbiAgICAgIC4uLnByaWNlc1xuICAgIH1cbiAgfVxuICAke2NhcnRBZGRyZXNzRnJhZ21lbnR9XG4gICR7YXZhaWxhYmxlUGF5bWVudE1ldGhvZEZyYWdtZW50fVxuICAke3NlbGVjdGVkUGF5bWVudE1ldGhvZEZyYWdtZW50fVxuICAke3NlbGVjdGVkU2hpcHBpbmdNZXRob2RGcmFnbWVudH1cbiAgJHtjYXJ0SXRlbUZyYWdtZW50fVxuICAke3ByaWNlc0ZyYWdtZW50fVxuICAke2NhcnRDb3Vwb25GcmFnbWVudH1cbmA7XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartItemFragment } from './fragments/cart-item';
import { cartCouponFragment } from './fragments/public_api';
import { cartTotalsFragment } from './fragments/cart-totals';
/** @type {?} */
export const removeAllCoupons = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation RemoveAllCoupons($cartId: String!) {
    removeCouponFromCart(
      input: {
        cart_id: $cartId
      }
    ) {
      cart {
        id
        items {
          ...cartItem
        }
        applied_coupons {
          ...cartCoupon
				}
				...cartTotals
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartItemFragment}
	${cartCouponFragment}
	${cartTotalsFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWFsbC1jb3Vwb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJxdWVyaWVzL3JlbW92ZS1hbGwtY291cG9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUU3RCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0FBQUcsQ0FBQyxxQkFBcUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7VUFnQnRFLDJCQUEyQixDQUFDLEdBQUcsa0JBQWtCLENBQUM7Ozs7SUFJeEQsZ0JBQWdCO0dBQ2pCLGtCQUFrQjtHQUNsQixrQkFBa0I7SUFDakIsMkJBQTJCLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztDQUNyRCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkLCBkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9ncmFwaHFsJztcblxuaW1wb3J0IHsgY2FydEl0ZW1GcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL2NhcnQtaXRlbSc7XG5pbXBvcnQgeyBjYXJ0Q291cG9uRnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50cy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IGNhcnRUb3RhbHNGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL2NhcnQtdG90YWxzJztcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUFsbENvdXBvbnMgPSAoZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSA9IFtdKSA9PiBncWxgXG4gIG11dGF0aW9uIFJlbW92ZUFsbENvdXBvbnMoJGNhcnRJZDogU3RyaW5nISkge1xuICAgIHJlbW92ZUNvdXBvbkZyb21DYXJ0KFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgY2FydF9pZDogJGNhcnRJZFxuICAgICAgfVxuICAgICkge1xuICAgICAgY2FydCB7XG4gICAgICAgIGlkXG4gICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAuLi5jYXJ0SXRlbVxuICAgICAgICB9XG4gICAgICAgIGFwcGxpZWRfY291cG9ucyB7XG4gICAgICAgICAgLi4uY2FydENvdXBvblxuXHRcdFx0XHR9XG5cdFx0XHRcdC4uLmNhcnRUb3RhbHNcbiAgICAgICAgJHtkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQoLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtjYXJ0SXRlbUZyYWdtZW50fVxuXHQke2NhcnRDb3Vwb25GcmFnbWVudH1cblx0JHtjYXJ0VG90YWxzRnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG5gO1xuIl19
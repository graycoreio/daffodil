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
export const applyCoupon = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation ApplyCoupon($cartId: String!, $couponCode: String!) {
    applyCouponToCart(
      input: {
        cart_id: $cartId,
        coupon_code: $couponCode
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbHktY291cG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJxdWVyaWVzL2FwcGx5LWNvdXBvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUU3RCxNQUFNLE9BQU8sV0FBVzs7OztBQUFHLENBQUMscUJBQXFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQWlCakUsMkJBQTJCLENBQUMsR0FBRyxrQkFBa0IsQ0FBQzs7OztJQUl4RCxnQkFBZ0I7R0FDakIsa0JBQWtCO0dBQ2xCLGtCQUFrQjtJQUNqQiwyQkFBMkIsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO0NBQ3JELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQsIGRhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnO1xuXG5pbXBvcnQgeyBjYXJ0SXRlbUZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudHMvY2FydC1pdGVtJztcbmltcG9ydCB7IGNhcnRDb3Vwb25GcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgY2FydFRvdGFsc0ZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudHMvY2FydC10b3RhbHMnO1xuXG5leHBvcnQgY29uc3QgYXBwbHlDb3Vwb24gPSAoZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSA9IFtdKSA9PiBncWxgXG4gIG11dGF0aW9uIEFwcGx5Q291cG9uKCRjYXJ0SWQ6IFN0cmluZyEsICRjb3Vwb25Db2RlOiBTdHJpbmchKSB7XG4gICAgYXBwbHlDb3Vwb25Ub0NhcnQoXG4gICAgICBpbnB1dDoge1xuICAgICAgICBjYXJ0X2lkOiAkY2FydElkLFxuICAgICAgICBjb3Vwb25fY29kZTogJGNvdXBvbkNvZGVcbiAgICAgIH1cbiAgICApIHtcbiAgICAgIGNhcnQge1xuICAgICAgICBpZFxuICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgLi4uY2FydEl0ZW1cbiAgICAgICAgfVxuICAgICAgICBhcHBsaWVkX2NvdXBvbnMge1xuICAgICAgICAgIC4uLmNhcnRDb3Vwb25cblx0XHRcdFx0fVxuXHRcdFx0XHQuLi5jYXJ0VG90YWxzXG4gICAgICAgICR7ZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7Y2FydEl0ZW1GcmFnbWVudH1cblx0JHtjYXJ0Q291cG9uRnJhZ21lbnR9XG5cdCR7Y2FydFRvdGFsc0ZyYWdtZW50fVxuICAke2RhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuYDtcbiJdfQ==
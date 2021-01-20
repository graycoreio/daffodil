/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartCouponFragment } from './fragments/public_api';
/** @type {?} */
export const listCartCoupons = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  query listCartCoupons($cartId: String!) {
    cart(cart_id: $cartId) {
      applied_coupons {
				...cartCoupon
			}
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${cartCouponFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jYXJ0LWNvdXBvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvbGlzdC1jYXJ0LWNvdXBvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVsRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFNUQsTUFBTSxPQUFPLGVBQWU7Ozs7QUFBRyxDQUFDLHFCQUFxQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQTs7Ozs7O1FBTXZFLDJCQUEyQixDQUFDLEdBQUcsa0JBQWtCLENBQUM7OztJQUd0RCxrQkFBa0I7SUFDbEIsMkJBQTJCLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztDQUNyRCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkLCBkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9ncmFwaHFsJztcblxuaW1wb3J0IHsgY2FydENvdXBvbkZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudHMvcHVibGljX2FwaSc7XG5cbmV4cG9ydCBjb25zdCBsaXN0Q2FydENvdXBvbnMgPSAoZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSA9IFtdKSA9PiBncWxgXG4gIHF1ZXJ5IGxpc3RDYXJ0Q291cG9ucygkY2FydElkOiBTdHJpbmchKSB7XG4gICAgY2FydChjYXJ0X2lkOiAkY2FydElkKSB7XG4gICAgICBhcHBsaWVkX2NvdXBvbnMge1xuXHRcdFx0XHQuLi5jYXJ0Q291cG9uXG5cdFx0XHR9XG4gICAgICAke2RhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuICAgIH1cbiAgfVxuICAke2NhcnRDb3Vwb25GcmFnbWVudH1cbiAgJHtkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24oLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbmA7XG4iXX0=
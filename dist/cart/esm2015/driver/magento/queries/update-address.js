/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartFragment } from './fragments/public_api';
/**
 * Update the shipping and billing address of the cart.
 * At the time of writing, Magento 2 processes compound queries in the order they are defined.
 * We rely on this fact and only use the return of the last query.
 * This helps us keep query complexity down and save some server CPU cycles.
 * Driver behavior is not guaranteed if Magento no longer processes compound queries in the order they are defined.
 * @type {?}
 */
export const updateAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation UpdateAddress($cartId: String!, $address: CartAddressInput!) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: {
        address: $address
      }
    }) {
      cart {
        id
      }
    }
    setShippingAddressesOnCart(input: {
      cart_id: $cartId
      shipping_addresses: [{
        address: $address
      }]
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWFkZHJlc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvdXBkYXRlLWFkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVsRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7OztBQVN0RCxNQUFNLE9BQU8sYUFBYTs7OztBQUFHLENBQUMscUJBQXFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQW9CbkUsMkJBQTJCLENBQUMsR0FBRyxrQkFBa0IsQ0FBQzs7OztJQUl4RCxZQUFZO0lBQ1osMkJBQTJCLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztDQUNyRCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkLCBkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9ncmFwaHFsJztcblxuaW1wb3J0IHsgY2FydEZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudHMvcHVibGljX2FwaSc7XG5cbi8qKlxuICogVXBkYXRlIHRoZSBzaGlwcGluZyBhbmQgYmlsbGluZyBhZGRyZXNzIG9mIHRoZSBjYXJ0LlxuICogQXQgdGhlIHRpbWUgb2Ygd3JpdGluZywgTWFnZW50byAyIHByb2Nlc3NlcyBjb21wb3VuZCBxdWVyaWVzIGluIHRoZSBvcmRlciB0aGV5IGFyZSBkZWZpbmVkLlxuICogV2UgcmVseSBvbiB0aGlzIGZhY3QgYW5kIG9ubHkgdXNlIHRoZSByZXR1cm4gb2YgdGhlIGxhc3QgcXVlcnkuXG4gKiBUaGlzIGhlbHBzIHVzIGtlZXAgcXVlcnkgY29tcGxleGl0eSBkb3duIGFuZCBzYXZlIHNvbWUgc2VydmVyIENQVSBjeWNsZXMuXG4gKiBEcml2ZXIgYmVoYXZpb3IgaXMgbm90IGd1YXJhbnRlZWQgaWYgTWFnZW50byBubyBsb25nZXIgcHJvY2Vzc2VzIGNvbXBvdW5kIHF1ZXJpZXMgaW4gdGhlIG9yZGVyIHRoZXkgYXJlIGRlZmluZWQuXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVBZGRyZXNzID0gKGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBtdXRhdGlvbiBVcGRhdGVBZGRyZXNzKCRjYXJ0SWQ6IFN0cmluZyEsICRhZGRyZXNzOiBDYXJ0QWRkcmVzc0lucHV0ISkge1xuICAgIHNldEJpbGxpbmdBZGRyZXNzT25DYXJ0KGlucHV0OiB7XG4gICAgICBjYXJ0X2lkOiAkY2FydElkXG4gICAgICBiaWxsaW5nX2FkZHJlc3M6IHtcbiAgICAgICAgYWRkcmVzczogJGFkZHJlc3NcbiAgICAgIH1cbiAgICB9KSB7XG4gICAgICBjYXJ0IHtcbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0U2hpcHBpbmdBZGRyZXNzZXNPbkNhcnQoaW5wdXQ6IHtcbiAgICAgIGNhcnRfaWQ6ICRjYXJ0SWRcbiAgICAgIHNoaXBwaW5nX2FkZHJlc3NlczogW3tcbiAgICAgICAgYWRkcmVzczogJGFkZHJlc3NcbiAgICAgIH1dXG4gICAgfSkge1xuICAgICAgY2FydCB7XG4gICAgICAgIC4uLmNhcnRcbiAgICAgICAgJHtkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQoLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtjYXJ0RnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG5gO1xuIl19
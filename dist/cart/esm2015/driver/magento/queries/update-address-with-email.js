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
export const updateAddressWithEmail = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation UpdateAddress($cartId: String!, $address: CartAddressInput!, $email: String!) {
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
        id
      }
    }
    setGuestEmailOnCart(input: {
      cart_id: $cartId,
      email: $email
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWFkZHJlc3Mtd2l0aC1lbWFpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy91cGRhdGUtYWRkcmVzcy13aXRoLWVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7QUFTdEQsTUFBTSxPQUFPLHNCQUFzQjs7OztBQUFHLENBQUMscUJBQXFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBNEI1RSwyQkFBMkIsQ0FBQyxHQUFHLGtCQUFrQixDQUFDOzs7O0lBSXhELFlBQVk7SUFDWiwyQkFBMkIsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO0NBQ3JELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQsIGRhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnO1xuXG5pbXBvcnQgeyBjYXJ0RnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50cy9wdWJsaWNfYXBpJztcblxuLyoqXG4gKiBVcGRhdGUgdGhlIHNoaXBwaW5nIGFuZCBiaWxsaW5nIGFkZHJlc3Mgb2YgdGhlIGNhcnQuXG4gKiBBdCB0aGUgdGltZSBvZiB3cml0aW5nLCBNYWdlbnRvIDIgcHJvY2Vzc2VzIGNvbXBvdW5kIHF1ZXJpZXMgaW4gdGhlIG9yZGVyIHRoZXkgYXJlIGRlZmluZWQuXG4gKiBXZSByZWx5IG9uIHRoaXMgZmFjdCBhbmQgb25seSB1c2UgdGhlIHJldHVybiBvZiB0aGUgbGFzdCBxdWVyeS5cbiAqIFRoaXMgaGVscHMgdXMga2VlcCBxdWVyeSBjb21wbGV4aXR5IGRvd24gYW5kIHNhdmUgc29tZSBzZXJ2ZXIgQ1BVIGN5Y2xlcy5cbiAqIERyaXZlciBiZWhhdmlvciBpcyBub3QgZ3VhcmFudGVlZCBpZiBNYWdlbnRvIG5vIGxvbmdlciBwcm9jZXNzZXMgY29tcG91bmQgcXVlcmllcyBpbiB0aGUgb3JkZXIgdGhleSBhcmUgZGVmaW5lZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUFkZHJlc3NXaXRoRW1haWwgPSAoZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSA9IFtdKSA9PiBncWxgXG4gIG11dGF0aW9uIFVwZGF0ZUFkZHJlc3MoJGNhcnRJZDogU3RyaW5nISwgJGFkZHJlc3M6IENhcnRBZGRyZXNzSW5wdXQhLCAkZW1haWw6IFN0cmluZyEpIHtcbiAgICBzZXRCaWxsaW5nQWRkcmVzc09uQ2FydChpbnB1dDoge1xuICAgICAgY2FydF9pZDogJGNhcnRJZFxuICAgICAgYmlsbGluZ19hZGRyZXNzOiB7XG4gICAgICAgIGFkZHJlc3M6ICRhZGRyZXNzXG4gICAgICB9XG4gICAgfSkge1xuICAgICAgY2FydCB7XG4gICAgICAgIGlkXG4gICAgICB9XG4gICAgfVxuICAgIHNldFNoaXBwaW5nQWRkcmVzc2VzT25DYXJ0KGlucHV0OiB7XG4gICAgICBjYXJ0X2lkOiAkY2FydElkXG4gICAgICBzaGlwcGluZ19hZGRyZXNzZXM6IFt7XG4gICAgICAgIGFkZHJlc3M6ICRhZGRyZXNzXG4gICAgICB9XVxuICAgIH0pIHtcbiAgICAgIGNhcnQge1xuICAgICAgICBpZFxuICAgICAgfVxuICAgIH1cbiAgICBzZXRHdWVzdEVtYWlsT25DYXJ0KGlucHV0OiB7XG4gICAgICBjYXJ0X2lkOiAkY2FydElkLFxuICAgICAgZW1haWw6ICRlbWFpbFxuICAgIH0pIHtcbiAgICAgIGNhcnQge1xuICAgICAgICAuLi5jYXJ0XG4gICAgICAgICR7ZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7Y2FydEZyYWdtZW50fVxuICAke2RhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuYDtcbiJdfQ==
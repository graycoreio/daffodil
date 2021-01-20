/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartFragment } from './fragments/public_api';
/** @type {?} */
export const updateShippingAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation UpdateShippingAddress(
    $cartId: String!,
    $address: ShippingAddressInput!
  ) {
    setShippingAddressesOnCart(input: {
      cart_id: $cartId
      shipping_addresses: [$address]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXNoaXBwaW5nLWFkZHJlc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvdXBkYXRlLXNoaXBwaW5nLWFkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVsRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXRELE1BQU0sT0FBTyxxQkFBcUI7Ozs7QUFBRyxDQUFDLHFCQUFxQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7VUFXM0UsMkJBQTJCLENBQUMsR0FBRyxrQkFBa0IsQ0FBQzs7OztJQUl4RCxZQUFZO0lBQ1osMkJBQTJCLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztDQUNyRCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkLCBkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9ncmFwaHFsJztcblxuaW1wb3J0IHsgY2FydEZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudHMvcHVibGljX2FwaSc7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTaGlwcGluZ0FkZHJlc3MgPSAoZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSA9IFtdKSA9PiBncWxgXG4gIG11dGF0aW9uIFVwZGF0ZVNoaXBwaW5nQWRkcmVzcyhcbiAgICAkY2FydElkOiBTdHJpbmchLFxuICAgICRhZGRyZXNzOiBTaGlwcGluZ0FkZHJlc3NJbnB1dCFcbiAgKSB7XG4gICAgc2V0U2hpcHBpbmdBZGRyZXNzZXNPbkNhcnQoaW5wdXQ6IHtcbiAgICAgIGNhcnRfaWQ6ICRjYXJ0SWRcbiAgICAgIHNoaXBwaW5nX2FkZHJlc3NlczogWyRhZGRyZXNzXVxuICAgIH0pIHtcbiAgICAgIGNhcnQge1xuICAgICAgICAuLi5jYXJ0XG4gICAgICAgICR7ZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7Y2FydEZyYWdtZW50fVxuICAke2RhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuYDtcbiJdfQ==
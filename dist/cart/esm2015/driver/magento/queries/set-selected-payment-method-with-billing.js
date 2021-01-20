/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartFragment } from './fragments/public_api';
/** @type {?} */
export const setSelectedPaymentMethodWithBilling = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation SetSelectedPaymentMethodWithBilling(
    $cartId: String!,
    $payment: PaymentMethodInput!,
    $address: BillingAddressInput!
  ) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: $address
    }) {
      cart {
        id
      }
    }
    setPaymentMethodOnCart(input: {
      cart_id: $cartId
      payment_method: $payment
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNlbGVjdGVkLXBheW1lbnQtbWV0aG9kLXdpdGgtYmlsbGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy9zZXQtc2VsZWN0ZWQtcGF5bWVudC1tZXRob2Qtd2l0aC1iaWxsaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUV0RCxNQUFNLE9BQU8sbUNBQW1DOzs7O0FBQUcsQ0FBQyxxQkFBcUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBb0J6RiwyQkFBMkIsQ0FBQyxHQUFHLGtCQUFrQixDQUFDOzs7O0lBSXhELFlBQVk7SUFDWiwyQkFBMkIsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO0NBQ3JELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQsIGRhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnO1xuXG5pbXBvcnQgeyBjYXJ0RnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50cy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGNvbnN0IHNldFNlbGVjdGVkUGF5bWVudE1ldGhvZFdpdGhCaWxsaW5nID0gKGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBtdXRhdGlvbiBTZXRTZWxlY3RlZFBheW1lbnRNZXRob2RXaXRoQmlsbGluZyhcbiAgICAkY2FydElkOiBTdHJpbmchLFxuICAgICRwYXltZW50OiBQYXltZW50TWV0aG9kSW5wdXQhLFxuICAgICRhZGRyZXNzOiBCaWxsaW5nQWRkcmVzc0lucHV0IVxuICApIHtcbiAgICBzZXRCaWxsaW5nQWRkcmVzc09uQ2FydChpbnB1dDoge1xuICAgICAgY2FydF9pZDogJGNhcnRJZFxuICAgICAgYmlsbGluZ19hZGRyZXNzOiAkYWRkcmVzc1xuICAgIH0pIHtcbiAgICAgIGNhcnQge1xuICAgICAgICBpZFxuICAgICAgfVxuICAgIH1cbiAgICBzZXRQYXltZW50TWV0aG9kT25DYXJ0KGlucHV0OiB7XG4gICAgICBjYXJ0X2lkOiAkY2FydElkXG4gICAgICBwYXltZW50X21ldGhvZDogJHBheW1lbnRcbiAgICB9KSB7XG4gICAgICBjYXJ0IHtcbiAgICAgICAgLi4uY2FydFxuICAgICAgICAke2RhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke2NhcnRGcmFnbWVudH1cbiAgJHtkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24oLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbmA7XG4iXX0=
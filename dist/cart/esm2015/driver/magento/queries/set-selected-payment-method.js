/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartFragment } from './fragments/public_api';
/** @type {?} */
export const setSelectedPaymentMethod = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation SetSelectedPaymentMethod($cartId: String!, $payment: PaymentMethodInput!) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNlbGVjdGVkLXBheW1lbnQtbWV0aG9kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJxdWVyaWVzL3NldC1zZWxlY3RlZC1wYXltZW50LW1ldGhvZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFdEQsTUFBTSxPQUFPLHdCQUF3Qjs7OztBQUFHLENBQUMscUJBQXFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFBOzs7Ozs7OztVQVE5RSwyQkFBMkIsQ0FBQyxHQUFHLGtCQUFrQixDQUFDOzs7O0lBSXhELFlBQVk7SUFDWiwyQkFBMkIsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO0NBQ3JELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQsIGRhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnO1xuXG5pbXBvcnQgeyBjYXJ0RnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50cy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGNvbnN0IHNldFNlbGVjdGVkUGF5bWVudE1ldGhvZCA9IChleHRyYUNhcnRGcmFnbWVudHM6IERvY3VtZW50Tm9kZVtdID0gW10pID0+IGdxbGBcbiAgbXV0YXRpb24gU2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kKCRjYXJ0SWQ6IFN0cmluZyEsICRwYXltZW50OiBQYXltZW50TWV0aG9kSW5wdXQhKSB7XG4gICAgc2V0UGF5bWVudE1ldGhvZE9uQ2FydChpbnB1dDoge1xuICAgICAgY2FydF9pZDogJGNhcnRJZFxuICAgICAgcGF5bWVudF9tZXRob2Q6ICRwYXltZW50XG4gICAgfSkge1xuICAgICAgY2FydCB7XG4gICAgICAgIC4uLmNhcnRcbiAgICAgICAgJHtkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQoLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtjYXJ0RnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG5gO1xuIl19
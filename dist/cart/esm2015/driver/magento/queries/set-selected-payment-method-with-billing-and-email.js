/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartFragment } from './fragments/public_api';
/** @type {?} */
export const setSelectedPaymentMethodWithBillingAndEmail = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation SetSelectedPaymentMethodWithBillingAndEmail(
    $cartId: String!,
    $payment: PaymentMethodInput!,
    $address: BillingAddressInput!,
    $email: String!
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNlbGVjdGVkLXBheW1lbnQtbWV0aG9kLXdpdGgtYmlsbGluZy1hbmQtZW1haWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvc2V0LXNlbGVjdGVkLXBheW1lbnQtbWV0aG9kLXdpdGgtYmlsbGluZy1hbmQtZW1haWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVsRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXRELE1BQU0sT0FBTywyQ0FBMkM7Ozs7QUFBRyxDQUFDLHFCQUFxQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUE2QmpHLDJCQUEyQixDQUFDLEdBQUcsa0JBQWtCLENBQUM7Ozs7SUFJeEQsWUFBWTtJQUNaLDJCQUEyQixDQUFDLEdBQUcsa0JBQWtCLENBQUM7Q0FDckQsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGRhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCwgZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCc7XG5cbmltcG9ydCB7IGNhcnRGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3Qgc2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kV2l0aEJpbGxpbmdBbmRFbWFpbCA9IChleHRyYUNhcnRGcmFnbWVudHM6IERvY3VtZW50Tm9kZVtdID0gW10pID0+IGdxbGBcbiAgbXV0YXRpb24gU2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kV2l0aEJpbGxpbmdBbmRFbWFpbChcbiAgICAkY2FydElkOiBTdHJpbmchLFxuICAgICRwYXltZW50OiBQYXltZW50TWV0aG9kSW5wdXQhLFxuICAgICRhZGRyZXNzOiBCaWxsaW5nQWRkcmVzc0lucHV0ISxcbiAgICAkZW1haWw6IFN0cmluZyFcbiAgKSB7XG4gICAgc2V0QmlsbGluZ0FkZHJlc3NPbkNhcnQoaW5wdXQ6IHtcbiAgICAgIGNhcnRfaWQ6ICRjYXJ0SWRcbiAgICAgIGJpbGxpbmdfYWRkcmVzczogJGFkZHJlc3NcbiAgICB9KSB7XG4gICAgICBjYXJ0IHtcbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0UGF5bWVudE1ldGhvZE9uQ2FydChpbnB1dDoge1xuICAgICAgY2FydF9pZDogJGNhcnRJZFxuICAgICAgcGF5bWVudF9tZXRob2Q6ICRwYXltZW50XG4gICAgfSkge1xuICAgICAgY2FydCB7XG4gICAgICAgIGlkXG4gICAgICB9XG4gICAgfVxuICAgIHNldEd1ZXN0RW1haWxPbkNhcnQoaW5wdXQ6IHtcbiAgICAgIGNhcnRfaWQ6ICRjYXJ0SWQsXG4gICAgICBlbWFpbDogJGVtYWlsXG4gICAgfSkge1xuICAgICAgY2FydCB7XG4gICAgICAgIC4uLmNhcnRcbiAgICAgICAgJHtkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQoLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtjYXJ0RnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG5gO1xuIl19
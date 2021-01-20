/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartFragment } from './fragments/public_api';
/** @type {?} */
export const updateBillingAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation UpdateBillingAddress(
    $cartId: String!,
    $address: BillingAddressInput!
  ) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: $address
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWJpbGxpbmctYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy91cGRhdGUtYmlsbGluZy1hZGRyZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUV0RCxNQUFNLE9BQU8sb0JBQW9COzs7O0FBQUcsQ0FBQyxxQkFBcUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUE7Ozs7Ozs7Ozs7O1VBVzFFLDJCQUEyQixDQUFDLEdBQUcsa0JBQWtCLENBQUM7Ozs7SUFJeEQsWUFBWTtJQUNaLDJCQUEyQixDQUFDLEdBQUcsa0JBQWtCLENBQUM7Q0FDckQsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGRhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCwgZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCc7XG5cbmltcG9ydCB7IGNhcnRGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQmlsbGluZ0FkZHJlc3MgPSAoZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSA9IFtdKSA9PiBncWxgXG4gIG11dGF0aW9uIFVwZGF0ZUJpbGxpbmdBZGRyZXNzKFxuICAgICRjYXJ0SWQ6IFN0cmluZyEsXG4gICAgJGFkZHJlc3M6IEJpbGxpbmdBZGRyZXNzSW5wdXQhXG4gICkge1xuICAgIHNldEJpbGxpbmdBZGRyZXNzT25DYXJ0KGlucHV0OiB7XG4gICAgICBjYXJ0X2lkOiAkY2FydElkXG4gICAgICBiaWxsaW5nX2FkZHJlc3M6ICRhZGRyZXNzXG4gICAgfSkge1xuICAgICAgY2FydCB7XG4gICAgICAgIC4uLmNhcnRcbiAgICAgICAgJHtkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQoLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtjYXJ0RnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG5gO1xuIl19
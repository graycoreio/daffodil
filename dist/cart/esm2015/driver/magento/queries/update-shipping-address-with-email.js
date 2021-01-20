/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartFragment } from './fragments/public_api';
/** @type {?} */
export const updateShippingAddressWithEmail = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation UpdateShippingAddress(
    $cartId: String!,
    $address: ShippingAddressInput!,
    $email: String!
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
    setGuestEmailOnCart(input: {
      cart_id: $cartId,
      email: $email
    }) {
      cart {
        email
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXNoaXBwaW5nLWFkZHJlc3Mtd2l0aC1lbWFpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy91cGRhdGUtc2hpcHBpbmctYWRkcmVzcy13aXRoLWVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUV0RCxNQUFNLE9BQU8sOEJBQThCOzs7O0FBQUcsQ0FBQyxxQkFBcUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUE7Ozs7Ozs7Ozs7OztVQVlwRiwyQkFBMkIsQ0FBQyxHQUFHLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7SUFZeEQsWUFBWTtJQUNaLDJCQUEyQixDQUFDLEdBQUcsa0JBQWtCLENBQUM7Q0FDckQsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGRhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCwgZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCc7XG5cbmltcG9ydCB7IGNhcnRGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU2hpcHBpbmdBZGRyZXNzV2l0aEVtYWlsID0gKGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBtdXRhdGlvbiBVcGRhdGVTaGlwcGluZ0FkZHJlc3MoXG4gICAgJGNhcnRJZDogU3RyaW5nISxcbiAgICAkYWRkcmVzczogU2hpcHBpbmdBZGRyZXNzSW5wdXQhLFxuICAgICRlbWFpbDogU3RyaW5nIVxuICApIHtcbiAgICBzZXRTaGlwcGluZ0FkZHJlc3Nlc09uQ2FydChpbnB1dDoge1xuICAgICAgY2FydF9pZDogJGNhcnRJZFxuICAgICAgc2hpcHBpbmdfYWRkcmVzc2VzOiBbJGFkZHJlc3NdXG4gICAgfSkge1xuICAgICAgY2FydCB7XG4gICAgICAgIC4uLmNhcnRcbiAgICAgICAgJHtkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQoLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbiAgICAgIH1cbiAgICB9XG4gICAgc2V0R3Vlc3RFbWFpbE9uQ2FydChpbnB1dDoge1xuICAgICAgY2FydF9pZDogJGNhcnRJZCxcbiAgICAgIGVtYWlsOiAkZW1haWxcbiAgICB9KSB7XG4gICAgICBjYXJ0IHtcbiAgICAgICAgZW1haWxcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtjYXJ0RnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG5gO1xuIl19
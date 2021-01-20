/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { availableShippingMethodFragment } from './fragments/public_api';
/** @type {?} */
export const listShippingMethods = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  query ListShippingMethods($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      shipping_addresses {
        available_shipping_methods {
          ...availableShippingMethod
        }
      }
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${availableShippingMethodFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zaGlwcGluZy1tZXRob2RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJxdWVyaWVzL2xpc3Qtc2hpcHBpbmctbWV0aG9kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUV6RSxNQUFNLE9BQU8sbUJBQW1COzs7O0FBQUcsQ0FBQyxxQkFBcUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUE7Ozs7Ozs7OztRQVMzRSwyQkFBMkIsQ0FBQyxHQUFHLGtCQUFrQixDQUFDOzs7SUFHdEQsK0JBQStCO0lBQy9CLDJCQUEyQixDQUFDLEdBQUcsa0JBQWtCLENBQUM7Q0FDckQsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGRhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCwgZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCc7XG5cbmltcG9ydCB7IGF2YWlsYWJsZVNoaXBwaW5nTWV0aG9kRnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50cy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGNvbnN0IGxpc3RTaGlwcGluZ01ldGhvZHMgPSAoZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSA9IFtdKSA9PiBncWxgXG4gIHF1ZXJ5IExpc3RTaGlwcGluZ01ldGhvZHMoJGNhcnRJZDogU3RyaW5nISkge1xuICAgIGNhcnQoY2FydF9pZDogJGNhcnRJZCkge1xuICAgICAgaWRcbiAgICAgIHNoaXBwaW5nX2FkZHJlc3NlcyB7XG4gICAgICAgIGF2YWlsYWJsZV9zaGlwcGluZ19tZXRob2RzIHtcbiAgICAgICAgICAuLi5hdmFpbGFibGVTaGlwcGluZ01ldGhvZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAke2RhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuICAgIH1cbiAgfVxuICAke2F2YWlsYWJsZVNoaXBwaW5nTWV0aG9kRnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG5gO1xuIl19
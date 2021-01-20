/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { selectedShippingMethodFragment } from './fragments/public_api';
/** @type {?} */
export const getSelectedShippingMethod = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  query GetSelectedShippingMethod($cartId: String!) {
    cart(cart_id: $cartId) {
      shipping_addresses {
        selected_shipping_method {
          ...selectedShippingMethod
        }
      }
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${selectedShippingMethodFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXNlbGVjdGVkLXNoaXBwaW5nLW1ldGhvZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy9nZXQtc2VsZWN0ZWQtc2hpcHBpbmctbWV0aG9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXhFLE1BQU0sT0FBTyx5QkFBeUI7Ozs7QUFBRyxDQUFDLHFCQUFxQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQTs7Ozs7Ozs7UUFRakYsMkJBQTJCLENBQUMsR0FBRyxrQkFBa0IsQ0FBQzs7O0lBR3RELDhCQUE4QjtJQUM5QiwyQkFBMkIsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO0NBQ3JELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQsIGRhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnO1xuXG5pbXBvcnQgeyBzZWxlY3RlZFNoaXBwaW5nTWV0aG9kRnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50cy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkU2hpcHBpbmdNZXRob2QgPSAoZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSA9IFtdKSA9PiBncWxgXG4gIHF1ZXJ5IEdldFNlbGVjdGVkU2hpcHBpbmdNZXRob2QoJGNhcnRJZDogU3RyaW5nISkge1xuICAgIGNhcnQoY2FydF9pZDogJGNhcnRJZCkge1xuICAgICAgc2hpcHBpbmdfYWRkcmVzc2VzIHtcbiAgICAgICAgc2VsZWN0ZWRfc2hpcHBpbmdfbWV0aG9kIHtcbiAgICAgICAgICAuLi5zZWxlY3RlZFNoaXBwaW5nTWV0aG9kXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICR7ZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG4gICAgfVxuICB9XG4gICR7c2VsZWN0ZWRTaGlwcGluZ01ldGhvZEZyYWdtZW50fVxuICAke2RhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuYDtcbiJdfQ==
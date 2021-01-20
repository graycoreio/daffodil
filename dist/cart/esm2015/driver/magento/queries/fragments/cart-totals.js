/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { cartAddressFragment } from './cart-address';
import { selectedShippingMethodFragment } from './selected-shipping-method';
import { pricesFragment } from './prices';
/** @type {?} */
export const cartTotalsFragment = gql `
  fragment cartTotals on Cart {
    id
    shipping_addresses {
      ...cartAddress
      ... on ShippingCartAddress {
        selected_shipping_method {
          ...selectedShippingMethod
        }
      }
    }
    prices {
      ...prices
    }
  }
  ${cartAddressFragment}
  ${selectedShippingMethodFragment}
  ${pricesFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC10b3RhbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvZnJhZ21lbnRzL2NhcnQtdG90YWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFFMUMsTUFBTSxPQUFPLGtCQUFrQixHQUFHLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O0lBZWpDLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsY0FBYztDQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBjYXJ0QWRkcmVzc0ZyYWdtZW50IH0gZnJvbSAnLi9jYXJ0LWFkZHJlc3MnO1xuaW1wb3J0IHsgc2VsZWN0ZWRTaGlwcGluZ01ldGhvZEZyYWdtZW50IH0gZnJvbSAnLi9zZWxlY3RlZC1zaGlwcGluZy1tZXRob2QnO1xuaW1wb3J0IHsgcHJpY2VzRnJhZ21lbnQgfSBmcm9tICcuL3ByaWNlcyc7XG5cbmV4cG9ydCBjb25zdCBjYXJ0VG90YWxzRnJhZ21lbnQgPSBncWxgXG4gIGZyYWdtZW50IGNhcnRUb3RhbHMgb24gQ2FydCB7XG4gICAgaWRcbiAgICBzaGlwcGluZ19hZGRyZXNzZXMge1xuICAgICAgLi4uY2FydEFkZHJlc3NcbiAgICAgIC4uLiBvbiBTaGlwcGluZ0NhcnRBZGRyZXNzIHtcbiAgICAgICAgc2VsZWN0ZWRfc2hpcHBpbmdfbWV0aG9kIHtcbiAgICAgICAgICAuLi5zZWxlY3RlZFNoaXBwaW5nTWV0aG9kXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcHJpY2VzIHtcbiAgICAgIC4uLnByaWNlc1xuICAgIH1cbiAgfVxuICAke2NhcnRBZGRyZXNzRnJhZ21lbnR9XG4gICR7c2VsZWN0ZWRTaGlwcGluZ01ldGhvZEZyYWdtZW50fVxuICAke3ByaWNlc0ZyYWdtZW50fVxuYDtcbiJdfQ==
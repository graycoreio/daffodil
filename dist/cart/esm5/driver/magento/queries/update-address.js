/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export var updateAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  mutation UpdateAddress($cartId: String!, $address: CartAddressInput!) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: {\n        address: $address\n      }\n    }) {\n      cart {\n        id\n      }\n    }\n    setShippingAddressesOnCart(input: {\n      cart_id: $cartId\n      shipping_addresses: [{\n        address: $address\n      }]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation UpdateAddress($cartId: String!, $address: CartAddressInput!) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: {\n        address: $address\n      }\n    }) {\n      cart {\n        id\n      }\n    }\n    setShippingAddressesOnCart(input: {\n      cart_id: $cartId\n      shipping_addresses: [{\n        address: $address\n      }]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWFkZHJlc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvdXBkYXRlLWFkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7QUFTdEQsTUFBTSxLQUFPLGFBQWE7Ozs7QUFBRyxVQUFDLGtCQUF1QztJQUF2QyxtQ0FBQSxFQUFBLHVCQUF1QztJQUFLLE9BQUEsR0FBRywwaUJBQUEsb2JBb0JuRSxFQUFrRCwyQkFJeEQsRUFBWSxNQUNaLEVBQWtELElBQ3JELEtBTlMsMkJBQTJCLGdDQUFJLGtCQUFrQixJQUl2RCxZQUFZLEVBQ1osMkJBQTJCLGdDQUFJLGtCQUFrQjtBQXpCcUIsQ0EwQnpFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQsIGRhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnO1xuXG5pbXBvcnQgeyBjYXJ0RnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50cy9wdWJsaWNfYXBpJztcblxuLyoqXG4gKiBVcGRhdGUgdGhlIHNoaXBwaW5nIGFuZCBiaWxsaW5nIGFkZHJlc3Mgb2YgdGhlIGNhcnQuXG4gKiBBdCB0aGUgdGltZSBvZiB3cml0aW5nLCBNYWdlbnRvIDIgcHJvY2Vzc2VzIGNvbXBvdW5kIHF1ZXJpZXMgaW4gdGhlIG9yZGVyIHRoZXkgYXJlIGRlZmluZWQuXG4gKiBXZSByZWx5IG9uIHRoaXMgZmFjdCBhbmQgb25seSB1c2UgdGhlIHJldHVybiBvZiB0aGUgbGFzdCBxdWVyeS5cbiAqIFRoaXMgaGVscHMgdXMga2VlcCBxdWVyeSBjb21wbGV4aXR5IGRvd24gYW5kIHNhdmUgc29tZSBzZXJ2ZXIgQ1BVIGN5Y2xlcy5cbiAqIERyaXZlciBiZWhhdmlvciBpcyBub3QgZ3VhcmFudGVlZCBpZiBNYWdlbnRvIG5vIGxvbmdlciBwcm9jZXNzZXMgY29tcG91bmQgcXVlcmllcyBpbiB0aGUgb3JkZXIgdGhleSBhcmUgZGVmaW5lZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUFkZHJlc3MgPSAoZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSA9IFtdKSA9PiBncWxgXG4gIG11dGF0aW9uIFVwZGF0ZUFkZHJlc3MoJGNhcnRJZDogU3RyaW5nISwgJGFkZHJlc3M6IENhcnRBZGRyZXNzSW5wdXQhKSB7XG4gICAgc2V0QmlsbGluZ0FkZHJlc3NPbkNhcnQoaW5wdXQ6IHtcbiAgICAgIGNhcnRfaWQ6ICRjYXJ0SWRcbiAgICAgIGJpbGxpbmdfYWRkcmVzczoge1xuICAgICAgICBhZGRyZXNzOiAkYWRkcmVzc1xuICAgICAgfVxuICAgIH0pIHtcbiAgICAgIGNhcnQge1xuICAgICAgICBpZFxuICAgICAgfVxuICAgIH1cbiAgICBzZXRTaGlwcGluZ0FkZHJlc3Nlc09uQ2FydChpbnB1dDoge1xuICAgICAgY2FydF9pZDogJGNhcnRJZFxuICAgICAgc2hpcHBpbmdfYWRkcmVzc2VzOiBbe1xuICAgICAgICBhZGRyZXNzOiAkYWRkcmVzc1xuICAgICAgfV1cbiAgICB9KSB7XG4gICAgICBjYXJ0IHtcbiAgICAgICAgLi4uY2FydFxuICAgICAgICAke2RhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke2NhcnRGcmFnbWVudH1cbiAgJHtkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24oLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbmA7XG4iXX0=
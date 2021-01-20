/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { availablePaymentMethodFragment } from './fragments/public_api';
/** @type {?} */
export var listPaymentMethods = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  query ListPaymentMethods($cartId: String!) {\n    cart(cart_id: $cartId) {\n      available_payment_methods {\n        ...availablePaymentMethod\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query ListPaymentMethods($cartId: String!) {\n    cart(cart_id: $cartId) {\n      available_payment_methods {\n        ...availablePaymentMethod\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), availablePaymentMethodFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1wYXltZW50LW1ldGhvZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvbGlzdC1wYXltZW50LW1ldGhvZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXhFLE1BQU0sS0FBTyxrQkFBa0I7Ozs7QUFBRyxVQUFDLGtCQUF1QztJQUF2QyxtQ0FBQSxFQUFBLHVCQUF1QztJQUFLLE9BQUEsR0FBRyxvUkFBQSx1S0FNMUUsRUFBa0Qsa0JBR3RELEVBQThCLE1BQzlCLEVBQWtELElBQ3JELEtBTE8sMkJBQTJCLGdDQUFJLGtCQUFrQixJQUdyRCw4QkFBOEIsRUFDOUIsMkJBQTJCLGdDQUFJLGtCQUFrQjtBQVYwQixDQVc5RSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkLCBkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9ncmFwaHFsJztcblxuaW1wb3J0IHsgYXZhaWxhYmxlUGF5bWVudE1ldGhvZEZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudHMvcHVibGljX2FwaSc7XG5cbmV4cG9ydCBjb25zdCBsaXN0UGF5bWVudE1ldGhvZHMgPSAoZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSA9IFtdKSA9PiBncWxgXG4gIHF1ZXJ5IExpc3RQYXltZW50TWV0aG9kcygkY2FydElkOiBTdHJpbmchKSB7XG4gICAgY2FydChjYXJ0X2lkOiAkY2FydElkKSB7XG4gICAgICBhdmFpbGFibGVfcGF5bWVudF9tZXRob2RzIHtcbiAgICAgICAgLi4uYXZhaWxhYmxlUGF5bWVudE1ldGhvZFxuICAgICAgfVxuICAgICAgJHtkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQoLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbiAgICB9XG4gIH1cbiAgJHthdmFpbGFibGVQYXltZW50TWV0aG9kRnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG5gO1xuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { availableShippingMethodFragment } from './fragments/public_api';
/** @type {?} */
export var listShippingMethods = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  query ListShippingMethods($cartId: String!) {\n    cart(cart_id: $cartId) {\n      id\n      shipping_addresses {\n        available_shipping_methods {\n          ...availableShippingMethod\n        }\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query ListShippingMethods($cartId: String!) {\n    cart(cart_id: $cartId) {\n      id\n      shipping_addresses {\n        available_shipping_methods {\n          ...availableShippingMethod\n        }\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), availableShippingMethodFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zaGlwcGluZy1tZXRob2RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJxdWVyaWVzL2xpc3Qtc2hpcHBpbmctbWV0aG9kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVsRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFekUsTUFBTSxLQUFPLG1CQUFtQjs7OztBQUFHLFVBQUMsa0JBQXVDO0lBQXZDLG1DQUFBLEVBQUEsdUJBQXVDO0lBQUssT0FBQSxHQUFHLDRVQUFBLCtOQVMzRSxFQUFrRCxrQkFHdEQsRUFBK0IsTUFDL0IsRUFBa0QsSUFDckQsS0FMTywyQkFBMkIsZ0NBQUksa0JBQWtCLElBR3JELCtCQUErQixFQUMvQiwyQkFBMkIsZ0NBQUksa0JBQWtCO0FBYjJCLENBYy9FLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQsIGRhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnO1xuXG5pbXBvcnQgeyBhdmFpbGFibGVTaGlwcGluZ01ldGhvZEZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudHMvcHVibGljX2FwaSc7XG5cbmV4cG9ydCBjb25zdCBsaXN0U2hpcHBpbmdNZXRob2RzID0gKGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBxdWVyeSBMaXN0U2hpcHBpbmdNZXRob2RzKCRjYXJ0SWQ6IFN0cmluZyEpIHtcbiAgICBjYXJ0KGNhcnRfaWQ6ICRjYXJ0SWQpIHtcbiAgICAgIGlkXG4gICAgICBzaGlwcGluZ19hZGRyZXNzZXMge1xuICAgICAgICBhdmFpbGFibGVfc2hpcHBpbmdfbWV0aG9kcyB7XG4gICAgICAgICAgLi4uYXZhaWxhYmxlU2hpcHBpbmdNZXRob2RcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHtkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQoLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbiAgICB9XG4gIH1cbiAgJHthdmFpbGFibGVTaGlwcGluZ01ldGhvZEZyYWdtZW50fVxuICAke2RhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuYDtcbiJdfQ==
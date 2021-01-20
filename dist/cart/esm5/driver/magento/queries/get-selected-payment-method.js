/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { selectedPaymentMethodFragment } from './fragments/public_api';
/** @type {?} */
export var getSelectedPaymentMethod = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  query GetSelectedPaymentMethod($cartId: String!) {\n    cart(cart_id: $cartId) {\n      selected_payment_method {\n        ...selectedPaymentMethod\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query GetSelectedPaymentMethod($cartId: String!) {\n    cart(cart_id: $cartId) {\n      selected_payment_method {\n        ...selectedPaymentMethod\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), selectedPaymentMethodFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXNlbGVjdGVkLXBheW1lbnQtbWV0aG9kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJxdWVyaWVzL2dldC1zZWxlY3RlZC1wYXltZW50LW1ldGhvZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVsRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFdkUsTUFBTSxLQUFPLHdCQUF3Qjs7OztBQUFHLFVBQUMsa0JBQXVDO0lBQXZDLG1DQUFBLEVBQUEsdUJBQXVDO0lBQUssT0FBQSxHQUFHLHVSQUFBLDBLQU1oRixFQUFrRCxrQkFHdEQsRUFBNkIsTUFDN0IsRUFBa0QsSUFDckQsS0FMTywyQkFBMkIsZ0NBQUksa0JBQWtCLElBR3JELDZCQUE2QixFQUM3QiwyQkFBMkIsZ0NBQUksa0JBQWtCO0FBVmdDLENBV3BGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQsIGRhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnO1xuXG5pbXBvcnQgeyBzZWxlY3RlZFBheW1lbnRNZXRob2RGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kID0gKGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBxdWVyeSBHZXRTZWxlY3RlZFBheW1lbnRNZXRob2QoJGNhcnRJZDogU3RyaW5nISkge1xuICAgIGNhcnQoY2FydF9pZDogJGNhcnRJZCkge1xuICAgICAgc2VsZWN0ZWRfcGF5bWVudF9tZXRob2Qge1xuICAgICAgICAuLi5zZWxlY3RlZFBheW1lbnRNZXRob2RcbiAgICAgIH1cbiAgICAgICR7ZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG4gICAgfVxuICB9XG4gICR7c2VsZWN0ZWRQYXltZW50TWV0aG9kRnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG5gO1xuIl19
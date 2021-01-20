/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartFragment } from './fragments/public_api';
/** @type {?} */
export var setSelectedShippingMethod = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  mutation SetSelectedShippingMethod($cartId: String!, $method: ShippingMethodInput!) {\n    setShippingMethodsOnCart(input: {\n      cart_id: $cartId\n      shipping_methods: [$method]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation SetSelectedShippingMethod($cartId: String!, $method: ShippingMethodInput!) {\n    setShippingMethodsOnCart(input: {\n      cart_id: $cartId\n      shipping_methods: [$method]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNlbGVjdGVkLXNoaXBwaW5nLW1ldGhvZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy9zZXQtc2VsZWN0ZWQtc2hpcHBpbmctbWV0aG9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFdEQsTUFBTSxLQUFPLHlCQUF5Qjs7OztBQUFHLFVBQUMsa0JBQXVDO0lBQXZDLG1DQUFBLEVBQUEsdUJBQXVDO0lBQUssT0FBQSxHQUFHLHNXQUFBLGdQQVEvRSxFQUFrRCwyQkFJeEQsRUFBWSxNQUNaLEVBQWtELElBQ3JELEtBTlMsMkJBQTJCLGdDQUFJLGtCQUFrQixJQUl2RCxZQUFZLEVBQ1osMkJBQTJCLGdDQUFJLGtCQUFrQjtBQWJpQyxDQWNyRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkLCBkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9ncmFwaHFsJztcblxuaW1wb3J0IHsgY2FydEZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudHMvcHVibGljX2FwaSc7XG5cbmV4cG9ydCBjb25zdCBzZXRTZWxlY3RlZFNoaXBwaW5nTWV0aG9kID0gKGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBtdXRhdGlvbiBTZXRTZWxlY3RlZFNoaXBwaW5nTWV0aG9kKCRjYXJ0SWQ6IFN0cmluZyEsICRtZXRob2Q6IFNoaXBwaW5nTWV0aG9kSW5wdXQhKSB7XG4gICAgc2V0U2hpcHBpbmdNZXRob2RzT25DYXJ0KGlucHV0OiB7XG4gICAgICBjYXJ0X2lkOiAkY2FydElkXG4gICAgICBzaGlwcGluZ19tZXRob2RzOiBbJG1ldGhvZF1cbiAgICB9KSB7XG4gICAgICBjYXJ0IHtcbiAgICAgICAgLi4uY2FydFxuICAgICAgICAke2RhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke2NhcnRGcmFnbWVudH1cbiAgJHtkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24oLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbmA7XG4iXX0=
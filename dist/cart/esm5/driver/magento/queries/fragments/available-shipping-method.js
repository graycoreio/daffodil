/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { moneyFragment } from './money';
/** @type {?} */
export var availableShippingMethodFragment = gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  fragment availableShippingMethod on AvailableShippingMethod {\n    carrier_code\n    method_code\n    carrier_title\n    method_title\n    amount {\n      ...money\n    }\n  }\n  ", "\n"], ["\n  fragment availableShippingMethod on AvailableShippingMethod {\n    carrier_code\n    method_code\n    carrier_title\n    method_title\n    amount {\n      ...money\n    }\n  }\n  ", "\n"])), moneyFragment);
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhaWxhYmxlLXNoaXBwaW5nLW1ldGhvZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy9mcmFnbWVudHMvYXZhaWxhYmxlLXNoaXBwaW5nLW1ldGhvZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUV4QyxNQUFNLEtBQU8sK0JBQStCLEdBQUcsR0FBRywwUUFBQSx5TEFVOUMsRUFBYSxJQUNoQixLQURHLGFBQWEsQ0FDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgbW9uZXlGcmFnbWVudCB9IGZyb20gJy4vbW9uZXknO1xuXG5leHBvcnQgY29uc3QgYXZhaWxhYmxlU2hpcHBpbmdNZXRob2RGcmFnbWVudCA9IGdxbGBcbiAgZnJhZ21lbnQgYXZhaWxhYmxlU2hpcHBpbmdNZXRob2Qgb24gQXZhaWxhYmxlU2hpcHBpbmdNZXRob2Qge1xuICAgIGNhcnJpZXJfY29kZVxuICAgIG1ldGhvZF9jb2RlXG4gICAgY2Fycmllcl90aXRsZVxuICAgIG1ldGhvZF90aXRsZVxuICAgIGFtb3VudCB7XG4gICAgICAuLi5tb25leVxuICAgIH1cbiAgfVxuICAke21vbmV5RnJhZ21lbnR9XG5gO1xuIl19
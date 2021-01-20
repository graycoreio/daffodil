/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
/** @type {?} */
export var placeOrder = gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  mutation PlaceOrder($cartId: String!) {\n    placeOrder(\n      input: {\n        cart_id: $cartId\n      }\n    ) {\n      order {\n        order_number\n      }\n    }\n  }\n"], ["\n  mutation PlaceOrder($cartId: String!) {\n    placeOrder(\n      input: {\n        cart_id: $cartId\n      }\n    ) {\n      order {\n        order_number\n      }\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Utb3JkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvcGxhY2Utb3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7O0FBRTlCLE1BQU0sS0FBTyxVQUFVLEdBQUcsR0FBRyxpUUFBQSxzTEFZNUIsSUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5leHBvcnQgY29uc3QgcGxhY2VPcmRlciA9IGdxbGBcbiAgbXV0YXRpb24gUGxhY2VPcmRlcigkY2FydElkOiBTdHJpbmchKSB7XG4gICAgcGxhY2VPcmRlcihcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIGNhcnRfaWQ6ICRjYXJ0SWRcbiAgICAgIH1cbiAgICApIHtcbiAgICAgIG9yZGVyIHtcbiAgICAgICAgb3JkZXJfbnVtYmVyXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl19